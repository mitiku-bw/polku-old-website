$(document).ready(function() {
                $(window).scroll(function() {
                    
                    if ($('body').height() <= (1.3 * $(window).height() + $(window).scrollTop())) {
                        $('footer').show();
                    }
                    else
                        $('footer').hide();
                });
            });    