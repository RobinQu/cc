HC
==
**Human-friendly configuration tools**


Usage
-----

Loading conf from following possible paths:

* $CC_ROOT/config.json
* $CC_RROT/config/config.json
* $CC_ROOT/config/{env}.json

where `$CC_ROOT` is default to the directory containing current running file (aka `require.main.filename`), or specified by env varialbe.

    require("hc")(function(e, conf) {
      if(e) {
        console.log("failed to load conf");
        console.error(e);
        return;
      }
      console.log(conf);
    });
    
    
    
TODO
----

* More configuration source support:

  * CouchDB 
  * MongoDB

* Browser Support
  
  * LocalStorage
  * HTTP
    