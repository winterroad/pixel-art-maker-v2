/*Let's make 101% sure that DOM is ready.*/
$(document).ready(function() {

/* Set constant COLORPICKER and CANVAS.*/
  const COLORPICKER = $("#colorPicker");
  const CANVAS = $("#pixel_canvas");

/*show pop up window - function. TODO: "background"*/
  function showPopUp() {
    $('.window').addClass('showPopUp');
  }

/* Call showPopUp-function*/
  $('#grid').click(function() {
    showPopUp();
  });

/* Clicking trashcan (#delete) activates the "delete"*/
  $('#delete').click(function(){
    CANVAS.empty();
  });

/* TODO: PEN */

/* TODO: FILL */

/* TODO: ERASER */

/* TODO: changing the submit to -> button. So there is no mixed language.
Build validation */
/* When size is submitted by the user (clicking the submit button),
call makeGrid with inputHeight- and inputWidth-parametres.*/

  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    const inputHeight = $("#input_height").val();
    const inputWidth = $("#input_width").val();

/*Hide window by removing the showPopUp - class*/
    $('.window').removeClass('showPopUp');

/* TODO: CLOSE-BUTTON (X) for the window.*/

/*Call makegrid with values previously "collected".*/
    makeGrid(inputHeight, inputWidth);
});

/*TODO: RESET BUTTON NOT NECESSARY, REMOVE?
- Reset-button functionality: empties the "CANVAS".*/
  $("#button2").click(function() {
    CANVAS.empty();
    $("#input_height").val(0);
    $("#input_width").val(0);
  });

/* Make a Grid */
  function makeGrid(height, width) {
// Get rid of the old CANVAS.
    CANVAS.empty();

/* Create as many rows as the height */
    for (let i = 0; i < height; i++) {
      const new_row = $("<tr></tr>");
      (CANVAS).append(new_row);

/* Create as many columns as there is width. Add columns to rows.*/
    for (let j = 0; j < width; j++) {
      const col = $("<td></td>");
      (new_row).append(col);
      }
    }
  }

/* Let's draw*/
/*When td-element is clicked, colorPicker values is checked and saved in color variable
and the td's background-color values is set same as the color.*/

  $('#pixel_canvas').on('click', 'td', function() {
    let color  = COLORPICKER.val();
    $(this).css("background-color", color);
  });

/*Continous painting*/
  let draw = false;

/* When mouse button is down draw is true*/
  $('#pixel_canvas').mousedown(function(e){
    e.preventDefault();
    draw = true;
  });

/* When mouse button is up again, draw is false*/
  $('#pixel_canvas').mouseup(function(){
    draw = false;
  });

/* If mouse is down (draw === true), then when mouse enters an element background is color*/
  $('#pixel_canvas').on('mouseenter', 'td', function() {
    if(draw){
        let color  = COLORPICKER.val();
        $(this).css('background-color', color);
        }
  });

}); /* Whole thing was inside document ready. */
