require 'rails_helper'

RSpec.describe "dogs/show", type: :view do
  before(:each) do
    @dog = assign(:dog, Dog.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
