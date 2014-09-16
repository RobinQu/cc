var hc = require("../index");

xdescribe("CouchDBSource", function() {
  
  it("should load conf by naming convention", function(done) {
    var cSource = new hc.sources.Couch({db:"http://127.0.0.1:5984/hc"});
    
    hc({
      source: cSource
    }, function(e, conf) {
      expect(e).toBeFalsy();
      expect(conf).toBeTruthy();
      expect(conf.foo).toEqual("bar");
      done();
    });
    
  });
  
  it("should load conf by given name", function(done) {
    hc({
      source: new hc.sources.Couch({
        db:"http://127.0.0.1:5984/hc", 
        id: "foobar"
      })
    }, function(e, conf) {
      expect(e).toBeFalsy();
      expect(conf).toBeTruthy();
      expect(conf.foo).toEqual("bar");
      done();
    });
  });
  
});