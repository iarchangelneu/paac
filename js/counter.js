document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("scroll", onScroll)
    onScroll()
});
var snumber = document.querySelectorAll(".counter");
var maxes = [];
for (let j =0; j < snumber.length; j++){
  maxes.push(snumber[j].getAttribute("data-max"))
}
var numberTops = 1400;
window.onload = function aboutNum(){
numberTops = snumber[0].getBoundingClientRect().top
    // start = +number.innerHTML, end = +number.dataset.max;
}
let numOptions = {
  duration: 4, // animation duration in seconds (2)// example: 1,000 vs 1000 (true)
  useEasing: true, // ease animation (true)
  separator: "" // grouping separator (',')
}
let numOptionsFast = {
  duration: 2, // animation duration in seconds (2)// example: 1,000 vs 1000 (true)
  useEasing: true, // ease animation (true)
  separator: "" // grouping separator (',')
}
var aboutnumber1 = new countUp.CountUp('aboutnumbers1', $("#aboutnumbers1")[0].dataset.max, numOptionsFast);
var aboutnumber2 = new countUp.CountUp('aboutnumbers2', $("#aboutnumbers2")[0].dataset.max,numOptions);
var aboutnumber3 = new countUp.CountUp('aboutnumbers3', $("#aboutnumbers3")[0].dataset.max,numOptionsFast);
var aboutnumber4 = new countUp.CountUp('aboutnumbers4', $("#aboutnumbers4")[0].dataset.max,numOptions);
function onScroll() {
  if(window.pageYOffset > numberTops - window.innerHeight/1.3) {
  window.removeEventListener('scroll', onScroll);  
    // for(let i = 0; i < snumber.length; i++){
    //   test(snumber[i],+snumber[i].innerHTML, maxes[i]);
    // }
  aboutnumber3.start();
  aboutnumber1.start();
  aboutnumber2.start();
  aboutnumber4.start();
    
  }
};