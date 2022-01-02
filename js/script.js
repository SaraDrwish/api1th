//https://newsapi.org/


let dataList = [];
let category = "business";
gitAllData(category);
let links = document.querySelectorAll(".nav-item .nav-link");
for(let i=0; i<links.length ; i++){
    // alert("ssssssssssssss");
    links[i].addEventListener( "click" , function(e){
         category=e.target.text ;
         gitAllData(category);
    })
}

function gitAllData(category){

    let httpReq = new XMLHttpRequest();
    // httpReq.open("GET" , "https://jsonplaceholder.typicode.com/posts");"
    httpReq.open("GET","https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=57a710df83fe42f2823fec3ce2e47c2e");
    // httpReq.open("GET", "https://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=6915a5cded32433aa16c302b8dcf9832");
    httpReq.send();
    httpReq.onreadystatechange = function() {

    if(httpReq.readyState == 4 && httpReq.status == 200 ){

        dataList = JSON.parse(httpReq.response).articles ;

        // dataList = JSON.parse(httpReq.response);
        showData();
    }

} 

}

function showData(){
    let temp = ` ` ;
    for(let i = 0 ; i < dataList.length; i++){

          temp += `
        <div class="col-md-3 mb-3">
        <div class="card">
            <img src=" ${ dataList[i].urlToImage }" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> `+ dataList[i].title + ` </h5>
            <p class="card-text"> ${ dataList[i].description} </p>
            </div>
        </div>
     </div>  
        `
    }

    let rowData = document.getElementById("rowData");
    rowData.innerHTML= temp;


}
