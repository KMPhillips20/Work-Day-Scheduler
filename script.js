
$(function dynamicPage() {

 
  var saveBtn = $('.saveBtn');
  var time = dayjs().hour();
  var date = $('#today');
  date.text(new Date());
  
  
  // whatever the user types and clicks the save button, then the data is saved in local storage
  $(saveBtn).click(function() {
    var scheduleInput = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, scheduleInput);
  })
  
  

  //  this function will change the color of the back ground depending on what time it is 
  // past = grey
  // current hour = red
  // future = green
  $('.description').each(function(){
    var meetingBlock = parseInt($(this).parent().attr('id').replace('hour', ''));
    if (mettingBlock < time){
    $(this).parent().addClass('past')
  } else if(meetingBlock === time) {
    $(this).parent().addClass('present')
  } else {
    $(this).addClass('future');
  }
  
});
})