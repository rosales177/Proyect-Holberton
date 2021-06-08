document.addEventListener("DOMContentLoaded",function(event){
  console.log("Hello");
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