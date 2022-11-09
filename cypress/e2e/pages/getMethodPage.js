const page = require('./page');


const url = 'https://httpbin.org/get';
const positiveStatus = 200;
const property = "url";

class GetMethod {

      GETRequest(){
        page.getrequest(url,positiveStatus);   
      }

      GETRequestWithProperty(){
        page.getrequestwithproperty(url,positiveStatus,property);
      }

}
module.exports = new GetMethod()