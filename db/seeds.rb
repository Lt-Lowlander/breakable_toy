require 'faker'

Project.create(
  name: "Lenticular Splines",
  description: Faker::Zeke.unique.quote,
  version_id: "1",
  photo_url: "https://i.imgur.com/6yYM25A.png",
  budget: "$30",
  topics: "cloud curvature"
)

Equipment.create!(
  user: User.first,
  project: Project.first,
  tool_name: "weather machine"
)
