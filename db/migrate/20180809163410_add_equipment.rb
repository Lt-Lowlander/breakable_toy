class AddEquipment < ActiveRecord::Migration[5.2]
  def change
    create_table :equipment do |t|
      t.string :tool_name, null: false
      
      t.timestamps null: false
    end
  end
end
