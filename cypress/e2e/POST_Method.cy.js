const postpage = require('./pages/postMethodPage'); 

describe('Tests for POST method', () => {    
        
    it('Should create new user', () => {       
    postpage.POSTpositiveRequest();
    })

    it('Should create new user with valid header', () => {       
        postpage.POSTwithHeaderRequest();
        })
    

})