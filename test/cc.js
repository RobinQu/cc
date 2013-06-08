var cc = require("../index");

cc(function(e, conf) {
  if(e) {
    return console.error(e.stack);
  }
  console.log(conf);
});