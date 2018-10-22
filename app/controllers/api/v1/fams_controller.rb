class Api::V1::FamsController < ApiController

  def index
    families = Fam.all
    render json: families
  end

  def show
    family = Fam.where(id: params[:id])
    render json: family
  end

end
