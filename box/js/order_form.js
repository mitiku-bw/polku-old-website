$(document).ready(function(){
    $("#send_email").click(function(){
        /*if( $( this ).attr( 'type' ) === 'checkbox' ) {val = +$(this).is( ':checked' );}*/
         /*inputs = $('.form-group');
        inputs.each(function() {
        var value = $(this).val();	
        if( $( this ).attr( 'type' ) === 'checkbox' ) {
            value = +$(this).is( ':checked' );
        }
    });	*/
        var checked1 = $('#varaa_demo').is(':checked');
        var checked2 = $('#kk').is(':checked');
        var checked3 = $('#usassa').is(':checked');
        var checked4 = $('#euroopassa').is(':checked');
         /***************************/
        var nimi = $('#nimi').val();
        var fullname = nimi.replace(/\s/g,'');  
        var puh = $('#puh').val();
        var yritys = $('#yritys').val();
        var email = $('#email').val();
        var name_regex = "^[\\p{L} .'-]+$";/*/^[a-zA-Z]+$/;*/
        var puh_regex = /\+[0-9]+$/;
        var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        // To Check Empty Form Fields.
        if (nimi.length == 0 || !isNaN(nimi)){
        $('#name_vText').text("* Tarkista nimi *"); 
        $("#nimi").focus();
        /*return false;*/
        }
        
        // Validating Email Field.
        else if (!email.match(email_regex) || email.length == 0) {
        $('#email_vText').text("* Tarkista sähköpostiosoite *"); // This Segment Displays The Validation Rule For Email
        $("#email").focus();
        /*return false;*/
        }
        // Validating puh Field.
        else if (puh.length == 0) {
        $('#tel_vText').text("* Tarkista puhelinnumero *"); // This Segment Displays The Validation Rule For tel
        $("#puh").focus();
        /*return false;*/
        }
        else{
            
        
        /***************************/

                var timeStamp = Math.floor(Date.now() / 1000);
                var dt = new Date();
                var utcDate = dt.toUTCString();
                var from,subject,text;
               
        
                from=email;
                subject="Box order";
        //        subject=$("#subject").val();
                text= "New order at " + utcDate + ":\n\n" + "Customer details:\n" + "Name:\t" + $("#nimi").val() + "\n" + "Company:\t" + $("#yritys").val() + "\n" + "Tel:\t" + $("#puh").val() + "\n" + "Email:\t" + $("#email").val() + "\n" + "Order details:\n" + "\tVaraa Demo:\t" + checked1 + "\n" + "\t1kk maksuton kokeilu:\t" + checked2 + "\n" + "\t25&euro;/lisenssi/kk (Data USA:ssa):\t" + checked3 + "\n" + "\t32&euro;/lisenssi/kk (Data Euroopassa):\t" + checked4 + "\n" + "\tLisenssien määrä: \t" + $("#Lisenssien_määrä").val() + "\n";

                /*$("#message").text("Lähettämällä tilauksia ... odota");*/
            $("#message").html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw aria-hidden="true"></i>');
            
                $.get("http://193.208.83.219:3004/send",{from:from,subject:subject,text:text},function(data){
                if(data=="sent"){
                    $("#message").empty().html("\nKiitos!!");
                    /*$("#message").text("\nKiitos!!");*/                           
                    $("#modal-fullscreen").modal('toggle');
                }
                });
    }
                
    });
});