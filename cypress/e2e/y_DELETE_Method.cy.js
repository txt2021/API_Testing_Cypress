const deletepage = require('./pages/deleteMethod'); 

describe('Test for DELETE method', () => {    
        
    it('Should delete user ', () => {       
        deletepage.DELETERequest();
    })
       

})