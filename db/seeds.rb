# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'factory_bot'
# require 'spec/factories/tweets'

if Tweet.count > 0
  puts "already seeded or already have tweets"
end

hashtags = 20.times.map {
  FactoryBot.create(:hashtag)
}


tweets = 1000.times.map {
  FactoryBot.create(:tweet,
    hashtags: rand(2..5).times.map do |n|

      hashtags[rand(0..19)]
    end
  )
}