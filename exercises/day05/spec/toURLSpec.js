describe("String.toURL",function(){
  describe("EXERCISE TEST:",function(){
    it("When param is \"en un lugar de la mancha\", \"en_un_lugar_de_la_mancha\"",function(){
      expect( 'en un lugar de la mancha'.toUrl() ).toEqual( "en_un_lugar_de_la_mancha" );
    });
  });
});