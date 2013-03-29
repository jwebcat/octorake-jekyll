# Compass configuration file.
require 'bootstrap-sass'

project_type = :stand_alone

# Important! change the paths below to match your project setup
sass_dir = "_sass"
css_dir = "_site/assets/css" # update to the path of your css files.
images_dir = "assets/images" # update to the path of your image files.
javascripts_dir = "assets/js" # update to the path of your script files.

line_comments = false # if debugging (using chrome extension - set this to true)
cache = true
# output_style = :compressed

# require 'fileutils'
# on_stylesheet_saved do |file|
#   if File.exists?(file) && File.basename(file) == "styles.css"
#     puts "Reloading : #{file}"
#     system "grunt live:reload"
#   end
# end