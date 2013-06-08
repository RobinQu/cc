var ConfLoader = require("./conf_loader");

(function() {
  var loader, cc;
  
  cc = module.exports = function(options, fn) {
    if(typeof options === "function") {
      fn = options;
      options = {};
    }
    loader = new ConfLoader(options);
    return loader.load(options.env ,fn);
  };
  
  cc.get = function() {
    if(loader) {
      return loader.get.apply(loader, arguments);
    }
  };
}());