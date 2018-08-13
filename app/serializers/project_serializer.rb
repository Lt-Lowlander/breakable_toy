class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :version_id, :photo_url, :budget, :topics, :equipment
  # :format

  has_many :equipment
  has_many :materials

  # def format
  #   eq_array = []
  #   project = Project.find_by(params[:id])
  #   binding.pry
  #   project.equipment.Each do |elem|
  #     eq_array << elem.tool_name
  #   end
  #   return eq_array
  # end

end
