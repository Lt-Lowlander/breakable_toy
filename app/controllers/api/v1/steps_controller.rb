class Api::V1::StepsController < ApiController
  # before_action :authorize_user, only: [:create, :edit, :update, :destroy]
  #
  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("Not Found")
  #   end
  # end

  def index; end

  def show
    step = Step.where(project_id: params[:project_id], id: params[:id])
    render json: step
  end

  def new; end

  def create
    project = Project.find(params[:project_id])
    step = Step.new(step_data_params)
    step.project = project
    # step.sequence_number = project.steps.length + 1
    if step.save!
      render json: step
    else
      render json: {errors: step.errors.full_messages}
    end
  end

  def update
    edited_step = Step.where(project_id: params[:project_id], id: params[:id])
    if edited_step.update(phase_args)
      step = Step.where(project_id: params[:project_id]).order(id: :asc)
      render json: step
    else
      render json: {errors: edited_step.errors}
    end
  end

  def destroy
    step_termination = Step.where(project_id: params[:project_id], id: params[:id])
    if step_termination.destroy(step_obits)
      steps = Step.where(project_id: params[:project_id])
      render json: steps
    end
  end


  private
  def step_data_params
    params.permit(:instruction, :project_id)
  end

  def phase_args
    params.permit(:instruction)
  end

  def step_obits
    params.require(:id)
  end
end
