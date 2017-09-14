class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find_by(id: params[:id])
    if @cat.nil?
      render json: @cat.errors.full_messages, status: :unprocessable_entity
    else
      render :show
    end
  end

  def new
    render :new
  end

  def edit
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to :cats
    else
      render json: @cat.errors.full_messages, status: :unprocessable_entity
    end

  end

  # def destroy
  #
  # end

  def update
    @cat = Cat.find_by(id: params[:id])
    if @cat.update_attributes(cat_params)
      redirect_to :cats
    else
      render json: @cat.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def cat_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end

end
