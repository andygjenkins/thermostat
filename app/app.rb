ENV['RACK_ENV'] = 'development'

require_relative 'data_mapper_setup'
require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    'Hello Thermostat!'
    File.read('index.html')
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
