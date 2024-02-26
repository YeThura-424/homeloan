$(document).ready(function(){
	
	$('#btn').click(function(){
		$('#result').show();
		var principal1 = parseInt($('#amount').val());
		var rate = parseInt($('#rate').val());
		var term = parseInt($('#term').val());
		var r = ((rate/12)/100);
		var n = (term*12);
		var first = Math.pow(1+r, n);
		var second = r*first;
		var third = first - 1; 
		var fourth = second/third;
		var m = parseInt(principal1*fourth);
		var interest1 = Math.round((principal1*r));
		$('#a').html(m);
		$('.nYear').html(term);
		$('#b').html();
		$('#c').html(principal1+" MMK");
		$('#d').html(rate+" %");
		$('#e').html(term+" years");
		// var principal2 = ((principal1-m)+interest1);
		// var interest2 = Math.round((principal2*r));
		// var principal3 = ((principal2-m)+interest2);
		// var interest3 = Math.round((principal3*r));
		var number = 1; var  totalInterest = 0; var principal2 = principal1;
			for (var i = 1; i <= n; i++) {
				var result = `<tr><td>Month#${number++}</td><td>${principal1} MMK</td><td>${interest1} MMK</td><td>${m} MMK</td></tr>`;
				$('#loanResult').append(result);
				principal1 = ((principal1-m)+interest1);
				interest1 = Math.round(principal1*r);
				totalInterest= totalInterest + interest1 ;
				// console.log("totalInterest", totalInterest);
				$('#b').html(totalInterest);
			}
	})
})
