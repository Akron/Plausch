var Plausch = Plausch || {};

(function (Plausch) {
  "use strict";

  // Default log message
  Plausch.log = Plausch.log || function (type, msg) {
    console.log(type + ": " + msg);
  };

  Plausch.Comment = {
    create : function (author, text) {
      return Object.create(Plausch.Comment)._init(author, text);
    },
    _init : function (author, text) {
      this._author = author;
      this._comment = text;
      return this;
    },
    toString : function () {
      return (this._author !== undefined ? this._author + ': ' : '')  + this._comment;
    }
  };
}(this.Plausch));
