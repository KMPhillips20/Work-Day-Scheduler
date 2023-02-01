
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
  
  
});
})