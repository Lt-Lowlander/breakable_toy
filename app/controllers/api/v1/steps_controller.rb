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
      render json: {errors: step.errors.full_messages}
    end
  end

  def update
    edited_step = Step.where(project_id: params[:project_id], id: params[:id])
    if edited_step.update(phase_args)
      steps = Step.where(project_id: params[:project_id]).order(sequence_number: :asc)
      render json: steps
    else
      render json: {errors: edited_step.errors}
    end
  end

  def destroy
    step_termination = Step.where(project_id: params[:project_id], id: params[:id])
    # binding.pry
    # phase_shift = step_termination.sequence_number
    # binding.pry
    if step_termination.destroy(step_obits)
      steps = Step.where(project_id: params[:project_id])
      # steps.each do |stage|
      #   if stage.sequence_number > phase_shift
      #     stage.sequence_number -= 1
      #   end
      # end
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
