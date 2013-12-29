Bellini
=========
A Brunch plugin to run command line scripts after Brunch compiles.

Usage
-----
Add bellini to your brunch-config.coffee and add commands in an array. For example, you might want to do UI testing with CasperJS and generate style guides with styledocco.
```coffeescript
# See http://brunch.io/#documentation for brunch config docs
exports.config =
	plugins:
		bellini: [
			'casperjs casper.coffee',
			'styledocco -n "My Project" css'
			]
```

Changelog
---------
###Version 0.1.0
* Added text styles and colors  
* Improved console notifications  
* Forked after-brunch 0.0.4

Dependencies
------------
It is assumed you are using Node.js, Brunch, and CoffeeScript.

Author Info
-----------
Bellini is by Stacey Moore  
Website: [staceymoore.com](http://www.staceymoore.com/)  
GitHub: [staceymoore](https://github.com/staceymoore)  
LinkedIn: [TheStaceyMoore](http://linkedin.com/in/thestaceymoore)

Credits
-------
Bellini is based on [after-brunch](https://github.com/Creative-Licence-Digital/after-brunch)