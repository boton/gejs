/* 
  A port of @ialcazar https://github.com/ialcazar/JavaScript-Examples/blob/master/arrays/concatenator/concatenator.js firebug version -> jasmine
*/

describe('stringMeDuckTyping',function(){
  
  describe('Given anything as param',function(){
    it('When param is a integer, Then returns empty String',function(){
      expect( stringMeDuckTyping( 3 ) ).toEqual('');
    });
    it('When param is a float, Then returns empty String',function(){
      expect( stringMeDuckTyping( 3.2 ) ).toEqual('');
    });
    it('When param is a String, Then returns empty String',function(){
      expect( stringMeDuckTyping( "hola" ) ).toEqual('');
    });
    it('When param is a Function, Then returns empty String',function(){
      expect( stringMeDuckTyping( function(){} ) ).toEqual('');
    });
  });
  
  describe('Given an empty param',function(){
    it('Then returns empty String',function(){
      expect( stringMeDuckTyping( '' ) ).toEqual('');
    });
  });
  
  describe('Given an array with zero length',function(){
    it('Then returns empty String',function(){
      expect( stringMeDuckTyping( [] ) ).toEqual('');
    });
  });
  
  describe('Given an array with strings',function(){
    it('Then returns \'hola\'',function(){
      expect( stringMeDuckTyping( ['hola'] ) ).toEqual('hola');
    });
    
    it('Then returns \'hola,que,tal\'',function(){
      expect( stringMeDuckTyping( ['hola','que','tal'] ) ).toEqual('hola,que,tal');
    });
  });
  
  describe('Given an array with array and string elements',function(){
    it('Then returns \'hola,soy,luis\'',function(){
      expect( stringMeDuckTyping( ["hola",["soy","luis"]] ) ).toEqual('hola,soy,luis');
    });
    
    it('Then returns \'hola,soy,luis,y,estoy,bien\'',function(){
      expect( stringMeDuckTyping( ["hola",["soy","luis"],"y","estoy","bien"] ) ).toEqual('hola,soy,luis,y,estoy,bien');
    });
  });
  
  describe('Given an array with array and string elements',function(){
    it('Then returns \'hola,soy,juan,fernandez,y,no,tengo,dinero\'',function(){
      expect( stringMeDuckTyping( ["hola", ["soy", ["juan", "fernandez"] ], "y", ["no", "tengo", ["dinero"] ] ] ) ).toEqual('hola,soy,juan,fernandez,y,no,tengo,dinero');
    });
  });

});

describe('stringMe',function(){
  
  describe('Given anything as param',function(){
    it('When param is a integer, Then returns empty String',function(){
      expect( stringMe( 3 ) ).toEqual('');
    });
    it('When param is a float, Then returns empty String',function(){
      expect( stringMe( 3.2 ) ).toEqual('');
    });
    it('When param is a String, Then returns empty String',function(){
      expect( stringMe( "hola" ) ).toEqual('');
    });
    it('When param is a Function, Then returns empty String',function(){
      expect( stringMe( function(){} ) ).toEqual('');
    });
  });
  
  describe('Given an empty param',function(){
    it('Then returns empty String',function(){
      expect( stringMe( '' ) ).toEqual('');
    });
  });
  
  describe('Given an array with zero length',function(){
    it('Then returns empty String',function(){
      expect( stringMe( [] ) ).toEqual('');
    });
  });
  
  describe('Given an array with strings',function(){
    it('Then returns \'hola\'',function(){
      expect( stringMe( ['hola'] ) ).toEqual('hola');
    });
    
    it('Then returns \'hola,que,tal\'',function(){
      expect( stringMe( ['hola','que','tal'] ) ).toEqual('hola,que,tal');
    });
  });
  
  describe('Given an array with array and string elements',function(){
    it('Then returns \'hola,soy,luis\'',function(){
      expect( stringMe( ["hola",["soy","luis"]] ) ).toEqual('hola,soy,luis');
    });
    
    it('Then returns \'hola,soy,luis,y,estoy,bien\'',function(){
      expect( stringMe( ["hola",["soy","luis"],"y","estoy","bien"] ) ).toEqual('hola,soy,luis,y,estoy,bien');
    });
  });
  
  describe('Given an array with array and string elements',function(){
    it('Then returns \'hola,soy,juan,fernandez,y,no,tengo,dinero\'',function(){
      expect( stringMe( ["hola", ["soy", ["juan", "fernandez"] ], "y", ["no", "tengo", ["dinero"] ] ] ) ).toEqual('hola,soy,juan,fernandez,y,no,tengo,dinero');
    });
  });

});


describe('stringMeWithoutJoin',function(){
  
  describe('Given anything as param',function(){
    it('When param is a integer, Then returns empty String',function(){
      expect( stringMeWithoutJoin( 3 ) ).toEqual('');
    });
    it('When param is a float, Then returns empty String',function(){
      expect( stringMeWithoutJoin( 3.2 ) ).toEqual('');
    });
    it('When param is a String, Then returns empty String',function(){
      expect( stringMeWithoutJoin( "hola" ) ).toEqual('');
    });
    it('When param is a Function, Then returns empty String',function(){
      expect( stringMeWithoutJoin( function(){} ) ).toEqual('');
    });
  });
  
  describe('Given an empty param',function(){
    it('Then returns empty String',function(){
      expect( stringMeWithoutJoin( '' ) ).toEqual('');
    });
  });
  
  describe('Given an array with zero length',function(){
    it('Then returns empty String',function(){
      expect( stringMeWithoutJoin( [] ) ).toEqual('');
    });
  });
  
  describe('Given an array with strings',function(){
    it('Then returns \'hola\'',function(){
      expect( stringMeWithoutJoin( ['hola'] ) ).toEqual('hola');
    });
    
    it('Then returns \'hola,que,tal\'',function(){
      expect( stringMeWithoutJoin( ['hola','que','tal'] ) ).toEqual('hola,que,tal');
    });
  });
  
  describe('Given an array with array and string elements',function(){
    it('Then returns \'hola,soy,luis\'',function(){
      expect( stringMeWithoutJoin( ["hola",["soy","luis"]] ) ).toEqual('hola,soy,luis');
    });
    
    it('Then returns \'hola,soy,luis,y,estoy,bien\'',function(){
      expect( stringMeWithoutJoin( ["hola",["soy","luis"],"y","estoy","bien"] ) ).toEqual('hola,soy,luis,y,estoy,bien');
    });
  });
  
  describe('Given an array with array and string elements',function(){
    it('Then returns \'hola,soy,juan,fernandez,y,no,tengo,dinero\'',function(){
      expect( stringMeWithoutJoin( ["hola", ["soy", ["juan", "fernandez"] ], "y", ["no", "tengo", ["dinero"] ] ] ) ).toEqual('hola,soy,juan,fernandez,y,no,tengo,dinero');
    });
  });

});
