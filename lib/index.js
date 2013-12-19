var Bellini, colors, exec, sysPath;

colors = require("colors");

sysPath = require("path");

exec = require("child_process").exec;

module.exports = Bellini = (function() {
  Bellini.prototype.brunchPlugin = true;

  function Bellini(config) {
    var _ref;
    this.config = config;
    this.commands = (_ref = this.config.plugins.bellini) != null ? _ref : [];
  }

  Bellini.prototype.onCompile = function(generatedFiles) {
    var command, _i, _len, _ref;
    _ref = this.commands;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      command = _ref[_i];
      console.log(("BELLINI: Running command: '" + command + "'").bold.grey);
      exec(command, function(error, stdout, stderr) {
        if (stdout) {
          console.log("BELLINI: STDOUT for command:\n".underline.bold.grey + stdout);
        }
        if (stderr) {
          console.log("BELLINI: STDERR for command:\n".underline.bold.grey + stderr);
        }
        if (error) {
          return console.log("BELLINI: EXEC ERROR for command:\n".underline.bold.grey + error);
        }
      });
    }
  };

  return Bellini;

})();
