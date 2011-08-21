describe("Map",function(){
  it("EXERCISE TEST: When param is [1,2,3,4] AND function(x){return x*x}, Then returns [1,4,9,16]",function(){
    expect( map([1,2,3,4], function(x){return x*x}) ).toEqual( [1,4,9,16] );      
  });
});


describe("crearSaludo",function(){
  
  describe("Anything as param",function(){
    it("When param is 3, Then trow TypeError -> \"param is not a string or array\"",function(){
      expect( function(){crearSaludo( 3 );} ).toThrow(new TypeError("param is not a string or array"));      
    });
    it("When param is 3.2, Then trow TypeError -> \"param is not a string or array\"",function(){
      expect( function(){crearSaludo( 3.2 );} ).toThrow(new TypeError("param is not a string or array"));
    });
    it("When param is function(){}, Then trow TypeError -> \"param is not a string or array\"",function(){
      expect( function(){crearSaludo( function(){} );} ).toThrow(new TypeError("param is not a string or array"));
    });
  });
  
  describe("String as param",function(){
    it("When param is \"@boton\", Then returns \"Hola @boton\"",function(){
      expect( crearSaludo("@boton")() ).toEqual("Hola @boton");      
    });

  });
  
  describe("Array as param [\"@javierbrea\",\"@dperandones\",\"@boton\"]",function(){
    it("When param is [\"@javierbrea\",\"@dperandones\",\"@boton\"] and call is arr[0], Then returns \"Hola @javierbrea\"",function(){
      expect( crearSaludo( ["@javierbrea","@dperandones","@boton"] )[0]() ).toEqual("Hola @javierbrea");
    });
    
    it("When param is [\"@javierbrea\",\"@dperandones\",\"@boton\"] and call is arr[2], Then returns \"Hola @dperandones\"",function(){
      expect( crearSaludo( ["@javierbrea","@dperandones","@boton"] )[1]() ).toEqual("Hola @dperandones");
    });
    
    it("When param is [\"@javierbrea\",\"@dperandones\",\"@boton\"] and call is arr[0], Then returns \"Hola @boton\"",function(){
      expect( crearSaludo( ["@javierbrea","@dperandones","@boton"] )[2]() ).toEqual("Hola @boton");
    });
  });
  
  describe("EXERCISE TEST:",function(){
    
    it("When param is \"Pepe\", Then returns \"Hola Pepe\"",function(){
      expect( crearSaludo("Pepe")() ).toEqual( "Hola Pepe" );
    });
    
    describe("When param is [\"Pepe\", \"María\"]",function(){
      it("When arr[0] call, Then returns \"Hola Pepe\"",function(){
        expect( crearSaludo( ["Pepe","María"] )[0]() ).toEqual("Hola Pepe");
      });
      
      it("When arr[1] call, Then returns \"Hola María\"",function(){
        expect( crearSaludo( ["Pepe","María"] )[1]() ).toEqual("Hola María");
      });
    });
    
  });
});