class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.belongs_to :user, null: false

      t.string :name, null: false
      t.text :description, null: false
      t.string :photo_url, null: false
      t.integer :version_id, null: false
      t.string :budget
      t.string :topics

      t.timestamps null: false

    end
  end
end
