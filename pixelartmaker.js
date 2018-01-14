/*Let's make 101% sure that DOM is ready.*/
$(document).ready(function() {

  /* Set constant COLORPICKER.*/
    const COLORPICKER = $("#colorPicker");
  
  /* When grid-icon is clicked, show the popup-window by adding class (showPopUp) that has visible-style.*/
    $('#grid').on('click', function() {
      $('.window').addClass('showPopUp');
    });
  
  /* Close window when clicking close (x). -> Hide window by removing the showPopUp - class*/
    $('.close').on('click',function(){
      $('.window').removeClass('showPopUp');
    });

  /* Clicking trashcan (#delete) activates the "delete". TODO: -> Should there be warning?*/
    $('#delete').click(function(){
      $('#pixel_canvas').empty();
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
  
      /* Hide the popUpWindow */
      $('.window').removeClass('showPopUp');

      /* Call makegrid with values previously "collected".*/
      makeGrid(inputHeight, inputWidth);
  });
  
  /*TODO: RESET BUTTON NOT NECESSARY, REMOVE?
  - Reset-button functionality: empties the "$(#pixel_canvas)". Sets values to 0. */
    $("#button2").click(function() {
      $('#pixel_canvas').empty();
      $("#input_height").val(0);
      $("#input_width").val(0);
    });
  
  /* Make a Grid */
    function makeGrid(height, width) {
  // Get rid of the old $(#pixel_canvas).
      $('#pixel_canvas').empty();
  
  /* Create as many rows as the height */
      for (let i = 0; i < height; i++) {
        const new_row = $("<tr></tr>");
        $('#pixel_canvas').append(new_row);
  
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
  
  /* When mouse button is down, draw is true*/
    $('#pixel_canvas').on('mousedown', function(e){
      e.preventDefault();
      draw = true;
    });
  
  /* When mouse button is up again, draw is false*/
    $('#pixel_canvas').on('mouseup', function(){
      draw = false;
    });
  
  /* If mouse is down (draw == true), then when mouse enters an element background is color */
    $('#pixel_canvas').on('mouseenter', 'td', function() {
      if(draw){
          let color  = COLORPICKER.val();
          $(this).css('background-color', color);
          }
    });
  
  }); /* Whole thing was inside document ready. */
  