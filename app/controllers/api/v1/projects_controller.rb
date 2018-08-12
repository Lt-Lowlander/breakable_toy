class Api::V1::ProjectsController < ApiController
  before_action :authorize_user, only: [:edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def index
    if current_user == nil
      render json: Project.all
    elsif current_user.role == "member"
      payload = {
        projects: Project.all,
        member: true
      }
      render json: payload
    end
  end

  def show
    project = Project.find(params[:id])

    render json: {project: project, include: ["equipment"] }
  end


  private
  def project_params
    params.permit(:name, :description, :version_id, :photo_url)
  end
end
