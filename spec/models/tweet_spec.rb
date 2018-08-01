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


RSpec.describe Tweet, type: :model do
  let!(:tweet1) { FactoryBot.create(:tweet,
    author: 'Steve Hobbes',
    title: 'title 1',
    hashtags: [ FactoryBot.build(:hashtag, name: 'tag 1') ]
  )}
  let!(:tweet2) { FactoryBot.create(:tweet,
    title: 'title 2',
    hashtags: [ FactoryBot.build(:hashtag, name: 'tag 2') ]
  )}

  describe '.with_term' do
    it 'should only return items with corresponding hashtag' do
      result = Tweet.with_term("title 2")
      expect(result).to eq [tweet2]
      result = Tweet.with_term("Steve")
      expect(result).to eq [tweet1]
    end
  end
end
