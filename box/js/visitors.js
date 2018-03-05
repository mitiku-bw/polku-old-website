$(document).ready(function(){
    
    var div = $('#dynamicheight');
    var width = div.width();
    
    div.css('height', width/1.777);
    
    $("#employees_number").keyup(function(event){
        if(event.keyCode == 13){
            $("#employee_button").click();
        }
    });
    
   function CommaFormatted(amount) {
	var delimiter = ","; // replace comma if desired
	var a = amount.split('.',2)
	var d = a[1];
	var i = parseInt(a[0]);
	if(isNaN(i)) { return ''; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	var n = new String(i);
	var a = [];
	while(n.length > 3) {
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(delimiter);
	if(d.length < 1) { amount = n; }
	else { amount = n + '.' + d; }
	amount = minus + amount;
	return amount;
}
   
  /*  if(event.keyCode == 13){
        $("#employee_button).click();
    }
    */
    
    $("#employee_button").click(function() {
        var empl = $( "#employees_number" ).val();
        var num_regex = /^[1-9]\d*(\.\d+)?$/;
        if (!empl.match(num_regex)){
            $('#number_vText').text("* Syötä oikea arvo *"); // This Segment Displays The Validation Rule For a number
            $("#employees_number").focus();
        }
        else{
             $('#number_vText').text(" ");
            // Number of employees X 25 emails per day
            var emails = empl * 25;
            // 20% of these have attachments
            var attachments = emails * 0.2;
            // Minutes spent processing one email with attachment
            var minutes = emails * 6;
            // hours
            var hours = minutes / 60;
            // rate per hour
            var rate = 20;
            // total costs
            var cost = rate * hours;
            // saved hours
            var saved_hours = hours * 0.2;
            // saved costs
            var saved_costs = saved_hours * rate;
            // saved daily costs
            var saved_monthly = saved_hours * rate*21;
            // saved monthly costs
             var saved_annualy = saved_hours * rate*252;
            // saved monthly costs


            //$('#results').animateNumber({ number: myValue});
            $('#emailCount').animateNumber({ number: emails});
            $('#attachCount').animateNumber({ number: attachments});
            var decimal_hourCount = $('#hourCount').text();
                $({numberValue: 0}).animate({numberValue: hours}, {
                    duration: 500,
                    easing: 'linear',
                    step: function() {
                        $('#hourCount').text(Math.ceil(this.numberValue*10)/10);
                    }

                });
           /* $('#hourCount').animateNumber({ number: hours});*/                              
            $('#costCount').animateNumber({ number: cost});
            /*$('#saved_hoursCount').animateNumber({ number: saved_hours});*/
            
            var decimal_hours = $('#saved_hoursCount').text();
                $({numberValue: 0}).animate({numberValue: saved_hours}, {
                    duration: 500,
                    easing: 'linear',
                    step: function() {
                        $('#saved_hoursCount').text(Math.ceil(this.numberValue*10)/10);
                    }

                });
            $('#saved_costsCount').animateNumber({ number: saved_costs});
            $('#saved_euroMonthly').animateNumber({ number: saved_monthly});
            $('#saved_euroAnnualy').animateNumber({ number: saved_annualy});            
        }
        
    
    
});
    
});