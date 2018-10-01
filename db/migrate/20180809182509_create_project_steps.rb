class CreateProjectSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.belongs_to :project

      t.text :instruction, null: false
      t.string :step_photo

      t.timestamps null: false
    end
  end
end
