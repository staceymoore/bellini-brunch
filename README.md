Bellini
=========
A Brunch plugin to run command line scripts after Brunch compiles.

Usage
-----
Add bellini to the plugins array in your brunch-config.coffee and add commands to the Bellini commands array. For example, you might want to do UI testing with CasperJS.
```coffeescript
exports.config =
	# See http://brunch.io/#documentation for brunch config docs
	plugins:
		bellini: [
			'casperjs casper.coffee'
			]
```

Changelog
---------
Added text styles and colors  
Improved console notifications  
Forked after-brunch 0.0.4

Dependencies
------------
CoffeeScript

Author Info
-----------
Bellini is by Stacey Moore  
Website: [staceymoore.com](http://www.staceymoore.com/)  
GitHub: [staceymoore](https://github.com/staceymoore)  
LinkedIn: [TheStaceyMoore](http://linkedin.com/in/thestaceymoore)

Credits
-------
Bellini is based on [after-brunch](https://github.com/Creative-Licence-Digital/after-brunch)