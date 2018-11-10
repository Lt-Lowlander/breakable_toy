FactoryBot.define do
  factory :user do
    sequence(:handle) {|n| "spectre#{n}" }
    sequence(:profile_photo) { Rack::Test::UploadedFile.new(Rails.root.join('spec/support/profile_default.png'), 'image/jpeg')}
    sequence(:bio) {|n| "Bio for user#{n} with some text." }
    sequence(:email) { |n| "user#{n}@sampleTest.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
