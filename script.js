
let angle = 0;
let lense;
let cnv;

function preload(){
  lense = loadModel('Lense.obj');
}
function setup(){
  cnv = createCanvas(400,400,WEBGL);
  cnv.id("canvasID");
  var x = (2000 - width) / 2;
  var y = (800- height) / 2;
  cnv.position(x, y);
  background(400, 0, 300);

}
function draw(){
  perspective(0.1, 1.5, 10, 35000)
  background(120, 120,120);
  orbitControl();
  // rotateX(angle);
  // rotateY(angle);
  // rotateZ(angle);
  spotLight(255, 255, 255, 300, 500, 0, 1, -1, 0)
  model(lense, 80);
  
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

  // $(document).ready(function (){
  //   console.log(window.location.href);
  // });
  
  // document.getElementById("defaultOpen").click();

  //LINES 38-40 IS AN ATTEMPT TO CHANGE THE BACKGROUND COLOR OF FOUNDERS HTML
  // var foundersbg = document.getElementById("foundersbg");
  // console.log(foundersbg)
  // foundersbg.style.backgroundImage= "";


