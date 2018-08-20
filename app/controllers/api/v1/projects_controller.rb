class Api::V1::ProjectsController < ApiController
  before_action :authorize_user, only: [:edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end


  def index
    if current_user == nil
      payload = {
        projects: Project.all.order(created_at: :desc),
        member: false,
        admin: false
      }
      render json: payload
    elsif current_user.role == "member"
      payload = {
        projects: Project.all.order(created_at: :desc),
        member: true,
        admin: false
      }
      render json: payload
    elsif current_user.admin?
      payload = {
        projects: Project.all.order(created_at: :desc),
        member: true,
        admin: true
      }
      render json: payload
    end
  end


  def show
    project = Project.find(params[:id])
    render json: project
  end

  def new; end

  def create
    project = Project.new(user_params)
    if project.save
      render json: project
    else
      payload = { errors: project.errors.full_messages }
      render json: payload
    end
  end

  def update
    updated_project = Project.find(params[:id])
    if updated_project.update(user_params)
        render json: { project: updated_project }
    else
      render json: { error: updated_project.errors }
    end
  end

  private
  def project_params
    params.permit(:name, :description, :photo_url, :budget)
  end

  def user_params
    # if project.version_id
    #   new_model = project.version_id + 1
    # else
    #   new_model = project.version_id
    # end
    project_params.merge(user_id: current_user.id, handle: current_user.handle, version_id: new_model)
  end
end
