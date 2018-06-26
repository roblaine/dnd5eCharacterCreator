class InventoryController < ApplicationController
  def index

  end

  # show/inventory/id
  def show
    render json: @inventory
  end
end
