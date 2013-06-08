var ConfLoader = require("./conf_loader");

module.exports = function(options, fn) {
  if(typeof options === "function") {
    fn = options;
    options = {};
  }
  return (new ConfLoader(options)).load(options.env || process.env.NODE_ENV || "development" ,fn);
};