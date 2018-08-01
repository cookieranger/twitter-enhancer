class TweetsController < ApplicationController
  LIMIT = 10
  def index
    tweets = if searchTerms && searchTerms.present?
      search_results
    else
      Tweet.limit(LIMIT)
    end

    render json: tweets.map(&:serialize)
  end

  def search_results
    # TODO: include searchTerms searching on hashtags

    tweets = Tweet.with_term(searchTerms).limit(LIMIT)
  end

  def searchTerms
    @searchTerms ||= params.permit(:searchTerms)[:searchTerms]
  end
end
