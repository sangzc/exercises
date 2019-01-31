it('should price books correctly', function () {
  expect(getPrice(books[1])).toEqual(10.80);
});

it('should handle sale pricing', function () {
  expect(getPrice(books[0])).toEqual(5.40);
});

it('should handle selling', function () {
  sellBook(books[3]);
  expect(books[3].copies).toEqual(3);
});

it('should raise error if oversold', function () {
  expect(function () {
    sellBook(books[2])
  }).toThrow();
});
