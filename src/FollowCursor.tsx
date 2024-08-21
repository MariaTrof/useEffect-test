

function followCursor(element, delay) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.backgroundColor = 'blue';
  element.appendChild(square);

  function moveSquare() {
    square.style.left = event.clientX + 'px';
    square.style.top = event.clientY + 'px';
  }

  function startFollowing() {
    element.addEventListener('mousemove', moveSquare);
    setTimeout(startFollowing, delay);
  }

  startFollowing();
}

// Пример использования функции
followCursor(document.querySelector('.my-element'), 100); // Задержка в 100 мс