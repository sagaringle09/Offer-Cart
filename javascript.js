document.addEventListener("DOMContentLoaded", ()=>{
  const boxes = document.querySelectorAll(".box");

  //Initially expand the first box
  if(boxes.length > 0){
    boxes[1].classList.add("expanded");
  }
  //The functon to handle the box click
  function handleBoxClick(clickedBox){    
    boxes.forEach((box) => box.classList.remove("expanded"));
    clickedBox.classList.add("expanded");
  }
  boxes.forEach((box) => {
    box.addEventListener("click", () => handleBoxClick(box))
  })
})
