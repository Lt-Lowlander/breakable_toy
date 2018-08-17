#create users
users = User.create!([
  {handle: "Splinter", email: "lowlander@email.com", password: "hackgyver", bio: "Welcome to my first project!", role: "admin"},
])

#create projects
projects = Project.create!([
  {name: "4x4x4 LED Cube", description: "Faker::Zeke.unique.quote", photo_url: "https://cdn.instructables.com/FAY/S5IT/GDLXYC2R/FAYS5ITGDLXYC2R.LARGE.jpg?auto=webp&width=430", version_id: '1', budget: "$36", topics: "electronics", user_id: '1'},
  {name: "Reticulating Splines", description: "Faker::Zeke.unique.quote", photo_url: "https://i.imgur.com/6yYM25A.png", version_id: '1', budget: "$30", topics: "cloud curvature", user_id: '1'},
  {name: "Treadmill Bike", description: "Faker::Zeke.unique.quote", photo_url: "http://www.bikeforest.com/tread/treadmillbike.jpg", version_id: '1', budget: "$54", topics: "gear ratios", user_id: '1'},
  ])

#create equipment
equipment = Equipment.create!([
  {id: '1', user_id: '1', project_id: '1', tool_name: "soldering iron"},
  {id: '2', user_id: '1', project_id: '1', tool_name: "screw driver"},
  {id: '3', user_id: '1', project_id: '1', tool_name: "wire strippers"},
  {id: '4', user_id: '1', project_id: '1', tool_name: "needle nose pliers"},
  {id: '5', user_id: '1', project_id: '2', tool_name: "monkey wrench"},
  {id: '6', user_id: '1', project_id: '3', tool_name: "Singer sewing machine"},
])

# create materials
materials = Material.create!([
  {id: '1', project_id: '1', material_name: "tin-based solder"},
  {id: '2', project_id: '1', material_name: "64 LEDs"},
  {id: '6', project_id: '1', material_name: "arduino"},
  {id: '7', project_id: '1', material_name: "breadboard"},
  {id: '3', project_id: '1', material_name: "resistors"},
  {id: '4', project_id: '2', material_name: "spokes"},
  {id: '5', project_id: '2', material_name: "chewing gum"},
])

# #create topics
steps = Step.create!([
  {id: '1', project_id: '1', sequence_number: '1', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
  {id: '2', project_id: '1', sequence_number: '2', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
  {id: '3', project_id: '1', sequence_number: '3', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
  {id: '4', project_id: '1', sequence_number: '4', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
  {id: '5', project_id: '1', sequence_number: '5', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
  {id: '6', project_id: '1', sequence_number: '6', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
  {id: '7', project_id: '1', sequence_number: '7', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
  {id: '8', project_id: '1', sequence_number: '8', instruction: "Faker::Zeke.unique.quote", step_photo: ""},
])
