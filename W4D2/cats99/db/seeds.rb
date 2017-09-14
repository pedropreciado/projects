# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
colors = %w(black white orange tuxedo tiger-striped calico)
sexes = ["M", 'F']

10.times do
  Cat.create(name: Faker::Cat.name, color: colors.sample,
  sex: sexes.sample, description: Faker::Cat.breed,
  birth_date: Faker::Date.between(10.years.ago, Date.today))
end
