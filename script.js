// $('.landxx').click(function() {
//   if ($(this).find('*').css('fill') == 'rgb(224, 224, 224)' ){
//     $(this).find('*').css({'fill':'#db0000'});
//     $(this).css({'fill':'#db0000'});
//   } else if ($(this).find('*').css('fill') == 'rgb(219, 0, 0)' ){
//     $(this).find('*').css({'fill':'#068200'});
//     $(this).css({'fill':'#068200'});
//   } else if ($(this).find('*').css('fill') == 'rgb(6, 130, 0)' ){
//     $(this).find('*').css({'fill':'#000082'});
//     $(this).css({'fill':'#000082'});
//   } else if ($(this).find('*').css('fill') == 'rgb(0, 0, 130)' ){
//     $(this).find('*').css({'fill':'#efeb00'});
//     $(this).css({'fill':'#efeb00'});
//   } else if ($(this).find('*').css('fill') == 'rgb(239, 235, 0)' ){
//     $(this).find('*').css({'fill':'#e0e0e0'});
//     $(this).css({'fill':'#e0e0e0'});
//   }
// });

 $(document).ready(function() {
  var currentMousePos = { x: -1, y: -1 };
  $(document).mousemove(function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
  });
  $('*').click(function() {
    var myClass = $(this).attr('class');
    if (typeof myClass != 'undefined') {
      if (myClass.includes('landxx')){
        window.countrySelecter = $(this).attr('class').split(' ').reverse();
        $('.drop-down').css({'top':currentMousePos.y, 'left':currentMousePos.x, 'display':'block'});
      } else if (myClass.includes('red-button')) {
        $('.' + countrySelecter[0]).find('*').css({'fill':'#db0000'});
        $('.' + countrySelecter[0]).css({'fill':'#db0000'});
        $('.drop-down').css({'display':'none'});
      } else if (myClass.includes('blue-button')) {
        $('.' + countrySelecter[0]).find('*').css({'fill':'#000082'});
        $('.' + countrySelecter[0]).css({'fill':'#000082'});
        $('.drop-down').css({'display':'none'});
      } else if (myClass.includes('green-button')) {
        $('.' + countrySelecter[0]).find('*').css({'fill':'#068200'});
        $('.' + countrySelecter[0]).css({'fill':'#068200'});
        $('.drop-down').css({'display':'none'});
      } else if (myClass.includes('yellow-button')) {
        $('.' + countrySelecter[0]).find('*').css({'fill':'#efeb00'});
        $('.' + countrySelecter[0]).css({'fill':'#efeb00'});
        $('.drop-down').css({'display':'none'});
      }
    }
  });
 });


