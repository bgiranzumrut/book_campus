require 'faker'
require 'open-uri'
require 'json'

# Clear existing data
Review.destroy_all
Book.destroy_all
Author.destroy_all

puts "Seeding poetry books..."

# Open Library API URL (fetch poetry books)
API_URL = "https://openlibrary.org/subjects/poetry.json?limit=10"

# Fetch books from API
response = URI.open(API_URL).read
data = JSON.parse(response)

data["works"].each do |book_data|
  # Handle missing fields
  title = book_data["title"] || "Unknown Title"
  author_name = book_data["authors"]&.first&.dig("name") || "Unknown Author"

  # Find or create author
  author = Author.find_or_create_by(name: author_name) do |a|
    a.bio = Faker::Lorem.paragraph
  end

  # Create book
  book = Book.create!(
    title: title,
    description: Faker::Lorem.paragraph,
    published_date: Faker::Date.between(from: '1800-01-01', to: '2023-12-31'),
    cover_image: "https://covers.openlibrary.org/b/id/#{book_data.dig('cover_id')}-L.jpg",
    genre: "Poetry",
    author: author
  )

  # Create fake reviews for each book
  rand(2..5).times do
    Review.create!(
      user_name: Faker::Name.name,
      rating: rand(1..5),
      comment: Faker::Lorem.sentence,
      book: book
    )
  end
end

puts "Seeding complete!"
