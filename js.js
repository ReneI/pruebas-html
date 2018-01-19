$(document).ready(function(){
var control = 0;
    setInterval(function() {
  $(".hola").hide(3000).show(6000);
}, 1000);
$(".titulo").click(function(){
  if(control===0){
    $(".contenido").slideUp("fast");
  control++
}
else{
  $(".contenido").slideDown("slow");
  control--;
}
});
$(".acordeon").hover(function(){
  $(".acordeon").addClass("sobre");

},function(){
  $(".acordeon").removeClass("sobre");

});

});