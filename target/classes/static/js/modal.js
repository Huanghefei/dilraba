
;(function($) {
	$.tips = function(options) {
		var defaults = {
			title : "提示",
			content : "链接服务器失败！",
			btn : 1,
			class : "",
			callback : function() {}
		};
		var settings = $.extend(defaults, options);
		var str = "<div class='modal fade " + settings.class + "' id='tips' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
			"<div class='modal-dialog'>" +
			"<div class='modal-content'>" +
			"<div class='modal-header'>" +
			"<button type='button' class='close' data-dismiss='modal' aria-hidden='true'> &times;  </button>" +
			"<h4 class='modal-title' id='myModalLabel'>提示 </h4>" +
			" </div>" +
			" <div class='modal-body'>" +
			"</div>" +
			" <div class='modal-footer'>" +
			"<button type='button' class='btn btn-default cancel_btn' data-dismiss='modal'>取消 </button>" +
			" <button type='button' class='btn btn-primary confirm_btn' data-dismiss='modal'>确认 </button>" +
			" </div>" +
			"</div>" +
			"</div>" +
			"</div>";
		if ($("#tips").length < 1) {
			$('body').append(str);
		}
		var tip = $('#tips')
		tip.modal('show');
		tip.find('.modal-dialog').css({
			'position' : 'absolute',
			'width' : '400px',
			'top' : '-20px',
			'left' : 0,
			'right' : 0,
			'bottom' : 0,
			'margin' : 'auto',
			'height' : '165px'
		});
		tip.find('#myModalLabel').html(settings.title);
		tip.find('.modal-body').html(settings.content);
		tip.find('.modal-header').css('padding', '13px');
		tip.find('.modal-footer').css('padding', '13px');
		tip.find('.btn').css('padding', '4px 12px');
		if (settings.btn < 2) {
			tip.find('.confirm_btn').hide();
			tip.find('.cancel_btn').html('关闭');
		}
	}
})(jQuery);
;(function($) {
	$.tipsNEW = function(options) {
		var defaults = {
			title : "下载地址",
			content : "链接服务器失败！",
			btn : 1,
			class : "",
			callback : function() {}
		};
		var settings = $.extend(defaults, options);
		var str = "<div class='modal fade " + settings.class + "' id='tips' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
			"<div class='modal-dialog'>" +
			"<div class='modal-content'>" +
			"<div class='modal-header'>" +
			"<button type='button' class='close' data-dismiss='modal' aria-hidden='true'> &times;  </button>" +
			"<h4 class='modal-title' id='myModalLabel'>下载地址 </h4>" +
			" </div>" +
			" <div class='modal-body'>" +
			"</div>" +
			" <div class='modal-footer'>" +
			"<button type='button' class='btn btn-default cancel_btn' data-dismiss='modal'>取消 </button>" +
			" <button type='button' class='btn btn-primary confirm_btn' data-dismiss='modal'>确认 </button>" +
			" </div>" +
			"</div>" +
			"</div>" +
			"</div>";
		if ($("#tips").length < 1) {
			$('body').append(str);
		}
		var tip = $('#tips')
		tip.modal('show');
		tip.find('.modal-dialog').css({
			'position' : 'absolute',
			'width' : '700px',
			'top' : '-20px',
			'left' : 0,
			'right' : 0,
			'bottom' : 0,
			'margin' : 'auto',
			'height' : '165px'
		});
		tip.find('#myModalLabel').html(settings.title);
		tip.find('.modal-body').html(settings.content);
		tip.find('.modal-header').css('padding', '13px');
		tip.find('.modal-footer').css('padding', '13px');
		tip.find('.btn').css('padding', '4px 12px');
		if (settings.btn < 2) {
			tip.find('.confirm_btn').hide();
			tip.find('.cancel_btn').html('关闭');
		}
	}
})(jQuery);