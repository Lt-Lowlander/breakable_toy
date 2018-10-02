class Api::V1::EquipmentInProjectsController < ApiController
  before_action :authorize_user, only: [:create, :edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def index
    related_tools = EquipmentInProjects.all.order(created_at: :desc)
    render json: related_tools
  end

  def show
      related_tools = EquipmentInProjects.where(id: params[:id])
      render json: related_tools
  end
end
