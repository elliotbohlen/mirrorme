var video = document.querySelector(".videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

var i = 1;

var append1Function = setInterval(function(){
  var rando = Math.floor(Math.random() * 10) + 1;
  //inserting
 var pic1 = `<div class="patternunit" style="
   left:${rando * 40}px;
   top:${i * 50}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/Largemirror(candeliver).png"></div>`;
 document.getElementById("box1").insertAdjacentHTML("beforeend", pic1);

 var pic2 = `<div class="patternunit" style="
   right:${rando * 40}px;
   top:${i * 20}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/vintageWalnutframed.png"></div>`;
 document.getElementById("box2").insertAdjacentHTML("beforeend", pic2);

 var pic3 = `<div class="patternunit" style="
   right:${i * 20}px;
   top:${rando * 40}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/verysolid.png"></div>`;
 document.getElementById("box3").insertAdjacentHTML("beforeend", pic3);

 var pic4 = `<div class="patternunit" style="
   right:${i * 20}px;
   top:${rando * 40}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/ovaltop.png"></div>`;
 document.getElementById("box4").insertAdjacentHTML("beforeend", pic4);

 var pic5 = `<div class="patternunit" style="
   right:${rando * 10}px;
   top:${i * 20}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/TeardropShaped.png"></div>`;
 document.getElementById("box5").insertAdjacentHTML("beforeend", pic5);

 var pic6 = `<div class="patternunit" style="
   right:${rando * 90}px;
   top:${i * 60}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/VictorianVintage.png"></div>`;
 document.getElementById("box6").insertAdjacentHTML("beforeend", pic6);

 var pic7 = `<div class="patternunit" style="
   right:${rando * 90}px;
   top:${i * 20}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/ScreenShot.png"></div>`;
 document.getElementById("box7").insertAdjacentHTML("beforeend", pic7);

 var pic8 = `<div class="patternunit" style="
   right:${rando * 90}px;
   top:${i * 20}px;
   transform: scale(${(i+4)/10});
   "><img src="images/edited/Antique,HandCarved.png"></div>`;
 document.getElementById("box8").insertAdjacentHTML("beforeend", pic8);

 var pic9 = `<div class="patternunit" style="
   right:${i * 90}px;
   top:${rando * 20}px;
   transform: scale(.${(i*4)/10});
   "><img src="images/edited/large_5105e7a81fbd679bed23113b2c57db2b.png"></div>`;
 document.getElementById("box9").insertAdjacentHTML("beforeend", pic9);









 var pic10 = `<div class="patternunit" style="
   right:${i * 90}px;
   top:${rando * 20}px;
   transform: scale(.${(i*4)/10});
   "><img src="images/edited/DoubleSidedRollingcopy.png"></div>`;
 document.getElementById("box10").insertAdjacentHTML("beforeend", pic10);

 var pic11 = `<div class="patternunit" style="
   right:${i * 90}px;
   top:${rando * 20}px;
   transform: scale(.${(i*4)/10});
   "><img src="images/edited/AntiqueMirror150.png"></div>`;
 document.getElementById("box11").insertAdjacentHTML("beforeend", pic11);

 var pic12 = `<div class="patternunit" style="
   right:${i * 90}px;
   top:${rando * 20}px;
   transform: scale(.${(i*4)/10});
   "><img src="images/edited/Antiquedresserwithmirror.png"></div>`;
 document.getElementById("box12").insertAdjacentHTML("beforeend", pic12);

 var pic13 = `<div class="patternunit" style="
   right:${i * 90}px;
   top:${rando * 20}px;
   transform: scale(.${(i*4)/10});
   "><img src="images/edited/SunRays.png
"></div>`;
 document.getElementById("box13").insertAdjacentHTML("beforeend", pic13);

 var pic14 = `<div class="patternunit" style="
   right:${i * 90}px;
   top:${rando * 20}px;
   transform: scale(.${(i*4)/10});
   "><img src="images/edited/AntiqueMirror.png
"></div>`;
 document.getElementById("box14").insertAdjacentHTML("beforeend", pic14);

 var pic15 = `<div class="patternunit" style="
   right:${i * 90}px;
   top:${rando * 20}px;
   transform: scale(.${(i*4)/10});
   "><img src="images/edited/AntiqueVanitywithMirror.png
"></div>`;
 document.getElementById("box15").insertAdjacentHTML("beforeend", pic15);


 if (i >= 10) {
   // defining the maximum amount of cycles
  clearInterval(append1Function);
 }
 i++;
},500); //speed in ms


$( function() {
   $( ".draggable" ).draggable();
 } );

 $(document).ready(function(){
     $('#show').click(function() {
       $('.menu').toggle("slide");
     });
 });
