class CreateFams < ActiveRecord::Migration[5.2]
  def change
    create_table :fams do |t|
      t.string :famName
      t.timestamps null: false
    end
  end
end
