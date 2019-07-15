// Your code here
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"


// going left
function moveDodgerLeft(){
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
     moveDodgerLeft()
    }
  });

//   going right
function moveDodgerRight(){
    var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

dodger.style.left = `${left + 1}px`;
}

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
 moveDodgerRight()
    }
  });

//   going up

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowUp") {
//       var bottomNumbers = dodger.style.bottom.replace("px", "");
//       var bottom = parseInt(bottomNumbers, 10);
   
//       dodger.style.bottom = `${bottom + 5}px`;
//     }
//   });

// // going down
// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowDown") {
//       var bottomNumbers = dodger.style.bottom.replace("px", "");
//       var bottom = parseInt(bottomNumbers, 10);
   
//       dodger.style.bottom = `${bottom - 5}px`;
//     }
//   });