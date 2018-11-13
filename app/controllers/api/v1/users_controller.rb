class Api::V1::UsersController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    users = User.all.order(created_at: :desc)
    render json: users
  end

  def show
      if current_user == nil
        member = ""
      else
        member = current_user.id
      end
      user = User.find(params[:id])
      payload = {
        viewing_member: member,
        user: user
      }
      render json: payload, include: ["equipment", "projects"]
  end

  def update
    edited_user = User.where(id: params[:id])
    if edited_user.update(user_data)
      user = User.where(id: params[:id])
      render json: user
    else
      render json: {errors: edited_user.errors}
    end
  end

  private
  def user_data
    params.permit(:handle, :bio, :profile_photo)
  end

end
