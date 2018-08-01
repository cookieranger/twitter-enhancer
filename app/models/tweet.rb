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
def term_to_query(term)
  "%#{term}%"
end

class Tweet < ApplicationRecord
  paginates_per 100

  # Maybe we can use has_one to to get through, like
  has_many :tweet_hashtags
  has_many :hashtags, through: :tweet_hashtags

  scope :with_term, -> (all_terms) {

    terms = all_terms.split(' ')
    where(
      terms.count.times.map do
        '(lower(title) like lower(?) OR
        lower(author) like lower(?) OR
        lower(content) like lower(?))'
      end.join(' AND '),
      *(terms.flat_map do |term|
        3.times.map { term_to_query term }
      end)
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
