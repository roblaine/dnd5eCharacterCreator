class BeingsController < ApiController

  def index
    render json: Being.all
  end
  
  def show
    # render json from the id passed in the param of the uri
    if Being.exists?(params[:id])
      render json: Being.find(params[:id])
    else
      # TODO refactor this block to be more inline with proper paradigms
      # this is placeholder
      render json: ['error': 'being doesnt exist']
    end
  end
end
