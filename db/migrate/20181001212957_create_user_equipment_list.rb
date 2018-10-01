class CreateUserEquipmentList < ActiveRecord::Migration[5.2]
  def change
    create_table :user_equipment_lists do |t|
      t.belongs_to :user, null: false
      t.belongs_to :equipment, null: false

      t.timestamps null: false
    end
  end
end
