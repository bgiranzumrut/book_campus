class BooksController < ApplicationController

  def show
    @book = Book.find_by(id: params[:id])
    if @book.nil?
      redirect_to books_path, alert: "Book not found"
    end
  end

  def index
    @genres = Book.distinct.pluck(:genre)

    @books = Book.all

    # Apply search query
    if params[:query].present?
      if ActiveRecord::Base.connection.adapter_name.downcase.start_with?('sqlite')
        @books = @books.where("title LIKE ?", "%#{params[:query]}%")  # SQLite
      else
        @books = @books.where("title ILIKE ?", "%#{params[:query]}%") # PostgreSQL
      end
    end

    # Apply hierarchical filtering (filter by genre)
    if params[:genre].present? && params[:genre] != "All Genres"
      @books = @books.where(genre: params[:genre])
    end

    # Paginate results
    @books = @books.page(params[:page]).per(10)
  end
end
