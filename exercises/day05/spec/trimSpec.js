describe("trim",function(){
  describe("EXERCISE TEST:",function(){
    it("When param is \"        Hola mundo        \", \"Hola mundo\"",function(){
      expect( trim( "   Hola mundo   " ) ).toEqual( "Hola mundo" );
    });
  });
});