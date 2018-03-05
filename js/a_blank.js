
$('a').click(function(e) {
  if(navigator.userAgent.match(/(iPod|iPhone)/i)) {
    $(this).removeAttr('target');
  }
});


<!-- It seems there isn't any better solution as the solution to transit through a temporary a tag doesn't work on iOS 8+. -->