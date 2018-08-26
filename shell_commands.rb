# def d4
#   i = rand(4) + 1
#   return i
# end
#
# puts `echo d4`   # outputs the name of the function
# puts `echo #{d4}`   # outputs the result of the function
# puts d4          # outputs the result of the function

puts `echo bundle install`
puts `bundle install`

puts `echo bundle`
puts `bundle`

puts `echo yarn install`
puts `yarn install`

puts `echo rails db:drop`
puts `rails db:drop`

puts `echo rails db:create`
puts `rails db:create`

puts `echo rails db:migrate && rails db:rollback && rails db:migrate`
puts `rails db:migrate && rails db:rollback && rails db:migrate`

puts `echo rails db:seed`
puts `rails db:seed`

puts `echo yarn run start`
puts `yarn run start`
