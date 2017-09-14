class BandsController < ApplicationController
  def index
    @bands = Band.all
    render :index
  end

  def create
    @bands = Band.new(band_params)
    if band.save
      flash[:notice] = 'Band Added!'
    else
      flash[:errors].band.errors.full_messsages
    end
  end

  def new
    @bands = Band.new
    render :new
  end

  def edit
    @band = Band.find(params[:id])
    redirect_to edit_band_url unless current_user.nil?
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def update
    @band = Band.find(params[:id])
    if band.update_attributes(band.params)
      redirect_to band_url
    else
      flash[:error].band.errors.full_messsages
    end
  end


  def destroy
    @band = Band.find(params[:id])
      @band.destroy
  end

  private

  def

  def band_params
    params.require(:band).permit(:name)
  end
end
