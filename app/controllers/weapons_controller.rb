class WeaponsController < ApiController

  def index
    render json: Weapon.all
  end

end
