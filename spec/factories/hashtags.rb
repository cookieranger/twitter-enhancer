# == Schema Information
#
# Table name: hashtags
#
#  id   :integer          not null, primary key
#  name :string
#

FactoryBot.define do
  factory :hashtag do
    name Faker::StarWars.planet
  end
end
