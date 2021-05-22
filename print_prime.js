self.onmessage = function prime(event){
var number = event.data;
  if(number>1){
    for (let i =0; i<number; i++){
      flag =0;
      for (let j=2; j<i; j++){
        if(i%j == 0){
          flag = 1;
          break;
        }
      }
      if (i>1 && flag == 0){
	postMessage(i)
        // console.log(i);
      }
    }
  }
  else{
    postMessage("Numbers less than 2 are not prime")
    // console.log("not prime");
  }
}

//prime(10);