$(function() {

	// banner
	$.ajax({
		url : REQUEST_URL.GETBANNER,
		type : 'post',
		async : false,
		success : function(data) {
			//			$.responceHandle(data);
			if (data.status == 0) {
				var list = data.result;
				for (var i = 0; i < list.length; i++) {
					if (i == 0) {
						$("#indicator").append("<li data-target='#myCarousel' data-slide-to='0' class='active'></li>");
						$("#inner").append("<div class='item active'><img src=" + list[i].url + " alt=''></div>");
					} else {
						$("#indicator").append("<li data-target='#myCarousel' data-slide-to='" + i + "'></li>");
						$("#inner").append("<div class='item'><img src=" + list[i].url + " alt=''></div>");
					}
				}
			} else {

			}

		},
	});

	/*图片轮播*/
	$("#myCarousel").carousel({
		interval : 2000
	});

	/*导航跳转效果插件*/
	$('.nav').singlePageNav({
		offset : 70
	});
	/*小屏幕导航点击关闭菜单*/
	$('.navbar-collapse a').click(function() {
		$('.navbar-collapse').collapse('hide');
	});
	new WOW().init();

	$("#submit").click(function() {
		if ($('#username').val().trim() == "") {
			toastr.warning("请填写用户名");
			return false;
		} else if ($('#content').val().trim() == "") {
			toastr.warning("请填写内容");
			return false;
		} else {
			var param = {
				"username" : $("#username").val(),
				"contact" : $("#contact").val(),
				"content" : $("#content").val()
			};
			$.ajax({
				url : REQUEST_URL.SUBMITOPINIONS,
				data : stringify(param),
				dataType : "json",
				contentType : "application/json",
				type : 'post',
				async : false,
				success : function(data) {
					if (data.status == 0) {
						toastr.success("提交成功", "SUCCESS");
						setTimeout(function() {
							window.location.reload();
						}, 3000);
					} else {
						toastr.error("提是失败", "FAIL");
					}

				},
			});
		}
	});

});