require 'faker'

#create users
users = User.create!([
  {handle: "Splinter", email: "email1@proto.com", password: "asdf123", bio: Faker::Zeke.unique.quote, role: "admin"},
  {handle: "Tinker_Kid", email: "email2@proto.com", password: "asdf123", bio: Faker::Zeke.unique.quote, role: "member"}
])

#create projects
projects = Project.create!([
  {name: "Lenticular Splines", description: Faker::Zeke.unique.quote, version_id: "1", photo_url: "https://i.imgur.com/6yYM25A.png", budget: "$30", topics: "cloud curvature", users_id: '1'},
  {name: "Treadmill Bike", description: Faker::Zeke.unique.quote, version_id: "1", photo_url: "http://www.bikeforest.com/tread/treadmillbike.jpg", budget: "$54", topics: "gear ratios", users_id: '1'},
  {name: "Stiletto Umbrellas", description: Faker::Zeke.unique.quote, version_id: "1", photo_url: "https://i.ytimg.com/vi/BmxR8tH7MQI/maxresdefault.jpg", budget: "$79", topics: "fashion", users_id: '2'},
  ])

#create equipment
equipment = Equipment.create!([
  {user_id: '1', project_id: '1', tool_name: "weather machine"},
  {user_id: '1', project_id: '1', tool_name: "french bezier curve"},
  {user_id: '1', project_id: '1', tool_name: "800 nm lens"},
  {user_id: '1', project_id: '2', tool_name: "bike pump"},
  {user_id: '1', project_id: '2', tool_name: "monkey wrench"},
  {user_id: '1', project_id: '3', tool_name: "Singer sewing machine"},
])

# create materials
materials = Material.create!([
  {project_id: '1', material_name: ["duct tape", "water vapor"]},
  {project_id: '2', material_name: ["wheels", "spokes", "chewing gum"]},
])
#
# #create topics
# topics = Topic.create!([
#   {project_id}
#   ])
