/**
 * Plausch is a sidenode comment system.
 */
var Plausch = Plausch || {};

(function (Plausch) {
  "use strict";

  // Default log message - should be overwritten
  Plausch.log = Plausch.log || function (type, msg) {
    console.log(type + ": " + msg);
  };

  /**
   * Represent a comment in a Plausch.
   */
  Plausch.Comment = {
    submitted : false,

    // Create a new object
    create : function (author, text) {
      if (text !== undefined && text !== null)
	return Object.create(Plausch.Comment)._init(author, text);
      return null;
    },

    // Initialize the object by values
    _init : function (author, text) {
      this._author = author;
      this._text   = text;
      return this;
    },

    // Get or set author
    author : function (author) {
      if (arguments.length === 1) {
	this._author = author;
	this.submitted = false;
	this._update();
      };
      return this._author;
    },

    // Get or set text
    text : function (text) {
      if (arguments.length === 1) {
	this._text = text;
	this.submitted = false;
	this._update();
      };
      return this._text;
    },

    // Get the date of the comment
    date : function () {
      // Date can only be set by the server
      return this._date;
    },

    /* The HTML representation of the comment
     * looks like ...
     * <div class="plausch">
     *   <span class="plausch author">{author name}</span>
     *   <span class="plausch text">{comment text}</span>
     * </div>
     */
    element : function () {
      if (this._element !== undefined)
	return this._element;

      this._element = document.createElement('div');
      this._element.setAttribute('class', 'plausch');

      // Update element (Create author and text)
      this._update();
      return this._element;
    },

    // Update the represented HTML content
    _update : function () {
      if (this._element === undefined)
	return;
      
      var comment = this._element;

      // Remove all nodes (author or text) if set
      while (comment.lastChild) {
	comment.removeChild(this._element.lastChild);
      };

      // Create Author view
      if (this._author != undefined) {
	var author = document.createElement('span');
	author.setAttribute('class', 'plausch author');
	author.appendChild(document.createTextNode(this._author));
	comment.appendChild(author);
      };

      // Create Author view
      var text = document.createElement('span');
      text.setAttribute('class', 'plausch text');
      text.appendChild(document.createTextNode(this._text));
      comment.appendChild(text);
      this._element = comment;
    },

    // THis is more or less just for testing
    toString : function () {
      return (this._author !== undefined ? this._author + ': ' : '') +
	this._text;
    }
  };
}(this.Plausch));
