class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :birthday, :email, :phone_number, :address_line, :city, :state
end
