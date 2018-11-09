#create users
users = User.create!([
  {handle: "Splinter", email: "aerocricket@gmail.com", password: "hackgyver", bio: "Try out the Konami Code (↑, ↑, ↓, ↓, ←, →, ←, →, b, a, enter) anywhere on this site to learn more about me", role: "admin"},
  {handle: "Tinker_Kid", email: "example@email.com", password: "asdf123", bio: "Building the dream", role: "member"},
])

# create families
fams = Fam.create!([
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  ])

#create projects
projects = Project.create!([
  {name: "LED Cube", description: "A Raspberry Pi-driven display", photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/project_covers/4x4x4_cube.jpg'), 'image/jpeg'), version_id: '1', budget: "$100", topics: "electronics", user_id: '1', handle: "Splinter", fam_id: '1'},
  {name: "Smart Mirror", description: "A Raspberry Pi-driven display", photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/project_covers/magic_mirror.png'), 'image/png'), version_id: '1', budget: "$100", topics: "electronics", user_id: '1', handle: "Splinter", fam_id: '2'},
  {name: "Wooden Puzzle Box", description: "Secret compartments and yosegi veneer work", photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/project_covers/yosegi_box.jpg'), 'image/jpeg'), version_id: '1', budget: "$40", topics: "woodworking", user_id: '1', handle: "Splinter", fam_id: '3'},
  {name: "Ammo Crate Speaker", description: "Upcycling at it's finest", photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/project_covers/bang_box.png'), 'image/jpeg'), version_id: '1', budget: "$80", topics: "Audio Gear", user_id: '1', handle: "Splinter", fam_id: '4'},
  {name: "3D printed Planter", description: "Great for having at your work desk", photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/project_covers/bonsai.jpg'), 'image/jpeg'), version_id: '1', budget: "$15", topics: "Desktop Printing", user_id: '1', handle: "Splinter", fam_id: '5'},
  {name: "Arduino-powered Stargate", description: "Check out this rotating Stargate! The printed files can be found here: https://www.thingiverse.com/thing:571853 ", photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/project_covers/strgt.jpg'), 'image/jpeg'), version_id: '1', budget: "$36", topics: "Desktop Printing", user_id: '2', handle: "Tinker_Kid", fam_id: '6'},
  {name: "LED cube", description: "An updated take on Splinter's original post", photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/project_covers/8x8x8_cube.jpg'), 'image/jpeg'), version_id: '2', budget: "$67", topics: "electronics", user_id: '2', handle: "Tinker_Kid", parent_id: '1', fam_id: '1'},
  ])

# #create equipment
equipment = Equipment.create!([
  {id: '1', tool_name: "Soldering Iron"},
  {id: '2', tool_name: "Screwdriver"},
  {id: '3', tool_name: "Wire Strippers"},
  {id: '4', tool_name: "Needle-nose Pliers"},
  {id: '5', tool_name: "3D Printer"},
  {id: '6', tool_name: "Laptop"},
  {id: '7', tool_name: "Hot Glue Gun"},
  {id: '8', tool_name: "Planer"},
  {id: '9', tool_name: "Jointer"},
  {id: '10', tool_name: "Table Saw"},
  {id: '11', tool_name: "Table Router"},
  {id: '12', tool_name: "Drill Press"},
])

# create equipment in projects
equipment_in_projects = EquipmentInProject.create!([
  {id: '1', equipment_id: '1', project_id: '1', user_id: '1'},
  {id: '2', equipment_id: '2', project_id: '1', user_id: '1'},
  {id: '3', equipment_id: '3', project_id: '1', user_id: '1'},
  {id: '4', equipment_id: '4', project_id: '1', user_id: '1'},
  {id: '5', equipment_id: '8', project_id: '3', user_id: '1'},
  {id: '6', equipment_id: '9', project_id: '3', user_id: '1'},
  {id: '7', equipment_id: '10', project_id: '3', user_id: '1'},
  {id: '8', equipment_id: '11', project_id: '3', user_id: '1'},
  {id: '9', equipment_id: '12', project_id: '3', user_id: '1'},
  {id: '10', equipment_id: '5', project_id: '6', user_id: '2'},
  {id: '11', equipment_id: '6', project_id: '6', user_id: '2'},
  {id: '12', equipment_id: '7', project_id: '6', user_id: '2'},
  {id: '13', equipment_id: '1', project_id: '7', user_id: '2'},
  {id: '14', equipment_id: '2', project_id: '7', user_id: '2'},
  {id: '15', equipment_id: '3', project_id: '7', user_id: '2'},
  {id: '16', equipment_id: '4', project_id: '7', user_id: '2'},
])

# create materials
materials = Material.create!([
  {project_id: '1', material_name: "tin-based solder"},
  {project_id: '1', material_name: "64 LEDs"},
  {project_id: '1', material_name: "arduino"},
  {project_id: '1', material_name: "breadboard"},
  {project_id: '1', material_name: "resistors"},
  {project_id: '6', material_name: "PLA filament"},
  {project_id: '6', material_name: "Nema 17 stepper motor"},
  {project_id: '6', material_name: "Arduino UNO"},
  {project_id: '6', material_name: "Neopixel LEDs"},
  {project_id: '6', material_name: "DC power adapter"},
  {project_id: '6', material_name: "1000 µF capacitor"},
  {project_id: '6', material_name: "500 Ω resistor"},
  {project_id: '6', material_name: "22 AWG wire"},
  {project_id: '7', material_name: "tin-based solder"},
  {project_id: '7', material_name: "512 LEDs"},
  {project_id: '7', material_name: "arduino"},
  {project_id: '7', material_name: "breadboard"},
  {project_id: '7', material_name: "resistors"},
])
