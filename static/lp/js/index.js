(function($) {
$(window).load(function() {
	page.init();
});
	
var page = {
	sliderElement:null,
	init:function() {
		var ww = $(window).width(); var cw = $('.main-container').css('min-width');
		switch(cw) {
			case '0px':
			var cw = 0.75 * ww - 20;
			$('.carousel').css('width',cw); $('.carousel').find('.objectsList').css('width',cw); $('.carousel').find('.objectsList li').css('width',cw/3); 
		}
		page.sliderElement = $('.slider').slider();
		page.set();
		$(window).on('resize',page.set);
	},
	set:function() {
		var ww = $(window).width();
		var cw = $('.main-container').css('min-width');
		switch(cw) {
			case '990px':
			$('.hd-labels').width(210).height(106).css('margin','25px 0 0 0');
			$('.hd-ribbon').width(136).height(180).css('margin-right','').css('margin-top','');
			$('.top-nav').css('display','block').css('left',0).css('top','110px');
			$('.form-content').find('.check-field').find('label').css('width','');
			break;
			case '798px':
			$('.hd-labels').width(210).height(106).css('margin','25px 0 0 0');
			$('.hd-ribbon').width(136).height(180).css('margin-right','').css('margin-top','');
			$('.top-nav').css('display','block').css('left',0).css('top','110px');
			$('.form-content').find('.check-field').find('label').css('width','');
			break;
			case '0px':
			var w1 = 0.55 * ww; if(w1 > 210) w1 = 210;
			var w2 = 0.4 * ww; if(w2 > 136) w2 = 136; var h2 = 1.3236 * w2;
			$('.hd-labels').width(w1).height(0.5048 * w1).css('margin-left', (ww - w1 - w2) / 2 - 10 + 'px').css('margin-top',h2 / 4 + 'px');
			$('.hd-ribbon').width(w2).height(h2).css('margin-right', (ww - w1 - w2) / 2 - 10 + 'px');
			$('.top-nav').css('display','none');
			var field = $('.form-content').find('.check-field');
			field.find('label').css('width',field.innerWidth() - field.find('input').width() - 10 + 'px');			
			$('.menu').off('click').on('click',page.menu.toggle);
			break;
		}
		page.sliderElement.slider('reset');
	},
	menu: {
		toggle:function() {
			var $this = $(this); var nav = $('.top-nav');
			if(nav.is(':visible')) nav.css('display','none');
			else nav.css('left',0).css('top',$this.position().top + $this.outerHeight()).css('display','block');
		}
	}
};
$.fn.slider = function( method ) {
	if ( slider[method] ) return slider[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	else if ( typeof method === 'object' || ! method ) return slider.init.apply( this, arguments );
    else $.error( 'Method ' +  method + ' is not found on jQuery.schedule.' );  
};
var slider = {
	init:function(options) {
		this.options = $.extend({},options); var list = this.find('ul');
		this.options.count = list.find('li').length; this.options.change = true; this.options.images = [];
		var panel = this; list.find('li').each(function(index) { panel.options.images[index] = $(this); $(this).css('left',index * 175 + 'px'); });
		this.find('.prev').click($.proxy(slider.prev,this));		
		this.find('.next').click($.proxy(slider.next,this));
		return this;
	},
	prev:function() {
		if(!this.options.change) return; this.options.change = false;
		switch($('.main-container').css('min-width')) {
			case '990px': var sw = 175; var v = 5; break;
			case '798px': var sw = 175; var v = 3; break;
			case '0px': var sw = 175; var v = $(window).width() >= 600 ? 2 : 1; break;
		}
		var panel = this; var list = this.find('ul'); 
		for(var i = 0; i < this.options.count; i++) {
			var l = this.options.images[i].position().left;
			if( i < this.options.count - 1) this.options.images[i].animate({left:l - sw},600);
			else this.options.images[i].animate({left:l - sw},600,'swing', function() {
				panel.options.change = true
				slider.shift.call(panel,0);
				panel.options.images[panel.options.count - 1].css('left', (panel.options.count - 1) * 175 + 'px');
			});
		}
	},
	next:function() {
		if(!this.options.change) return; this.options.change = false;
		switch($('.main-container').css('min-width')) {
			case '990px': var sw = 175; var v = 5; break;
			case '798px': var sw = 175; var v = 3; break;
			case '0px': var sw = 175; var v = $(window).width() >= 600 ? 2 : 1; break;
		}
		slider.shift.call(this,1);
		this.options.images[0].css('left', -sw + 'px');
		var panel = this; var list = this.find('ul'); 
		for(var i = this.options.count - 1; i >= 0; i--) {
			var l = this.options.images[i].position().left;
			if( i > 0) this.options.images[i].animate({left:l + sw},600);
			else this.options.images[i].animate({left:l + sw},600,'swing', function() {	panel.options.change = true });
		}
	},
	shift:function(d) {
		switch(d) {
			case 0:
			var t = this.options.images[0];
			for(var x = 1; x < this.options.count; x++) this.options.images[x - 1] = this.options.images[x];
			this.options.images[this.options.count - 1] = t; break;
			case 1:
			var t = this.options.images[this.options.count - 1];
			for(var x = this.options.count - 2; x >= 0; x--) this.options.images[x + 1] = this.options.images[x];
			this.options.images[0] = t; break;
		}
	},
	reset:function() {
		switch($('.main-container').css('min-width')) {
			case '990px': this.find('ul').css('width','865px');
			var s = $('.slider'); s.css('margin-left',''); break;
			case '798px':
			this.find('ul').css('width','505px');
			var s = $('.slider'); s.css('margin-left',(s.width() - s.find('ul').width() - 70) / 2 + 'px'); break;
			case '0px':
			if($(window).width() >= 600) var sw = 340; else var sw = 165; this.find('ul').css('width', sw + 'px');
			var s = $('.slider'); s.css('margin-left',($(window).width() - s.find('ul').outerWidth() - 70) / 2 + 'px'); break;
		}

	}
};	
})(jQuery);