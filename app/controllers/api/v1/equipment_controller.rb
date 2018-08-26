class Api::V1::EquipmentController < ApiController
  before_action :authorize_user, only: [:edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def index
    equipment = Equipment.where(project_id: params[:project_id])
    render json: equipment
  end

  def create
    project = Project.find(params[:project_id])
    equipment = Equipment.new(equipment_data)
    equipment.project = project
    binding.pry
    # if project.equipment.last.nil?
    #   equipment.item_number = 1
    # else
    #   equipment.item_number = project.equipment.last.item_number + 1
    # end
    if equipment.save!
      render json: equipment
    else
      binding.pry
      render json: { errors: equipment.errors.full_messages }
    end
  end

  def update
    equipment = Equipment.find(params[:id])
  end

  private
  def tool_data
    params.permit(:tool_name, :project_id)
  end

  def equipment_data
    tool_data.merge(user_id: current_user.id)
  end
end
