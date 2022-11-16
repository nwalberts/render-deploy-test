# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dog.delete_all
Toy.delete_all
Dog.create(name: "Cooper")
Dog.find_or_create_by(name: "Cooper")
Toy.create(name: "Ball")
Toy.find_or_create_by(name: "Ball")

