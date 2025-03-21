class CreateReviews < ActiveRecord::Migration[7.2]
  def change
    create_table :reviews do |t|
      t.string :user_name
      t.integer :rating
      t.text :comment
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
