describe("factorial",function(){
  describe("factorial recursive - EXERCISE TEST:",function(){
    it("When param is 5, Then returns 120",function(){
      expect( factorial(5) ).toEqual( 120 );
    });
  });
  
  describe("factorialLoop:",function(){
    it("When param is 5, Then returns 120",function(){
      expect( factorialLoop(5) ).toEqual( 120 );
    });
  });
});