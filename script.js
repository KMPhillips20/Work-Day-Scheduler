
$(function () {

// <--- How I got the date at the top of my page--->
$('#whatIsToDay').text(dayjs().format('dddd MMMM Do YYYY'))

// <--- How I got my time to be set up in the console log-->
  var whatItsTime = dayjs().add(-6, 'hour').hour();
  console.log(whatItsTime);

   // <--- This is the function I use to get my "Time blocks" to change colors for the time--->
   $('.meeting-time').each(function() {
    var thisIsTime = parseInt($(this).attr('id').split('-')[1]);
    if (thisIsTime < whatItsTime) {
      $(this).addClass('past');
    } else if (whatItsTime === thisIsTime) {
      $(this).addClass('present');
    } else if (thisIsTime > whatItsTime) {
      $(this).addClass('future');
    }
});
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


});

