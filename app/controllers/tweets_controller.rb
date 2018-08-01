class TweetsController < ApplicationController

  def index
    if searchTerms
      search_results
    else
      Tweet.first(100)
    end

    render json: tweets.map(&:serialize)
  end

  def search_results
    # TODO: include searchTerms searching on hashtags

    tweets = Tweet.where(
      'title ilike ?',
      "%#{searchTerms}$%"
    ).first(100)
  end

  def searchTerms
    params.permit(:searchTerms)[:searchTerms]
  end
end
