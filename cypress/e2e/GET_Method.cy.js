const getpage = require('./pages/getMethodPage'); 

describe('Tests for GET method', () => {    
        
    it('Should get an object and check statuscode', () => {       
    getpage.GETRequest();
    })

    it('Should get an object and check property', () => {      
      getpage.GETRequestWithProperty();
    })
    

})