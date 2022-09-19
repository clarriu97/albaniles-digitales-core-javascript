
function randomFunc() {
  for(var i = 0; i < 2; i++) {
    setTimeout(() => console.log(i),1000);
  }
}

randomFunc();
