require 'faker'

#create users
users = User.create!([
  {handle: "Splinter", email: "email7@proto.com", password: "asdf123", bio: Faker::Zeke.unique.quote, role: "admin"},
  {handle: "Tinker_Kid", email: "email8@proto.com", password: "asdf123", bio: Faker::Zeke.unique.quote, role: "member"}
])

#create projects
projects = Project.create!([
  {name: "Lenticular Splines", description: Faker::Zeke.unique.quote, photo_url: "https://i.imgur.com/6yYM25A.png", budget: "$30", topics: "cloud curvature", users_id: '1'},
  {name: "Treadmill Bike", description: Faker::Zeke.unique.quote, photo_url: "http://www.bikeforest.com/tread/treadmillbike.jpg", budget: "$54", topics: "gear ratios", users_id: '1'},
  {name: "Stiletto Umbrellas", description: Faker::Zeke.unique.quote, photo_url: "https://i.ytimg.com/vi/BmxR8tH7MQI/maxresdefault.jpg", budget: "$79", topics: "fashion", users_id: '2'},
  ])

#create equipment
equipment = Equipment.create!([
  {id: '1', user_id: '1', project_id: '1', tool_name: "weather machine"},
  {id: '2', user_id: '1', project_id: '1', tool_name: "french bezier curve"},
  {id: '3', user_id: '1', project_id: '1', tool_name: "800 nm lens"},
  {id: '4', user_id: '1', project_id: '2', tool_name: "bike pump"},
  {id: '5', user_id: '1', project_id: '2', tool_name: "monkey wrench"},
  {id: '6', user_id: '1', project_id: '3', tool_name: "Singer sewing machine"},
])

# create materials
materials = Material.create!([
  {id: '1', project_id: '1', material_name: "duct tape"},
  {id: '2', project_id: '1', material_name: "water vapor"},
  {id: '3', project_id: '2', material_name: "wheels"},
  {id: '4', project_id: '2', material_name: "spokes"},
  {id: '5', project_id: '2', material_name: "chewing gum"},
])

# #create topics
steps = Step.create!([
  {id: '1', project_id: '1', sequence_number: '1', instruction: Faker::Zeke.unique.quote, step_photo: ""},
  {id: '2', project_id: '1', sequence_number: '2', instruction: Faker::Zeke.unique.quote, step_photo: ""},
  {id: '3', project_id: '1', sequence_number: '3', instruction: Faker::Zeke.unique.quote, step_photo: ""},
  {id: '4', project_id: '1', sequence_number: '4', instruction: Faker::Zeke.unique.quote, step_photo: ""},
  {id: '5', project_id: '1', sequence_number: '5', instruction: Faker::Zeke.unique.quote, step_photo: ""},
  {id: '6', project_id: '1', sequence_number: '6', instruction: Faker::Zeke.unique.quote, step_photo: ""},
  {id: '7', project_id: '1', sequence_number: '7', instruction: Faker::Zeke.unique.quote, step_photo: ""},
  {id: '8', project_id: '1', sequence_number: '8', instruction: Faker::Zeke.unique.quote, step_photo: ""},
])
