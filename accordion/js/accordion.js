;(function(window, document, undefined){
	var accordion = document.querySelector('#accordion');
	accordion.addEventListener('click', function(e){
		var _this = e.target;
		if(_this.classList.contains('accordion-block')||_this.classList.contains('accordion-header')){
			if (_this.classList.contains('accordion-header')){
				_this = _this.parentNode;
			}
			var active_arr = document.querySelectorAll('#accordion .accordion-block.active'),
				state = _this.classList.contains('active'),
				h = '';
			for (var i = 0; i < active_arr.length; i++) {
				active_arr[i].classList.remove('active');
				active_arr[i].style.height = '35px';
			};
			if(!state){
				h = (_this.querySelectorAll('.accordion-header')[0].offsetHeight+_this.querySelectorAll('.accordion-list')[0].offsetHeight)+'px';
				_this.classList.add('active');
				_this.style.height = h;
			}
		}		
	});
})(window, document);