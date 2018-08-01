# == Schema Information
#
# Table name: hashtags
#
#  id   :integer          not null, primary key
#  name :string
#

# NOTE: isn't really needed
class Hashtag < ApplicationRecord
  # Maybe we can use has_one to to get through, like
  has_many :tweet_hashtags
  has_many :tweets, through: :tweet_hashtags
end
