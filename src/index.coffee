colors = require "colors"
sysPath = require "path"
{exec}  = require "child_process"

module.exports = class Bellini
	brunchPlugin: yes

	constructor: (@config) ->
		@commands = @config.plugins.bellini ? []

	onCompile: (generatedFiles) ->

		for command in @commands
			console.log "BELLINI: Running command: '#{command}'"  .bold.grey
			exec command, (error, stdout, stderr) ->
				console.log "BELLINI: STDOUT for command:\n" .underline.bold.grey + stdout if stdout
				console.log "BELLINI: STDERR for command:\n" .underline.bold.grey + stderr  if stderr
				console.log "BELLINI: EXEC ERROR for command:\n" .underline.bold.grey + error if error
		return