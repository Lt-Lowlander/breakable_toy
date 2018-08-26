#create users
users = User.create!([
  {handle: "Splinter", email: "aerocricket@gmail.com", password: "hackgyver", bio: "run 'ruby config/message.rb' in your terminal to learn more about me", role: "admin"},
  {handle: "Tinker_Kid", email: "example@email.com", password: "asdf123", bio: "Building the dream", role: "member"},
])

#create projects
projects = Project.create!([
  {name: "LED Cube", description: "A Raspberry Pi-driven display", photo_url: "https://cdn.instructables.com/F5E/3GU8/GR392YQI/F5E3GU8GR392YQI.LARGE.jpg", version_id: '1', budget: "$100", topics: "electronics", user_id: '1', handle: "Splinter"},
  {name: "Smart Mirror", description: "A Raspberry Pi-driven display", photo_url: "https://i.imgur.com/h9JGNtM.png", version_id: '1', budget: "$100", topics: "electronics", user_id: '1', handle: "Splinter"},
  {name: "Wooden Puzzle Box", description: "Secret compartments and yosegi veneer work", photo_url: "https://images-na.ssl-images-amazon.com/images/I/41z1M%2BSSdJL._SX355_.jpg", version_id: '1', budget: "$40", topics: "woodworking", user_id: '1', handle: "Splinter"},
  {name: "Ammo Crate Speaker", description: "Upcycling at it's finest", photo_url: "https://i.imgur.com/dD9n9ph.png", version_id: '1', budget: "$80", topics: "Audio Gear", user_id: '1', handle: "Splinter"},
  {name: "3D printed Planter", description: "Great for having at your work desk", photo_url: "https://i.imgur.com/BR46zcp.jpg", version_id: '1', budget: "$15", topics: "Desktop Printing", user_id: '1', handle: "Splinter"},
  {name: "Arduino-powered Stargate", description: "Check out this rotating Stargate! The printed files can be found here: https://www.thingiverse.com/thing:571853 ", photo_url: "https://thingiverse-production-new.s3.amazonaws.com/assets/5a/ea/65/db/98/HeroWide.jpg", version_id: '1', budget: "$36", topics: "Desktop Printing", user_id: '2', handle: "Tinker_Kid"},
  {name: "LED cube", description: "An updated take on Splinter's original post", photo_url: "https://cdn.instructables.com/FUX/O1RW/GICYBAOS/FUXO1RWGICYBAOS.LARGE.jpg?auto=webp&width=933", version_id: '2', budget: "$67", topics: "electronics", user_id: '2', handle: "Tinker_Kid"},
  ])

# #create equipment
equipment = Equipment.create!([
  {id: '1', user_id: '1', project_id: '1', tool_name: "soldering iron"},
  {id: '2', user_id: '1', project_id: '1', tool_name: "screw driver"},
  {id: '3', user_id: '1', project_id: '1', tool_name: "wire strippers"},
  {id: '4', user_id: '1', project_id: '1', tool_name: "needle nose pliers"},
  {id: '5', user_id: '2', project_id: '6', tool_name: "3D Printer"},
  {id: '6', user_id: '2', project_id: '6', tool_name: "Laptop"},
  {id: '7', user_id: '2', project_id: '6', tool_name: "Soldering Iron"},
  {id: '8', user_id: '2', project_id: '6', tool_name: "Hot Glue Gun"},
  {id: '9', user_id: '2', project_id: '6', tool_name: "Breadboard"},
  {id: '10', user_id: '2', project_id: '7', tool_name: "soldering iron"},
  {id: '11', user_id: '2', project_id: '7', tool_name: "screw driver"},
  {id: '12', user_id: '2', project_id: '7', tool_name: "wire strippers"},
  {id: '13', user_id: '2', project_id: '7', tool_name: "needle nose pliers"}
])

# create materials
# materials = Material.create!([
#   {id: '1', project_id: '1', item_number: '1', material_name: "tin-based solder"},
#   {id: '2', project_id: '1', item_number: '2', material_name: "64 LEDs"},
#   {id: '6', project_id: '1', item_number: '3', material_name: "arduino"},
#   {id: '7', project_id: '1', item_number: '4', material_name: "breadboard"},
#   {id: '3', project_id: '1', item_number: '5', material_name: "resistors"},
#   {id: '4', project_id: '6', item_number: '1', material_name: "PLA filament"},
#   {id: '5', project_id: '6', item_number: '2', material_name: "Nema 17 stepper motor"},
#   {id: '8', project_id: '6', item_number: '3', material_name: "Arduino UNO"},
#   {id: '9', project_id: '6', item_number: '4', material_name: "Neopixel LEDs"},
#   {id: '10', project_id: '6', item_number: '5', material_name: "DC power adapter"},
#   {id: '11', project_id: '6', item_number: '6', material_name: "1000 µF capacitor"},
#   {id: '12', project_id: '6', item_number: '7', material_name: "500 Ω resistor"},
#   {id: '13', project_id: '6', item_number: '8', material_name: "22 AWG wire"},
#   {id: '14', project_id: '7', item_number: '1', material_name: "tin-based solder"},
#   {id: '15', project_id: '7', item_number: '2', material_name: "512 LEDs"},
#   {id: '16', project_id: '7', item_number: '3', material_name: "arduino"},
#   {id: '17', project_id: '7', item_number: '4', material_name: "breadboard"},
#   {id: '18', project_id: '7', item_number: '5', material_name: "resistors"},
# ])
