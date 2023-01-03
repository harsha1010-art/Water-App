const smallCups = document.querySelectorAll('.box');
const liter = document.querySelector('.liters');
const percent = document.querySelector('.percent');
const abovePercent = document.querySelector('.above-percent');
const remained = document.querySelector('.center');
smallCups.forEach((box , index) => {
     box.addEventListener('click', () => highlightcups(index));
})

function highlightcups(index) {
  if(index == smallCups.length-1){
    if(smallCups[index].classList.contains('fill')) {
      index--;
    }
  }
  if(smallCups[index].classList.contains('fill') && !smallCups[index+1].classList.contains('fill')) {
    index--;
  }
  smallCups.forEach((box, index1) => {
      if(index1 <= index){
        box.classList.add('fill');
      } else{
          box.classList.remove('fill');
      }
  })

  bigCup(index);
}


function bigCup(index) {
  const fullCups = index+1;
  const totalCups = 8;
  
  if( fullCups === 0){
      percent.style.display = 'none';
      liter.innerHTML = `2L `;
  }else{
      percent.innerHTML = `${12.5*fullCups} % completed`;
      let height = fullCups * (322/8);
      percent.style.height = `${height}px`
      percent.style.display = 'block';
      liter.innerHTML = `${2-(fullCups*0.25)} L `;
      abovePercent.style.height = `${322-height}px`;
      if(fullCups>6){
        percent.style.fontSize = '20px';
        liter.style.fontSize = '20px';
        abovePercent.style.padding = '0';
      }else{
        percent.style.fontSize = '15px';
        liter.style.fontSize = '30px';
        abovePercent.style.padding = '20% 0';
      }
  }
}