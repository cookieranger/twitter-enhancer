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
    title: 'title1',
    content: 'fake'
  )}
  let!(:tweet2) { FactoryBot.create(:tweet,
    title: 'title1',
  )}
  let!(:tweet3) { FactoryBot.create(:tweet,
    title: 'title1',
    content: 'fake sentence #tag1'
  )}

  describe '.with_term' do
    it 'should only return items with corresponding hashtag' do
      binding.pry
      result = Tweet.with_term("title1")
      expect(result).to eq [tweet1, tweet2, tweet3]

      # search for author
      result = Tweet.with_term("steve")
      expect(result).to eq [tweet1]

      result = Tweet.with_term("tag1")
      expect(result).to eq [tweet3]
    end

    describe 'multiple terms' do
      it 'can find multiple' do
        result = Tweet.with_term("fake tag1")
        expect(result).to eq [tweet3]

        result = Tweet.with_term("Steve title1")
        expect(result).to eq [tweet1]
      end
    end
  end
end
