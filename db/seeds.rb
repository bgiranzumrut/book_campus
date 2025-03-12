require 'faker'
require 'open-uri'
require 'json'

# Clear existing data
Review.destroy_all
Book.destroy_all
Author.destroy_all



# Corrected genre mapping for API
GENRES = {
  "Poetry" => "poetry",
  "Fiction" => "fiction",
  "History" => "history",
  "Science" => "science",
  "Autobiography" => "biography",
  "Political Science" => "political_science"
}

GENRES.each do |display_name, api_name|
  puts "Fetching books for genre: #{display_name}..."

  # Fix: Use a local variable instead of a constant
  api_url = "https://openlibrary.org/subjects/#{api_name}.json?limit=10"

  # Fetch books from API
  response = URI.open(api_url).read
  data = JSON.parse(response)

  data["works"].each do |book_data|
    # Handle missing fields
    title = book_data["title"] || "Unknown Title"
    author_name = book_data["authors"]&.first&.dig("name") || "Unknown Author"

    # Find or create author
    author = Author.find_or_create_by(name: author_name) do |a|
      a.bio = Faker::Lorem.paragraph
    end

    # Fix: Check if book already exists before creating
    existing_book = Book.find_by(title: title)
    unless existing_book
      book = Book.create!(
        title: title,
        description: Faker::Lorem.paragraph,
        published_date: Faker::Date.between(from: '1800-01-01', to: '2023-12-31'),
        cover_image: "https://covers.openlibrary.org/b/id/#{book_data.dig('cover_id')}-L.jpg",
        genre: display_name,
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
  end
end

