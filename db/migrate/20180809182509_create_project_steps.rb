class CreateProjectSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :project_steps do |t|
      t.belongs_to :projects

      t.integer :step_number, null: false
      t.text :step_instructions, null: false
      t.string :step_photo

      t.timestamps null: false
    end
  end
end
