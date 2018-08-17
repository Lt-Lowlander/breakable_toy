class Api::V1::ProjectsController < ApiController
  before_action :authorize_user, only: [:edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end


  def index
    render json: Project.all
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

  def edit
    # lkjashdfkjsa
  end

  private
  def project_params
    params.permit(:name, :description, :photo_url, :budget)
  end

  def user_params
    project_params.merge(user_id: current_user.id)
  end
end
