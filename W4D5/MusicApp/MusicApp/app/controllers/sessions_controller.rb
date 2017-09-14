class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
    params[:users][:email],
    params[:users][:password]
    )
    if user.nil?
      flash[:errors] = ['Invalid user']
      render :new
    else
      login_user!(user)
      redirect_to user_url
    end
  end

  def new
    render :new
  end

  def destroy
    logout_user!
    redirect_to new_session_url
  end
end
