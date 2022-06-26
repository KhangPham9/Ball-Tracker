class Input {
  constructor(vector) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'w') {
        vector.y = -1;
      } else if (e.key === 's') {
        vector.y = 1;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'a') {
        vector.x = -1;
      } else if (e.key === 'd') {
        vector.x = 1;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.key === 'a' || e.key === 'd') {
        vector.x = 0;
    }});
    document.addEventListener('keyup', (e) => {
      if (e.key === 'w' || e.key === 's') {
        vector.y = 0;
    }});
  }
}

export default Input;
