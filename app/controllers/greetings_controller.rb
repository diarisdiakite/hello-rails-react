# app/controllers/greetings_controller.rb
class GreetingsController < ApplicationController
  def random
    @random_greeting = Message.order('RANDOM()').first&.text
    render json: { greeting: @random_greeting }
  end
end
