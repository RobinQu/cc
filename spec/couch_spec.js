var hc = require("../index");

describe("CouchDBSource", function() {
  
  it("should load conf by naming convention", function() {
    var cSource = new hc.sources.Couch({db:"http://127.0.0.1:5984/hc"});
    
    var loaded = false;
    
    runs(function() {
      hc({
        source: cSource
      }, function(e, conf) {
        loaded = true;
        expect(e).toBeFalsy();
        expect(conf).toBeTruthy();
        expect(conf.foo).toEqual("bar");
      });
    });
    
    waitsFor(function() {
      return loaded;
    }, "conf should be loaded", 1000);
  });
  
  it("should load conf by given name", function() {
    var loaded = false;
    
    runs(function() {
      hc({
        source: new hc.sources.Couch({
          db:"http://127.0.0.1:5984/hc", 
          id: "foobar"
        })
      }, function(e, conf) {
        loaded = true;
        expect(e).toBeFalsy();
        expect(conf).toBeTruthy();
        expect(conf.foo).toEqual("bar");
      });
    });
    
    waitsFor(function() {
      return loaded;
    }, "conf should be loaded", 1000);
    
  });
  
});