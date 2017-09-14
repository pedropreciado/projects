class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if user.save
      login_user!(@user)
      flash[:notice] = 'User created.'
    else
      flash.now[:errors].user.errors.full_messsages
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
