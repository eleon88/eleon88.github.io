$(document).ready(function(){
  $('#myWork').click(function(){
    $('#work-list').toggleClass('noDisplay');
    $('.aboutMe').toggleClass('noDisplay');
    if ($('#myWork').text() === 'My Work'){
      $('#myWork').html('About Me');
    } else {
      $('#myWork').html('My Work');
    };
  });
});
