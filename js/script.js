
let httpReq = new XMLHttpRequest();
httpReq.open("GET" , "https://jsonplaceholder.typicode.com/posts");
httpReq.send;
httpReq.onreadystatechange = function() {
    
  if(httpReq.readyState == 4 && httpReq.status == 200 ){

    JSON.parse(httpReq.response);

  }

} 
