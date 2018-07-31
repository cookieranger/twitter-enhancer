class CreateTweets < ActiveRecord::Migration[5.1]
  def change
    create_table :tweets do |t|
      t.string :author
      t.string :title
      t.string :img_url
      t.text :content
      t.timestamps null: false
    end
  end
end
