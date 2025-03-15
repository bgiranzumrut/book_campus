class BooksController < ApplicationController
  def index
    @genres = Book.distinct.pluck(:genre)

    @books = Book.all
    if params[:query].present?
      if ActiveRecord::Base.connection.adapter_name.downcase.start_with?('sqlite')
        @books = @books.where("title LIKE ?", "%#{params[:query]}%")  # SQLite
      else
        @books = @books.where("title ILIKE ?", "%#{params[:query]}%") # PostgreSQL
      end
    end

    @books = @books.where(genre: params[:genre]) if params[:genre].present? && params[:genre] != ""

    @books = @books.page(params[:page]).per(10)


  end
end
