//FIXME : fix the messy code... :)
    
    const COLORPICKER = document.getElementById("colorPicker");
    const SIZEPICKER = document.getElementById("sizePicker");
    const GRID = document.getElementById("grid");
    const CANVAS = document.getElementById("pixel_canvas");
    const WINDOW = document.querySelector(".window");
    const FRAGMENT = document.createDocumentFragment();
  
    GRID.addEventListener('click', function() {
    document.querySelector('.window').classList.add('showPopUp');
    });

    document.querySelector('.close').addEventListener('click',function(){
    WINDOW.classList.remove('showPopUp');
    });

    document.getElementById('delete').addEventListener('click', function(){
    CANVAS.innerHTML = "";
    });

    SIZEPICKER.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputHeight = document.getElementById("input_height").value;
      const inputWidth = document.getElementById("input_width").value;

      WINDOW.classList.remove('showPopUp');
      makeGrid(inputHeight, inputWidth);
  
  });

  /* --------------- Make a Grid ----------------- */
    function makeGrid(height, width) {

      CANVAS.innerHTML = "";

      for (let i = 0; i < height; i++) {
        const new_row = document.createElement("tr");
        FRAGMENT.appendChild(new_row);

      for (let j = 0; j < width; j++) {
        const new_col = document.createElement("td");
        new_row.appendChild(new_col);
        }
      }
      CANVAS.appendChild(FRAGMENT);

      CANVAS.addEventListener('click', function(e) {
        let color = COLORPICKER.value;
        e.target.style.backgroundColor = color;
        });
    }



  

  
  