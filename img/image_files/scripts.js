$(function(){
	var win_width = $(window).width();
	if(win_width > 768){
		$('#subnav').mouseover(function(){
			// delay slide to make sure of intention
			var timer = setTimeout(function(){
					$('ul.children').slideDown(400);	
			}, 200);
			// clear timeout and close
    		$('#subnav').mouseleave(function(){
    			clearTimeout(timer);
    			$('ul.children').slideUp(300);
    		});
		});
		
		//// animation ///////////
		
				
		var num_targets = $('.target').length;
		var height = (($(window).height())/4)*3;
		
		function bf_animate(){
			for(var i=0; i<num_targets; i++){ // loop through all .target elements
				var num = '.target'+[i]; // label all elements
				var from_top = $(num).offset(); // set offset to variable
				if(($(window).scrollTop()+height) > from_top.top){ // check distance from top
					
					var row_num = num+' .row_num'; // set row_num variable
					var left = num+' .left';       // set left variable
					var right = num+' .right';     // set right variable
					$(row_num).fadeIn(400);        // fade in row number
					$(left).animate({              // animate left side elements into screen
						left: '0px',        
						opacity: '1'
					}, 600);
					$(right).animate({             // animate right side elements into screen
						left: '0px',
						opacity: 1
					}, 600);
				}
			}
		}
		bf_animate();		
		
		$(window).scroll(function() {
			bf_animate();			
		});
		
		
		
		
		//////////////////////
	}
	
	/// sub nav slide down menu
	$('.subnav-menu-button').click(function(){
		console.log('test');
		$('li.hide-for-mobile').slideToggle(400);
		return false;
	});
});
