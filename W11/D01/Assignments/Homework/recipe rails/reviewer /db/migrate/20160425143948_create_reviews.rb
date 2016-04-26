class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references :product, index: true, foreign_key: true
      t.string :user
      t.integer :raiting
      t.text :body

      t.timestamps null: false
    end
  end
end
