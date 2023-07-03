$(document).ready(function(){
  var dataString = $('#saved-bug-data').val();
  if(dataString){
    var data = JSON.parse(dataString);
	console.log(data);
    $.each(data,function(k,v){
      var input = $('[name='+k+']');
      var type = input.attr('type');
      var tag = input.prop('tagName');
      if(v){
        if(type =='radio') {
          $('input:radio[name='+k+'][value='+v+']').click();
        }
        if(tag=='textarea'){
          input.text(v);
        }
        else{
          input.val(v);
        }
      }
    });
  }
  $('#report_bug_form').submit(function(){
    $.ajax({
      type:'POST',
      url:'./saveBugData.php',
      data:$(this).serialize()
    });
  });
});