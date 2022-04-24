
let button = document.getElementById('button1');
var domain;


// var url = "https://codewithharry.com/";


button.addEventListener("click", function(e) {
    let name = document.getElementById("name").value;
    let sirname = document.getElementById('sirname').value;
    let url = document.getElementById('inputAddress').value;
    let result1 = document.getElementById("result1")
    var domain = url.replace('http://www.','@').replace('https://www.','@').replace('www.','@').replace('https://','@').replace('http://','@').split(/[/?#]/)[0];
    result1.value=name+sirname+domain;
    result2.value=name.slice(0,1)+sirname+domain;
    result3.value=name+sirname.slice(0,1)+domain;
    result4.value=name+domain;
    result5.value=sirname+domain;
    
    

   
    url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result1.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data1)=>{
        
        console.log(data1)
      if(data1.smtpCheck){
        result1.classList.remove('is-valid');
      }
      {
        result1.classList.remove('is-invalid');
      }
    })
       
    url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result2.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data2)=>{
        
     
        console.log(data2.smtpCheck)
        if(data2.smtpCheck){
          result2.classList.remove('is-valid');
        }
        {
          result2.classList.remove('is-invalid');
        }
    })
       
    url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result3.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data3)=>{
      console.log(data3.smtpCheck)
      if(data3.smtpCheck){
        result3.classList.remove('is-valid');
      }
      {
        result3.classList.remove('is-invalid');
      }
    })
       
    url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result4.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data4)=>{
        
      if(data4.smtpCheck){
        result4.classList.remove('is-valid');
      }
      {
        result4.classList.remove('is-invalid');
      }
    })
       
    url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result5.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data5)=>{
        
        console.log(data5.smtpCheck)
        if(data5.smtpCheck){
          result5.classList.remove('is-valid');
        }
        {
          result5.classList.remove('is-invalid');
        }
    })
   
  

  });

    

  // fetch(https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com)

  //api -   at_MsGBAmjNNV2647y0rIC7ULWVELTbD
//   https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com
//   https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=admin@thepediatricdentalgroup.com
    // console.log(name+sirname+domain)
   
 


    



