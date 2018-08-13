require 'faker'

#create projects
Project.create(
  name: "Lenticular Splines",
  description: Faker::Zeke.unique.quote,
  version_id: "1",
  photo_url: "https://i.imgur.com/6yYM25A.png",
  budget: "$30",
  topics: "cloud curvature"
)

#create users
User.create!(
  handle: "Splinter",
  email: "proto1@email.com",
  password: "asdf123",
  bio: Faker::Zeke.unique.quote,
  role: "admin"
)

#create equipment
Equipment.create!(
  user_id: '1',
  project_id: '1',
  tool_name: "weather machine"
)

Equipment.create!(
  user_id: '1',
  project_id: '1',
  tool_name: "french bezier curve"
)

Equipment.create!(
  user_id: '1',
  project_id: '1',
  tool_name: "800 nm lens"
)
