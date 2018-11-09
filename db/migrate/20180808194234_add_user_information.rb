class AddUserInformation < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :role, :string, null: false, default: "member"
    add_column :users, :handle, :string, null: false
    add_column :users, :profile_photo, :string, null: false
    add_column :users, :bio, :text, null: false
  end
end
