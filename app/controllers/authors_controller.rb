class AuthorsController < ApplicationController
  def index
    if params[:query].present?
      @authors = Author.where("name ILIKE ?", "%#{params[:query]}%")
    else
      @authors = Author.all
    end

    @authors = @authors.page(params[:page]).per(10)
  end
end
