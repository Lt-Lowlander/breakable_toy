class Api::V1::ProjectsController < ApiController
  # before_action :authorize_user, only: [:create, :edit, :update, :destroy]
  #
  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("Not Found")
  #   end
  # end

  def index
    if current_user == nil
      payload = {
        projects: Project.all.order(created_at: :desc),
        viewing_member: '',
        member: false,
        admin: false
      }
      render json: payload
    elsif current_user.role == "member"
      present_member = current_user.id
      payload = {
        projects: Project.all.order(created_at: :desc),
        viewing_member: present_member,
        member: true,
        admin: false
      }
      render json: payload
    elsif current_user.admin?
      payload = {
        projects: Project.all.order(created_at: :desc),
        viewing_member: '',
        member: true,
        admin: true
      }
      render json: payload
    end
  end


  def show
    if current_user == nil
      member = ""
    else
      member = current_user.id
    end
    present_project = Project.find(params[:id])
    payload = {
      viewing_member: member,
      project: present_project
      }
    render json: payload, include: ["equipment", "materials", "steps"]
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
    params.permit(:name, :description, :photo_url, :budget, :version_id, :parent_id, :family_id)
  end

  def user_params
    project_params.merge(user_id: current_user.id, handle: current_user.handle)
  end
end
