class ApplicationController < ActionController::API
    include ActionController::Cookies

    def logged_in?
        session[:user_id]
    end

    def current_user
        user = User.find_by_id(session[:user_id])
    end

    def authorize
        render json: {errors: ["Please Log In"]}, status: :unauthorized unless logged_in?
    end

end
