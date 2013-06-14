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
        if(e) {
          return console.error(e.stack);
        }
        expect(conf).toBeTruthy();
        expect(conf.foo).toEqual(sample.foo);
      
        fs.unlinkSync("config.json");
      });
    });
    
    waitsFor(function() {
      return loaded;
    }, "conf should be loaded", 1000);
    
  });
});






