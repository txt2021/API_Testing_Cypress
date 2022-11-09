const { GETrequest } = require("./getMethodPage");

class Page {  

  getrequest(userURL,statusCode){    
    cy.request({
      method: 'GET',
      url: userURL
    })
      .should((response) => {
          expect(response.status).to.eq(statusCode); 
  })
} 

  getrequestwithproperty(userURL,statusCode,userproperty){    
    cy.request({
      method: 'GET',
      url: userURL
    })
      .should((response) => {
          expect(response.status).to.eq(statusCode); 
          expect(response.body).to.have.property(userproperty);
  })
  } 

  postrequest(userURL,username, useremail, userstatus, usergender, statusCode){    
    cy.request({
      method: 'POST',
      url: userURL,      
      body: {
          name: username,
          email: useremail,
          status: userstatus,
          gender: usergender
      }
    })
      .should((response) => {
          expect(response.status).to.eq(statusCode); 
  })
  } 

  postrequestwithinvalidheader(userURL,username, useremail, userstatus, usergender, statusCode){    
    cy.request({
      method: 'POST',
      url: userURL,   
      headers: {
        'content-type': 'application/json',
      },   
      body: {
          name: username,
          email: useremail,
          status: userstatus,
          gender: usergender
      }
    })
      .should((response) => {
          expect(response.status).to.eq(statusCode); 
  })
  } 

  putrequest(userURL,username, usergender, statusCode){    
    cy.request({
      method: 'PUT',
      url: userURL,      
      body: {
          name: username,
          gender: usergender
      }
    })
      .should((response) => {
          expect(response.status).to.eq(statusCode); 
  })
  } 

  deleterequest(userURL,username, statusCode){    
    cy.request({
      method: 'DELETE',
      url: userURL,      
      body: {
          name: username
      }
    })
      .should((response) => {
          expect(response.status).to.eq(statusCode); 
  })
  } 
  


}
module.exports = new Page()