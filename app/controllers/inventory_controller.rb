class InventoryController < ApiController
  def index

  end

  # show/inventory/id
  def show
    render json: @inventory
  end
end
