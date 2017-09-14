class SessionsController < ApplicationController
  def new
  end

  def index
  end

  def show
  end

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if @user
      login(@user)
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
  end

  def edit
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
