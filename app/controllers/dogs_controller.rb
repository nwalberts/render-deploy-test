class DogsController < ApplicationController

  # GET /dogs or /dogs.json
  def index
    @dogs = Dog.all
  end

end