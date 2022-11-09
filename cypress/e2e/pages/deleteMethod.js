const page = require('./page');


const url = 'https://httpbin.org/delete';
const positiveStatus = 200;

const user_name = "Taofiq";

class DeleteMethod {

      DELETERequest(){
        page.deleterequest(url, user_name,positiveStatus);   
      }
     
    
}
module.exports = new DeleteMethod()