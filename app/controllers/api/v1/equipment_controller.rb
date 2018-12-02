class Api::V1::EquipmentController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
  # if controller_path == "api/v1/equipment"
  # end
    equipment_in_projects = Equipment.where(equipment_id: params[:equipment_id])
    machines = Equipment.all.order(id: :asc)
    render json: machines
  end

  def show
    equipment = Equipment.where(project_id: params[:project_id]).order(id: :asc)
    render json: equipment
  end

  def create
    project = Project.find(params[:project_id])
    equipment = Equipment.new(tool_data)
    equipment.project = project
    if equipment.save!
      render json: equipment
    else
      render json: { errors: equipment.errors.full_messages }
    end
  end

  def update
    edited_equipment = Equipment.where(project_id: params[:project_id], id: params[:id])
    if edited_equipment.update(tool_params)
      equipment = Equipment.where(project_id: params[:project_id]).order(id: :asc)
      render json: equipment
    else
      render json: {errors: edited_equipment.errors}
    end
  end

  def destroy
    equipment_termination = Equipment.where(project_id: params[:project_id], id: params[:id])
    if equipment_termination.destroy(tool_obits)
      equipment = Equipment.where(project_id: params[:project_id]).order(id: :asc)
      render json: equipment
    end
  end

  private
  def tool_data
    params.permit(:tool_name, :project_id).merge(user_id: current_user.id)
  end

  # def tool_params
  #   params.permit(:tool_name)
  # end

  def tool_obits
    params.require(:id)
  end
end
