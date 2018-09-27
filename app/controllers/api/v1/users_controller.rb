class Api::V1::UsersController < ApiController
  before_action :authorize_user, only: [:create, :edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def index
      users = User.all.order(created_at: :desc)
      render json: users
  end

  def show
      user = User.find(params[:id])
      render json: user
  end

end
