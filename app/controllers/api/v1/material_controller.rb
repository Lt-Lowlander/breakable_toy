class Api::V1::MaterialsController < ApiController
  before_action :authorize_user, only: [:edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def index
    materials = Material.where(project_id: params[:project_id])
    render json: materials
  end

  def create
    project = Project.find(params[:project_id])
    material = Material.new(material_data)
    material.project = project

    if material.save
      render json: material
    else
      render json: { errors: material.errors.full_messages }
    end
  end

  def update
    material = Material.find(params[:id])
  end

  private
  def material_data
    params.require(:material).permit
  end
end
