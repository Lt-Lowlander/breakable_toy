class Api::V1::EquipmentController < ApiController
  # before_action :authorize_user, only: [:edit, :update, :destroy]
  #
  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("Not Found")
  #   end
  # end

  def index
    # materials = Material.where(project_id: params[:project_id])
    # render json: materials
  end
end
