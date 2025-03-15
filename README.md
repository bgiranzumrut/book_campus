## Add bootsrapt to your project

https://gist.github.com/rubyandcoffee/592cdf13586548a7a26c30adeeb7adc2

### Edit gem file
gem "bootstrap"
gem "sassc-rails"

### Then, run:
bundle install

### Set up Frontent Dependecies

bin/importmap pin bootstrap
bin/importmap pin popperjs/core

### manually edit config/importmap.rb and ensure you have the following:

pin "popper", to: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
pin "bootstrap", to: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"


### Rename application.css to application.scss and add

@import "bootstrap";

@import "bootstrap-icons/font/bootstrap-icons";


### Open app/javascript/application.js and add:

import "bootstrap"
import "popper"


### Open config/initializers/assets.rb and add:

Rails.application.config.assets.precompile += %w( bootstrap.min.js popper.js )

### rails assets:precompile
rails server

### Test it



