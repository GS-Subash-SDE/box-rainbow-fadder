const wrapper = document.querySelector(".wrapper");

let selectedQue = [];
let timerCode;

wrapper.addEventListener('click',getBoxes);

function getBoxes(e) {
  const obj = e.target;
  if (obj.classList.contains('wrapper') || obj.classList.contains('col')) {
    return;
  }

  const boxId = obj.id;
  // console.log(boxId);

  obj.style.backgroundColor = randomColorGenerator();

  selectedQue.unshift(boxId);

  // console.log(selectedQue);

  if (timerCode) {
    
    clearTimeout(timerCode);
    // console.log('before',timerCode);
  }
  timerCode = setTimeout(clearingBox, 3000);
  // console.log('after',timerCode);
}

function clearingBox() {
  const n = selectedQue.length;
console.log('clear function');
  for (let i = 0; i < n; i++){
    // console.log('lol');
    setTimeout(() => {
      const box = document.getElementById(selectedQue[i]);
      box.style.backgroundColor = 'transparent';
      // console.log(box);
    },1000*(i+1));
  }
}

function randomColorGenerator() {
  let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let pickedColor = '#';
  for (let i = 0; i < 6; i++){
    const ran = Math.floor(Math.random() * 16);
    pickedColor = `${pickedColor}${colors[ran]}`;
  }
  console.log(pickedColor);

  return pickedColor;
}