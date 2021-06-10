document.addEventListener("DOMContentLoaded",function(event){
  console.log("Hello");
  //Despliegue de card1
  function desplegarCard1() {
    let card1 = document.getElementById("card-1");
    if (card1.style.display === "none") {
      card1.style.display = "block";
    } else {
      card1.style.display = "none";
    }
  }
  document.getElementById('btn1').onclick = function (){
    desplegarCard1();
  }
//Modificar tamaño de imagen. 
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