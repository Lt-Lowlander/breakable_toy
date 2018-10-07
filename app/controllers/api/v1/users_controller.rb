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
      if current_user == nil
        member = ""
      else
        member = current_user.handle
      end
      user = User.find(params[:id])
      payload = {
        viewing_member: member,
        user: user
      }
      render json: payload, include: ["equipment", "projects"]
  end

end
