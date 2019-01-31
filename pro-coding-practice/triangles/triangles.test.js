it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  // TODO: handle more validation cases here
});

it('should calculate areas', function () {
  // TODO
});

it('should calculate hypotenuses', function () {
  // TODO
});

it('should craft correct message', function () {
  // we'd like to have tests like this:  
  //
  // expect(getMessage(12, 5)).toEqual(
  //     "Hypotenuse is 5 and area is 6.");
  //
  // TODO test "big triangles" here
});

it('should generate correct results', function () {
  // we'd like to have tests like this:
  // 
  // expect(getResults(3, 4)).toEqual(
  //   {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
  //   
  // TODO test an invalid submission here
});


