class Api::V1::DogsController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }


  def show 
    render json: Dog.find(params[:id])
  end

  def create 
    render json: Dog.create(dog_params) 
  end

  def dog_params 
    params.require(:dog).permit(:name)
  end
end