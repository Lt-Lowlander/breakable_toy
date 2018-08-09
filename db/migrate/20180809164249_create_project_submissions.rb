class CreateProjectSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :project_submissions do |t|
      t.belongs_to :user
      t.belongs_to :project

      t.string :project_title, null: false

      t.timestamps null: false
    end
  end
end
