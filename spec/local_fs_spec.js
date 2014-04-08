var cc = require("../index"),
    fs = require("fs");

describe("default setup", function() {
  
  it("should load configs from local fs", function(done) {
    var sample = {
      "foo": "bar"
    };
    
    fs.writeFileSync("config.json", JSON.stringify(sample));
    
    cc(function(e, conf) {
      expect(e).toBeFalsy();
      expect(conf).toBeTruthy();
      expect(conf.foo).toEqual(sample.foo);
      fs.unlinkSync("config.json");
      done();
    });
    
  });
  
  it("should load secondary config target", function(done) {
    
    if(!fs.existsSync("./config")) {
      fs.mkdirSync("./config");
    }
    
    var sample = {
      "foo": "bar"
    };
    fs.writeFileSync("./config/test.json", JSON.stringify(sample));
    
    cc(function(e, conf) {
      expect(e).toBeFalsy();
      expect(conf.foo).toEqual(sample.foo);
      fs.unlinkSync("./config/test.json");
      done();
    });
    
  });
  
});






