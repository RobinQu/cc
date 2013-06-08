module.exports = (function() {
  
  var ConfLoader = function(options) {
    this.source = options.source || require("./source/local");
    this.env = options.env;
    this.cache = {};
  };
  
  ConfLoader.prototype.load = function (env, fn) {
    var that = this;
    
    that.source.load(env, function(e, conf) {
      if(e) {
        return fn(e);
      }
      that.cache[env] = conf;
      fn(null, conf);
    });
  };
  
  ConfLoader.prototype.get = function (env) {
    env = env || this.env;
    return this.cache[env];
  };
  
  ConfLoader.prototype.refresh = function (fn) {
    this.load(this.env, fn);
  };
  
  return ConfLoader;
  
}());