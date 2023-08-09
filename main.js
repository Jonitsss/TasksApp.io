const input = document.getElementById('input')
const alertBox = document.getElementById('customAlert');
const alerttxt = document.getElementById('alert-p');


function toggleTextDecoration(btnNumber) {
    const btn = document.getElementById('checkbox-' + btnNumber);
    const txt = document.getElementById('txt-' + btnNumber);
  
    btn.addEventListener('click', () => {
      if (txt.style.textDecoration === "line-through red") {
        txt.style.textDecoration = "none";
      } else {
        txt.style.textDecoration = "line-through red";
        alertBox.style.display = 'block';
        alerttxt.innerHTML = 'Felicidades ' + input.value + ' has completado la tarea ' + txt.innerHTML
      }
    });
  }

  function closeAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';
  }


for (let i=0; i < 10; i++) {
  toggleTextDecoration(i+1)
}