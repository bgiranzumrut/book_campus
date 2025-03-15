class AuthorsController < ApplicationController
  def show
    @author = Author.find(params[:id])
    @books = @author.books  # Get all books written by this author
  end  # Get all books written by this author

  def index
    if params[:query].present?
      @authors = Author.where("name ILIKE ?", "%#{params[:query]}%")
    else
      @authors = Author.all
    end

    @authors = @authors.page(params[:page]).per(10)
  end
end
