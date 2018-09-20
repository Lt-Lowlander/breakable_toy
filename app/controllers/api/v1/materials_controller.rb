class Api::V1::MaterialsController < ApiController
  before_action :authorize_user, only: [:edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def index
    materials = Material.where(project_id: params[:project_id]).order(id: :asc)
    render json: materials
  end

  def show
    materials = Material.where(project_id: params[:project_id], id: params[:id]).order(id: :asc)
    render json: materials
  end

  def create
    project = Project.find(params[:project_id])
    material = Material.new(material_data)
    material.project = project
    if project.materials.last.nil?
      material.item_number = 1
    else
      material.item_number = project.materials.last.item_number + 1
    end
    if material.save!
      render json: material
    else
      render json: { errors: material.errors.full_messages }
    end
  end


  def update
    edited_material = Material.where(project.id: params[:project_id], id: params[:id])
    if edited_material.update(mats_params)
      materials = Material.where(project_id: params[:project_id]).order(id: :asc)
      render json: materials
    else
      render json: {errors: edited_material.errors}
    end
  end


  private
  def material_data
    params.permit(:item_number, :material_name, :project_id)
  end

  def mats_params
    params.permit(:material_name)
  end
end
