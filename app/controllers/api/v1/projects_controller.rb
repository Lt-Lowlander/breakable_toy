class Api::V1::ProjectsController < ApiController
  before_action :authorize_user, only: [:edit, :update, :destroy]

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def index
    if current_user == nil
      render json: Project.all
    elsif current_user.role == "member"
      payload = {
        venues: Project.all,
        member: true
      }
      render json: payload
    elsif current_user.admin?
      payload = {
        projects = Project.all,
        member: true,
        admin: true
      }
      render json: payload
    end
  end

  # def show
  #   render json: Project.find(params[:id]), include: ["reviews", "reviews.review_votes"]
  # end

  # def new; end
  #
  # def create
  #   venue = Venue.new(venue_params)
  #   if venue.save
  #     render json: venue
  #   else
  #     payload = { errors: venue.errors.full_messages }
  #     render json: payload
  #   end
  # end
  #
  # def update
  #   venue = Venue.find(params[:id])
  #   if venue.update(venue_params)
  #     render json: venue
  #   else
  #     payload = { errors: venue.errors.full_messages }
  #     render json: payload
  #   end
  # end
  #
  # def destroy
  #   venue = Venue.find(params[:id])
  #   venue.destroy
  #
  #   if current_user.admin?
  #     payload = {
  #       venues: Venue.all,
  #       admin: true
  #     }
  #     render json: payload
  #   else
  #     render json: Venue.all
  #   end
  # end

  private
  def project_params
    params.permit(:name, :description, :version, :photo)
  end
end
