require 'faker'
require 'open-uri'
require 'json'
require 'net/http'

# Clear existing data
Review.destroy_all
Book.destroy_all
Author.destroy_all
Library.destroy_all

# -------------------
# FETCH & SEED BOOK DATA
# -------------------

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

  # Fetch books from Open Library API
  api_url = "https://openlibrary.org/subjects/#{api_name}.json?limit=10"
  response = URI.open(api_url).read
  data = JSON.parse(response)

  data["works"].each do |book_data|
    title = book_data["title"] || "Unknown Title"
    author_name = book_data["authors"]&.first&.dig("name") || "Unknown Author"

    # Find or create author
    author = Author.find_or_create_by(name: author_name) do |a|
      a.bio = Faker::Lorem.paragraph
    end

    # Create book only if it doesn't exist
    unless Book.exists?(title: title)
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

puts "✅ Books and reviews seeded!"

# -------------------
# FETCH & SEED LIBRARY DATA
# -------------------

puts "Fetching Winnipeg Libraries data..."

url = URI("https://data.winnipeg.ca/resource/bt47-pkkm.json")
response = Net::HTTP.get(url)
data = JSON.parse(response)

data.each do |lib|
  Library.create!(
    name: lib["name"],
    address: lib["address"],
    wifi: lib["wifi"] == "Yes",
    accessibility: lib["accessibility"] == "Yes",
    room_rentals: lib["room_rentals"] == "Yes",
    parking_lot: lib["parking_lot"] == "Yes",
    parking_stalls: lib["parking_stalls"].to_i,
    website: lib["website"],
    latitude: lib["location_1"]&.dig("latitude")&.to_f,
    longitude: lib["location_1"]&.dig("longitude")&.to_f
  )
end

puts "✅ Libraries seeded successfully!"
