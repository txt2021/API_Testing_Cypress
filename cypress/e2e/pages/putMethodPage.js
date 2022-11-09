const page = require('./page');


const url = 'https://httpbin.org/put';
const positiveStatus = 200;

const user_name = "Taofiq";
const user_gender= "Female";

class PutMethod {

      PUTRequest(){
        page.putrequest(url, user_name,user_gender,positiveStatus);   
      }
     
    
}
module.exports = new PutMethod()