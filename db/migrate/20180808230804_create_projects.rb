class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.belongs_to :user, null: false
      t.belongs_to :fam, null: false

      t.string :name, null: false
      t.text :description, null: false
      t.string :photo_url
      t.integer :version_id, null: false, default: "1"
      t.string :handle, null: false
      t.string :budget
      t.string :topics
      t.string :duration
      t.string :difficulty
      t.integer :parent_id

      t.timestamps null: false

    end
  end
end
