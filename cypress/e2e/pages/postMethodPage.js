const page = require('./page');


const url = 'https://httpbin.org/post';
const positiveStatus = 200;

const user_name = "Taofiq";
const user_status = "inactive";
const user_gender= "Male";
var randomEmail = require('random-email');
const user_email = randomEmail();

class PostMethod {

      POSTpositiveRequest(){
        page.postrequest(url, user_name,user_email,user_status,user_gender,positiveStatus);   
      }

      POSTwithHeaderRequest(){
        page.postrequestwithinvalidheader(url, user_name,user_email,user_status,user_gender,positiveStatus); 
      }


}
module.exports = new PostMethod()