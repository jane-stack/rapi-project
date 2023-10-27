class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :birthday, :date
    add_column :users, :phone_number, :string
    add_column :users, :address_line, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
  end
end
