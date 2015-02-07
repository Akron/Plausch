var Plausch = Plausch || {};

(function (Plausch) {
  "use strict";

  // Default log message
  Plausch.log = Plausch.log || function (type, msg) {
    console.log(type + ": " + msg);
  };

  Plausch.Comment = {
    create : function () {
      return Object.create(Plausch.Comment);
    }
  };
}(this.Plausch));
