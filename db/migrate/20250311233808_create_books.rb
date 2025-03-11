class CreateBooks < ActiveRecord::Migration[7.2]
  def change
    create_table :books do |t|
      t.string :title
      t.text :description
      t.date :published_date
      t.string :cover_image
      t.string :genre
      t.references :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end
