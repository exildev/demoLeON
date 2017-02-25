var porcent = 0;
var time_limit = 1000;

function init_transition(hasta){
	i0_100(hasta, time_limit);
}

function i0_100(hasta, time_limit, cb){
	var stages = 6;
	var deg = (360*(hasta)/100)/(stages);
	for(var i = 0; i < stages; i++){
		$(".stage"+(i+1)).css({
			'transform': "rotate(" + (deg*(i+1)+45) + "deg)",
			'transition': 'transform ' + (time_limit)/1000 + 's'
		});
	}
	var id = window.setInterval(function (){
		
		if (porcent > 50){
			$(".stage"+stages).css({'z-index':1000});
		}
		
		porcent ++;
		if (porcent >= hasta){
			clearInterval(id);
			if (cb) cb();
		}
		$(".num").text(porcent);
	}, time_limit/(hasta-porcent));
}