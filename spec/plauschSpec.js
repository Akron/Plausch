describe('Plausch.Comment', function () {
  it('should be initializable', function () {
    var plausch = Plausch.Comment.create(undefined, "Super Text!");
    expect(plausch).toBeTruthy();
  });

  it('may have an author', function () {
    var plausch = Plausch.Comment.create("Akron", "Super Text!");
    expect(plausch.toString()).toEqual("Akron: Super Text!");
    expect(plausch.author()).toEqual('Akron');
    expect(plausch.toString()).toEqual("Akron: Super Text!");

    plausch = Plausch.Comment.create(undefined, "Super neuer Text!");
    expect(plausch.author()).toBeUndefined();
    expect(plausch.toString()).toEqual("Super neuer Text!");
    plausch.author("Julian");
    expect(plausch.author()).toEqual('Julian');
    expect(plausch.toString()).toEqual("Julian: Super neuer Text!");
  });

  it('should have a text', function () {
    var plausch = Plausch.Comment.create();
    expect(plausch).toBeNull();

    plausch = Plausch.Comment.create(undefined);
    expect(plausch).toBeNull();

    plausch = Plausch.Comment.create("test");
    expect(plausch).toBeNull();

    plausch = Plausch.Comment.create("test", null);
    expect(plausch).toBeNull();

    plausch = Plausch.Comment.create("test", undefined);
    expect(plausch).toBeNull();


    plausch = Plausch.Comment.create("test1", "Versuch1");
    expect(plausch.author()).toEqual('test1');
    expect(plausch.text()).toEqual('Versuch1');
    expect(plausch.toString()).toEqual("test1: Versuch1");

    plausch.author('test2')
    plausch.text('Versuch2')
    expect(plausch.author()).toEqual('test2');
    expect(plausch.text()).toEqual('Versuch2');
    expect(plausch.toString()).toEqual("test2: Versuch2");
  });

  it('should be stringifiable', function () {
    var plausch = Plausch.Comment.create(undefined, "Super Text!");
    expect(plausch.toString()).toEqual("Super Text!");

    plausch = Plausch.Comment.create('Akron', "Super Text!");
    expect(plausch.toString()).toEqual("Akron: Super Text!");
  });

  xit('should be submittable', function () {
    var plausch = Plausch.Comment.create(undefined, "Super Text!");
    expect(plausch).not.toBeNull();
    expect(plausch.submitted).toBe(false);
    expect(plausch.submit()).toBe(true);
    expect(plausch.submitted).toBe(true);
  });


  it('should be represented by an HTML node', function () {
    var plausch = Plausch.Comment.create(undefined, "Super Text!");
    var e = plausch.element();
    expect(e.getAttribute('class')).toEqual('plausch');
    expect(e.firstChild.getAttribute('class')).toEqual('plausch text');
    expect(e.firstChild.firstChild.nodeValue).toEqual('Super Text!');

    plausch = Plausch.Comment.create('Akron', "Besserer Text!");
    e = plausch.element();
    expect(e.getAttribute('class')).toEqual('plausch');

    expect(e.firstChild.getAttribute('class')).toEqual('plausch author');
    expect(e.firstChild.firstChild.nodeValue).toEqual('Akron');

    expect(e.lastChild.getAttribute('class')).toEqual('plausch text');
    expect(e.lastChild.firstChild.nodeValue).toEqual('Besserer Text!');
  });


  // In case the author or the text is changed,
  // the HTML representation has to change
  it('should update the HTML on attribute change', function () {
    var plausch = Plausch.Comment.create('Patricia', "Toller Text!");
    var e = plausch.element();
    expect(e.firstChild.firstChild.nodeValue).toEqual('Patricia');
    expect(e.lastChild.firstChild.nodeValue).toEqual('Toller Text!');

    // Update text content
    plausch.text('Super toller Text!');
    expect(e.lastChild.firstChild.nodeValue).toEqual('Super toller Text!');

    // Update author content
    plausch.author('Patti');
    expect(e.firstChild.firstChild.nodeValue).toEqual('Patti');
  });


  // The date of the comment will e retrieved from the
  // server response - client wise it's undefined
  it('should have have a date (if set by server)', function () {
    var plausch = Plausch.Comment.create('Patricia', "Toller Text!");
    expect(plausch.date('2005-11-25')).toBeUndefined();
    expect(plausch.date()).toBeUndefined();
  });

  // Comments can be attached to paragraphs
  it('could be attached to a paragraph');
  // Comments may also be attached to text snippets
  // marked by the comentator
  it('could be attached to text snippets');

  // Replies to the comment are represented by Plausch.Reply
  it('should support adding replies');
  it('should be serializable to JSON');

  // Comments may be up or downvoted by other commentators,
  // which may have an impact on the visibility.
  // That means - all comments can be sorted by their relevance.
  it('may be upvotable');
  it('may be downvotable');
  it('may support smileys in text');
});

xdescribe('Plausch.Reply');
