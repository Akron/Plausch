describe('Plausch.Comment', function () {
  it('should be initializable', function () {
    var plausch = Plausch.Comment.create(undefined, "Super Text!");
    expect(plausch).toBeTruthy();
  });

  it('should be stringifiable', function () {
    var plausch = Plausch.Comment.create(undefined, "Super Text!");
    expect(plausch.toString()).toEqual("Super Text!");
  });

  it('may have an author', function () {
    var plausch = Plausch.Comment.create("Akron", "Super Text!");
    expect(plausch.toString()).toEqual("Akron: Super Text!");
  });

  it('should have a date');
  it('should support adding comments');
  it('should be upvotable');
  it('should be downvotable');
});
