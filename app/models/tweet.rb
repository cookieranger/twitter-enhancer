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
  paginates_per 100

  # Maybe we can use has_one to to get through, like
  has_many :tweet_hashtags
  has_many :hashtags, through: :tweet_hashtags

  scope :with_term, -> (term) {
    term_query = "%#{term}%"
    where(
      'lower(title) like lower(?) OR
      lower(author) like lower(?) OR
      lower(content) like lower(?)',
      term_query, term_query, term_query
    )
  }

  def serialize
    attributes.merge(
      hashtags: hashtags.map(&:name)
    ).except(
      :updated_at,
      :created_at
    )
  end
end
