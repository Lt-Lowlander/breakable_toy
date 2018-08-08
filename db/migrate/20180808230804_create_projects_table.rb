class CreateProjectsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :projects_tables do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :version_id, null: false
      t.string :photo_url, null: false
      t.integer :budget

      t.timestamps null: false
    end
  end
end
