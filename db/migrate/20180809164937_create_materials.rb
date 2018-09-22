class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.belongs_to :project

      t.string :material_name, null: false

      t.timestamps null: false
    end
  end
end
