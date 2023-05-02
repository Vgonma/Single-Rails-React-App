# frozen_string_literal: true

module Api
  class GreetingsController < ApplicationController
    def index
      @greetings = Greeting.all
      render json: @greetings
    end

    def random
      @greetings = Greeting.all
      random_greeting = @greetings.sample
      render json: random_greeting
    end
  end
end
