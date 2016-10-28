ENV['RACK_ENV'] = 'development'

require_relative 'data_mapper_setup'
require 'sinatra/base'

class Thermostat < Sinatra::Base

  get '/' do
    erb :index
  end

  post "/settings" do
    Settings.all.destroy
    Settings.create(
    # temperature: params[],
                              city: params[:city],
                              # power_saving_mode: params[]
                              )
    redirect "/"
  end

  get "/settings" do
    # settings = Settings.last {
    #   city: settings.city
    # }
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
