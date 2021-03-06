class Api::V1::FamsController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [:index, :show]

  def index
    families = Fam.all
    render json: families
  end

  def show
    if current_user == nil
      member = ""
    else
      member = current_user.id
    end
    family = Fam.where(id: params[:id])
    payload = {
      viewing_member: member,
      fam: family
    }
    render json: payload, include: ["projects"]
  end

  def create
    family = Fam.new(fam_data)
    groups = Fam.all
    family.id = groups.length + 1
    if family.save
      render json: family
    else
      trouble = { errors: family.errors.full_messages }
      render json: trouble
    end
  end

  private
  def fam_data
    params.permit(:id)
  end
end
