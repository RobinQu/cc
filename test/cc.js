var cc = require("../index");

cc(function(e, conf) {
  if(e) {
    return console.error(e.stack);
  }
  //first trial
  console.log(conf);
  //cache trial
  console.log(cc.get());
});


