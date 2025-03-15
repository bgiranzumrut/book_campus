class BooksController < ApplicationController
  def index
    if params[:genre].present?
      @books = Book.where(genre: params[:genre])
    else
      @books = Book.all
    end
    @books = @books.page(params[:page]).per(10)
    @genres = Book.distinct.pluck(:genre)  # Get unique genres for the filter
  end
end
