class ApiController < ApplicationController
  # skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
