class Api::V1::EquipmentInProjectsController < ApiController

  def index
    jointer = EquipmentInProject.all
    render json: jointer
  end

  def show
    if controller_path == "api/v1/projects/:id"
      jointer = EquipmentInProject.where(project_id: params[:project_id])
      render json: jointer
    end
  end

  def create
    if controller_path == "api/v1/projects/:id/equipment"
      # project = Project.find(params[:project_id])
      # equipment_in_projects = EquipmentInProject.new(j_data)
    end
  end
end
