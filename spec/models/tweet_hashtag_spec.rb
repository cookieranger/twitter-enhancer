# == Schema Information
#
# Table name: tweet_hashtags
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  hashtag_id :integer
#  tweet_id   :integer
#
# Indexes
#
#  index_tweet_hashtags_on_hashtag_id  (hashtag_id)
#  index_tweet_hashtags_on_tweet_id    (tweet_id)
#

require 'rails_helper'

RSpec.describe TweetHashtag, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
