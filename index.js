import './index.css';

for(let i=1; i<=9; i++){
  let output = []
  for(let j=1; j<=i; j++){
    output.push(`${j}×${i}=${i*j}`)
  }
  console.log(output.join(' '));
}



