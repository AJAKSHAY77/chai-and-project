const buttons = document.querySelectorAll(".box")
const body = document.querySelector("body")
buttons.forEach((el)=>{
  el.addEventListener("click",(e)=>{
      if(e.target.id === "box1"){
        body.style.backgroundColor = "grey"
      }
      if(e.target.id === "box2"){
        body.style.backgroundColor = "green"
      }
      if(e.target.id === "box3"){
        body.style.backgroundColor = "yellow"
      }
      if(e.target.id === "box4"){
        body.style.backgroundColor = "blue"
      }
  })

})
