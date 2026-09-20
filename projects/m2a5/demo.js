'use strict';

document.querySelector('#demo-contact').addEventListener('submit', function (event) {
  event.preventDefault();
  document.querySelector('#demo-message').textContent = 'Demo complete. No message was sent or saved.';
});
