it('should find the most popular', function () {
  expect(mostPopular('abbaaac')).toEqual('a');
  expect(mostPopular('vroom')).toEqual('o');
});

it('should handle ties correctly', function () {
  expect(mostPopular('cabba')).toEqual('b');
  expect(mostPopular('caabb')).toEqual('a');
});

