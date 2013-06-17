var cc = require("../index"),
    fs = require("fs");

describe("default setup", function() {
  
  it("should load configs from local fs", function() {
    var sample = {
      "foo": "bar"
    };
    
    fs.writeFileSync("config.json", JSON.stringify(sample));
    
    var loaded = false;
    
    runs(function() {
      cc(function(e, conf) {
        loaded = true;
        expect(e).toBeFalsy();
        expect(conf).toBeTruthy();
        expect(conf.foo).toEqual(sample.foo);
      
        fs.unlinkSync("config.json");
      });
    });
    
    waitsFor(function() {
      return loaded;
    }, "conf should be loaded", 1000);
    
  });
  
  it("should load secondary config target", function() {
    
    if(!fs.existsSync("./config")) {
      fs.mkdirSync("./config");
    }
    
    var loaded = false,
        sample = {
      "foo": "bar"
    };
    fs.writeFileSync("./config/test.json", JSON.stringify(sample));
    
    runs(function() {
      cc(function(e, conf) {
        loaded = true;
        expect(e).toBeFalsy();
        expect(conf.foo).toEqual(sample.foo);
        fs.unlinkSync("./config/test.json");
      });
    });
    
    waitsFor(function() {
      return loaded;
    });
  });
  
});






