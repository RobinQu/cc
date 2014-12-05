var cc = require("../index"),
    fs = require("fs"),
    expect = require("chai").expect;

describe("default setup", function() {
  var sample = {
    "foo": "bar"
  };
  before(function() {
    
    fs.writeFileSync("config.json", JSON.stringify(sample));
  });
  
  after(function() {
    fs.unlinkSync("config.json");
  });
  
  it("should load configs from local fs", function(done) {
    
    cc(function(e, conf) {
      if(e) {done(e);}
      expect(conf).to.be.ok;
      expect(conf.foo).to.deep.equal(sample.foo);
      done();
    });
    
  });
  
  it("should load secondary config target", function(done) {
    
    fs.writeFileSync("./config/test.json", JSON.stringify(sample));
    
    cc(function(e, conf) {
      if(e) {done(e);}
      expect(conf).to.be.ok;
      expect(conf.foo).to.deep.equal(sample.foo);
      done();
    });
    
  });
  
  it('should sync load', function() {
    
  });
  
});