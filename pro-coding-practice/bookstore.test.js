it('should price books correctly', function () {
     expect(getPrice(books[2])).toEqual(10.80);
     expect(getPrice(books[0])).toEqual(5.40);
});

// TODO: additional tests here ...
it('should sell books correctly', function() {
      expect(sellBook(books[3])).toEqual(3);
})