for(let i = 0; i < 100; i++){
  let n = i + 1;

  const n3 = n % 3;
  const n5 = n % 5;

  if((n3 == 0) && (n5 == 0)){
    n = 'fizzbuzz';
  }

  if((n % 3) == 0){
    n = 'fizz';
  }

 if((n % 5) == 0){
    n = 'buzz';
  }
  
  console.log(n);
}