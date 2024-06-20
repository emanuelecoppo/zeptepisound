var vw = $(window).width()/100;
var vh = $(window).height()/100;
var root = document.documentElement;

/*--------------------SIMBOLI--------------------*/
$('.simboli img').each(function() {
  var simbolo = $(this);
  window.setInterval(function() {
    simbolo.attr('src', '/assets/symbols/'+ String.fromCharCode(65+Math.floor(Math.random()*26)) +'.svg');
  }, Math.floor(Math.random()*(1000-500+1)+500));
});
/*--------------------COMINGSOON--------------------*/
window.setInterval(function() {
  $('#comingsoon').attr('src', '/assets/symbols/'+ String.fromCharCode(65+Math.floor(Math.random()*26)) +'.svg');
}, 1000);
