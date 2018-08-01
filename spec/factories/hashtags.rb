# == Schema Information
#
# Table name: hashtags
#
#  id   :integer          not null, primary key
#  name :string
#

FactoryBot.define do
  factory :hashtag do
    sequence(:name) { "\##{Faker::StarWars.planet.split(' ').last}" }
  end
end
