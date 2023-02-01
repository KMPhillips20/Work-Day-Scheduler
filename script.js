
$(function () {
  
  // <--- How I got the date at the top of my page and to console log into the console--->
  // <--- to change the time you can use this and add it to the end of dayjs(): .add(-10, 'hour'), you can move forward with positive numbers and move backwards with negative numbers--->
  var whatItsTime = dayjs().add(-5, 'hour').hour();
  console.log(whatItsTime);
$('#whatIsToDay').text(dayjs().format('dddd MMMM Do YYYY'))


// <--- This is the function I use to get my "Time blocks " aka meeting times to change colors for the time--->
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

var saveBtn = $('.saveBtn');
  $(saveBtn). click(function() {
    var scheduleInput = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, scheduleInput);
  })

});

