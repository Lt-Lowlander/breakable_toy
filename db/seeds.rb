require 'faker'

#create users
users = User.create!([
  {handle: "Splinter", email: "proto2@email.com", password: "asdf123", bio: Faker::Zeke.unique.quote, role: "admin"},
  {handle: "Tinker_Kid", email: "proto3@email.com", password: "asdf123", bio: Faker::Zeke.unique.quote, role: "member"},
])

#create projects
projects = Project.create!([
  {name: "Lenticular Splines", description: Faker::Zeke.unique.quote, version_id: "1", photo_url: "https://i.imgur.com/6yYM25A.png",
  budget: "$30", topics: "cloud curvature", users_id: '1'},
  {name: "Treadmill Bike", description: Faker::Zeke.unique.quote, version_id: "1", photo_url: "http://www.bikeforest.com/tread/treadmillbike.jpg",
  budget: "$75", topics: "gear ratios", users_id: '1'},
])


#create equipment
equipment = Equipment.create!([
  {user_id: '1', project_id: '1', tool_name: "weather machine"},
  {user_id: '1', project_id: '1', tool_name: "french bezier curve"},
  {user_id: '1', project_id: '1', tool_name: "800 nm lens"},
])

# create materials
materials = Material.create!([
  {project_id: '1', material_name: "duct tape"},
  {project_id: '1', material_name: "water"}
])
