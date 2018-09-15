class Api::V1::StepsController < ApiController

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
    step.sequence_number = project.steps.length + 1
    if step.save!
      render json: step
    else
      render json: { errors: step.errors.full_messages }
    end
  end

  def update
    step = Step.find(params[:id])
  end

  private
  def step_data_params
    params.permit(:instruction, :project_id)
  end
end
