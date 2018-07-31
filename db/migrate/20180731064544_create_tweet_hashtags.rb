class CreateTweetHashtags < ActiveRecord::Migration[5.1]
  def change
    create_table :tweet_hashtags do |t|
      t.belongs_to :tweet
      t.belongs_to :hashtag
      t.timestamps
    end
  end
end
