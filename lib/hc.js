var ConfLoader = require("./conf_loader");

(function() {
  var loader, hc;
  
  hc = module.exports = function(options, fn) {
    if(typeof options === "function") {
      fn = options;
      options = {};
    }
    loader = new ConfLoader(options);
    return loader.load(options.env ,fn);
  };
  
  hc.get = function() {
    if(loader) {
      return loader.get.apply(loader, arguments);
    }
  };
  
  hc.sources = {
    Couch: require("./source/couchdb")
  };
  
}());