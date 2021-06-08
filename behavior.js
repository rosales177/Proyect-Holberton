document.addEventListener("DOMContentLoaded",function(event){
  console.log("Hello");
  var buttons= document.getElementsByClassName("btn");
  
  function myFunction() {
    var card1 = document.getElementById("card-1");
    var card2 = document.getElementById("caed-2");
    if (card1.style.display === "none") {
      card1.style.display = "block";
    } else {
      card1.style.display = "none";
    }

  }
  

  var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click",function(){
    if(thumbnailElement.className==""){
      thumbnailElement.className="small";
    }
    else{
      thumbnailElement.className="";
    }
    alert("I saw you click!");
  });
})