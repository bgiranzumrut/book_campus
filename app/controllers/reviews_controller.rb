class ReviewsController < ApplicationController
  def create
    @book = Book.find(params[:book_id])
    @review = @book.reviews.build(review_params)

    if @review.save
      redirect_to @book, notice: "Review submitted successfully!"
    else
      redirect_to @book, alert: "Failed to submit review."
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_name, :rating, :comment)
  end
end
