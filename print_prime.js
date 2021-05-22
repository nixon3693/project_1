function prime(number){
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
        console.log(i);
      }
    }
  }
  else{
    console.log("not prime");
  }
}

prime(10);