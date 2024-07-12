// 1. click: Triggered when the mouse is clicked on an element.
// 2. dblclick: Triggered when the mouse is double-clicked on an element.
// 3. mousedown: Triggered when the mouse button is pressed down on an element.
// 4. mouseup: Triggered when the mouse button is released over an element.
// 5. mouseover: Triggered when the mouse pointer enters the element.
// 6. mouseout: Triggered when the mouse pointer leaves the element.
// 7. mousemove: Triggered whenever the mouse pointer moves over the element.
// 8. mouseenter: Similar to mouseover, but does not bubble (does not trigger when moving from child to parent elements).
// 9. mouseleave: Similar to mouseout, but does not bubble.

const star_container = document.querySelector(".stars");
const stars = document.querySelectorAll(".star-icon");
const messageElement = document.querySelector(".message");

const message = ['Very Bad 🤮','Bad 😠','Normal 🙂','Good 😊','Awesome 😍'];

let choosenStar = null;
// console.log(stars);

for (let star = 0; star < stars.length; star++) {
//  console.log(stars[star]);
  stars[star].addEventListener("mouseenter", tempStar);
  stars[star].addEventListener("click", selectingStar);
}


function tempStar(e){
  // console.log(e.target);
  // if (stars === e.target) {
  //   return;
  // }
  const starId = e.target.id;
  let hoverStar = Number(starId.at(starId.length - 1));

  for (let i = 0; i <= hoverStar; i++) {
    const star = document.querySelector(`#star-${i}`);
    // console.log(star);
    star.classList.add("active-star");
  }

  for (let i = hoverStar + 1; i <= 4; i++) {
    const star = document.querySelector(`#star-${i}`);
    // console.log(star);
    star.classList.remove("active-star");
  }

  // console.log('IN:' + hoverStar);
  messageElement.innerText = message[hoverStar];
      document.title = messageElement.innerText;

};

function selectingStar(e) {
  console.log(e.target.parentNode);
  const starId = e.target.parentNode.id;
  console.log(starId);
  choosenStar = Number(starId.at(starId.length - 1));
  console.log('clicked',choosenStar);
}

star_container.addEventListener("mouseleave", (e) => {
  
  
  const starId = e.target.id;
  hoverStar = Number(starId.at(starId.length - 1));
  
  // if(hoverStar==0)
  for (let i = 0; i <= 4; i++) {
    const star = document.querySelector(`#star-${i}`);
    // console.log(star);
    star.classList.remove("active-star");
  }
  messageElement.innerText = "Give your Feedback!";
  document.title = 'Five Stars ⭐';
  
  if (choosenStar!=null) {
    for (let i = 0; i <= choosenStar; i++) {
      const star = document.querySelector(`#star-${i}`);
      // console.log(star);
      star.classList.add("active-star");
    }
    messageElement.innerText = message[choosenStar];
    document.title = messageElement.innerText;
  }

  // console.log('out:'+hoverStar);
});