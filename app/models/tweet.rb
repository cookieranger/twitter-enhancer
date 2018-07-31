# == Schema Information
#
# Table name: tweets
#
#  id         :integer          not null, primary key
#  author     :string
#  content    :text
#  img_url    :string
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tweet < ApplicationRecord

  # Maybe we can use has_one to to get through, like
  has_many :tweet_hashtags
  has_many :hashtags, through: :tweet_hashtags
end
