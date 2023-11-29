# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all

# Users
jane = User.create(
    first_name: "Jane",
    last_name: "Nguyen",
    phone_number: "7197253249",
    email: "tuyen_ha@outlook.com",
    birthday: "06/04/1988",
    address_line: "22822 E Union Cir",
    city: "Aurora",
    state: "CO",
    password: "Test1234#"
)