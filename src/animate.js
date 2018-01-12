const randEl = document.querySelector('.rand')
const colorClasses = ['dark-red', 'light-red', 'red', 'light-green', 'dark-green']
function getRandomNumberOfElements(el){
  
  const numberOfElements = randNum(2, 4) * 4
  const gridTemplateColumns = `${randNum()}fr ${randNum()}fr ${randNum()}fr 1fr`
  
}
function createElements(num, colorClasses){
  let el=[]
  for(let i = 0; i < num; i++){
     let t = createRandomColorElement(colorClasses) 
    el.push(t)
   }
  return el
}
function createRandomColorElement(colorClasses){
  let el = document.createElement("div")
  const className = colorClasses[randNum(0, colorClasses.length)] + " flip fade-in-main-color"
   el.setAttribute('class', className)
    const delay = `${randNum(30, 70)/100}s`

    el.style.animationDuration = delay
    el.style.animationDuration = delay
  return el
}
