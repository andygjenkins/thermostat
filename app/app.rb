ENV['RACK_ENV'] = 'development'

require_relative 'data_mapper_setup'
require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do
    erb :index
  end

  post "/settings" do
    session[:city] = params[:city]
    redirect '/settings'                    )
  end

  get "/settings" do
    JSON.generate({city: session[:city]})
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
