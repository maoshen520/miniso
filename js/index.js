$(function(){
	// $('.icon-list').on('mouseover',function(){
	// 	if($(this).hasClass('icon-active')){
	// 		return
	// 	}
	// 	$(this).addClass('icon-active').siblings().removeClass('icon-active');
		
		
	// })
	
	$('.coll').on('click',function(){
		$('.m-box-content').css({
			display:'block'
		})

		$('.coll').css({
			display:'none'
		})
	})
	
	$('.close-img').on('click',function(){
		$('.m-box-content').css({
			display:'none'
		})
		$('.coll').css({
			display:'block'
		})
		
		
	})


	//给优选好品列表添加事件
	$('.icon-list').on('mouseover',function(){
		var $list = $(this);
		console.log('list===>',$list)


		if($list.hasClass('icon-active')){
			return;
		}

		$(this).addClass('icon-active').siblings().removeClass('icon-active');
		// $('icon-active').removeClass('icon-active');

		// $list.addClass('icon-active')

		//清除上一个的数据
		$('.row-content').empty();
		fn()		
	})

	function fn(){
		//获取当前含有激活类名icon-active的商品类型
		var currentType = $('.icon-active').data('type');
		console.log('currentType ==> ', currentType);

		//根据当前商品类型获取商品数据
		var currentData = data[currentType];
		console.log('currentData ==> ', currentData);

		// console.log('currentData.length ==> ', currentData.length);

		for (var i = 0; i < currentData.length; i++) {
			var item = $(`<div class="col-lg-3 col-md-3 col-6 wow fadeInUp">
						<div class="pro-content">
							<div>
								<img class="d-block w-100" src="${currentData[i].img}" alt="">
							</div>
							<h3 class="pro-content-h3 text-center my-4">${currentData[i].title}</h3>
							<div class="text-center pro-info">
							${currentData[i].text}
								
							</div>

						</div>
					</div>`);				
			$('.row-content').append(item);		
		}
	}
	fn();	

	



	
	
})