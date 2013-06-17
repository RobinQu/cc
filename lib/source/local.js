/*global __dirname */

(function(LocalSource) {
  
  var fs = require("fs"),
      path = require("path");
  
  
  LocalSource.load = function(env, fn) {
    var root, candidates, i, conf;
    
    candidates = [];
    root = process.env.CC_PATH || process.cwd();
    candidates.push(path.join(path.dirname(require.main.filename), "config.json"));
    candidates.push(path.join(root, "config.json"));
    candidates.push(path.join(root, "config/config.json"));
    candidates.push(path.join(root, "config/" + env + ".json"));
    i = candidates.length;
    while(i--) {
      if(fs.existsSync(candidates[i])) {
        break;
      }
    }
    if(candidates[i]) {
      try {
        conf = require(candidates[i]);
      } catch(e) {
        return fn(e);
      }
    }
    if(conf) {
      return fn(null, conf[env] || conf);
    }
    fn(new Error("cannot find conf"));
  };
  
}(exports));