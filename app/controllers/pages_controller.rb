class PagesController < ApplicationController
  def home
    @books = Book.order("RANDOM()").limit(6)  # Show 6 random books
  end
end
