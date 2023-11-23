const randomColor = () => {
  const random = () => Math.round(Math.random() * 255);
  let resultColor = [];
  for (let i = 0; i < 3; i++) {
    let color = random();
    resultColor = [...resultColor, color];
  }
  return `rgb(${resultColor[0]},${resultColor[1]},${resultColor[2]},)`;
};
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());

