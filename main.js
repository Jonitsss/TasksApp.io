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
// Llamada a la función para cada botón y texto
toggleTextDecoration(1);
toggleTextDecoration(2);
toggleTextDecoration(3);
toggleTextDecoration(4);
toggleTextDecoration(5);
toggleTextDecoration(6);
toggleTextDecoration(7);
toggleTextDecoration(8);
toggleTextDecoration(9);
toggleTextDecoration(10);