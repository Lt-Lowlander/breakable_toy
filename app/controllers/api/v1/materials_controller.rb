class Api::V1::MaterialsController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    materials = Material.where(project_id: params[:project_id]).order(id: :asc)
    render json: materials
  end

  def show
    materials = Material.where(project_id: params[:project_id]).order(id: :asc)
    render json: materials
  end

  def create
    project = Project.find(params[:project_id])
    material = Material.new(mats_data)
    material.project = project
    if material.save!
      render json: material
    else
      render json: { errors: material.errors.full_messages }
    end
  end

  def update
    edited_material = Material.where(project_id: params[:project_id], id: params[:id])
    if edited_material.update(mats_params)
      materials = Material.where(project_id: params[:project_id]).order(id: :asc)
      render json: materials
    else
      render json: {errors: edited_material.errors}
    end
  end

  def destroy
    material_termination = Material.where(project_id: params[:project_id], id: params[:id])
    if material_termination.destroy(mats_obits)
      materials = Material.where(project_id: params[:project_id])
      render json: materials
    end
  end

  private
  def mats_data
    params.permit(:material_name, :project_id)
  end

  def mats_params
    params.permit(:material_name)
  end

  def mats_obits
    params.require(:id)
  end
end
