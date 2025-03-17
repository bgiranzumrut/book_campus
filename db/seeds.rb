require 'faker'
require 'open-uri'
require 'json'
require 'net/http'

# Clear existing data
Review.destroy_all
Book.destroy_all
Author.destroy_all
Library.destroy_all
AuthorBook.destroy_all  # Clearing the join table

# -------------------
# FETCH & SEED BOOK DATA
# -------------------

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

    # Find or create the book only if it doesn't exist
    book = Book.find_or_create_by!(title: title) do |b|
      b.description = Faker::Lorem.paragraph
      b.published_date = Faker::Date.between(from: '1800-01-01', to: '2023-12-31')
      b.cover_image = "https://covers.openlibrary.org/b/id/#{book_data.dig('cover_id')}-L.jpg"
      b.genre = display_name
    end

    # Assign multiple authors
    authors = book_data["authors"] || []
    authors.each do |author_info|
      author_name = author_info["name"] || "Unknown Author"

      author = Author.find_or_create_by!(name: author_name) do |a|
        a.bio = Faker::Lorem.paragraph
      end

      # Link author to book in many-to-many table
      book.authors << author unless book.authors.include?(author)
    end

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
