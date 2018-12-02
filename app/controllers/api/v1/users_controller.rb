class Api::V1::UsersController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [:index, :show]

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
    tool_belt = current_user.equipment.pluck(:tool_name).as_json.uniq
    gear = gear_rna(tool_belt)
    payload = {
      viewing_member: member,
      user: user,
      equipment: gear
    }
    render json: payload, include: ["projects"]
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
    params.permit(:id, :handle, :bio, :profile_photo, :user)
  end

  def gear_rna(array1)
      i = 1
      j = 0
      terminus = array1.length
      array2 = []
      while i <= terminus
        array2 << {id: i, tool_name: array1[j]}
        i += 1
        j += 1
      end
      return array2
  end

end
