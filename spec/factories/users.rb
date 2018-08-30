FactoryBot.define do
  factory :user do
    sequence(:handle) {|n| "spectre#{n}" }
    sequence(:profile_photo) { "https://pixel.nymag.com/imgs/daily/vulture/2017/03/24/barbie/24-barbie.w710.h473.jpg" }
    sequence(:bio) {|n| "Bio for user#{n} with some text." }
    sequence(:email) { Faker::Internet.email }
    password 'password'
    password_confirmation 'password'
  end
end
