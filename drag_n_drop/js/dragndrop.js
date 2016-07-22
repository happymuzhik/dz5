;(function(window, document, undefined){

	var random = function(min,max){	return Math.random() * (max - min) + min; };

	var create_block_button = document.getElementById('create_block_button'),
		container = document.getElementById('content'),
		hex = ['0','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];

	create_block_button.addEventListener('click', function(){
		var block = document.createElement('div'), color = '#', is_dragging = false, offsetX = 0, offsetY = 0;

		block.addEventListener('mousedown', function(e){
			is_dragging = true;
			offsetX = e.offsetX;
			offsetY = e.offsetY;
		});
		block.addEventListener('mousemove', function(e){
			if(is_dragging){
				e.target.style.top = (e.clientY - offsetY) + 'px';
				e.target.style.left = (e.clientX - offsetX) + 'px';
			}
		});
		block.addEventListener('mouseup', function(e){
			is_dragging = false;
		});

		block.classList.add('block');
		block.style.top = random(0,100) + '%';
		block.style.left = random(0,100) + '%';
		block.style.height = random(0,300) + 'px';
		block.style.width = random(0,300) + 'px';

		for (var i = 0; i < 6; i++) {
			color += hex[Math.round(random(0,15))];
		};		
		block.style.backgroundColor = color;

		container.appendChild(block);
	});
})(window, document);