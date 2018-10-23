class Api::V1::FamsController < ApiController

  def index
    families = Fam.all
    render json: families
  end

  def show
    family = Fam.where(id: params[:id])
    render json: family
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
