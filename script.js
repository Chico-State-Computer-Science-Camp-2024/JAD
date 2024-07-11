
let angle = 0;
let lense;

function preload(){
  lense = loadModel('Lense.obj');
}
function setup(){
  createCanvas(100,100,WEBGL);
  
}
function draw(){
  background(120, 120,120);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  model(lense);
  angle += 0.03;
}

  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();
