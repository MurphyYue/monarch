$(function(){
	
	$("nav a").on("click",function(){
		$(this).addClass("active ac").siblings().removeClass("active ac");
		console.log($(this).index())
		
	})
	$("nav a").hover(function(){
		if($(this).hasClass('ac')){
			$(this).removeClass('active')
		}
	},function(){
		if($(this).hasClass('ac')){
			$(this).addClass('active')
		}
	})
	$("nav .active")
	.on("mouseover",function(){
		afterStyle.style({"width":0})
	});
	$(".banner ul li").each(function(){
		$("<li>").appendTo($(".banner ol"));
		$(".banner ol li").eq(0).addClass("ac")
	})
	var num=0
	$(".banner ol li").each(function(index){
		$(this).on({"click":function(){
			num=index;
			setPic(index);
		},"mouseenter":function(){
			clearInterval(timer);
		},"mouseleave":function(){
			start();
		}})
	})
	var oLi=$(".banner ol li")
	function setPic(obj){
		for(var i=0;i<oLi.length;i++){
			oLi[i].className="";
		}
		oLi[obj].className="ac"
		
		$(".banner ul").css({"transform":"translateX("+(-obj*100)+"vw)"})
	}
	//实现轮播
	function play(){
		num++;
		if(num>=oLi.length){
			num=0
		}
		setPic(num)
	}
	//实现自动轮播
	function start(){
		timer=setInterval(function(){
			play();
		},4000)
	}
	start();
	//鼠标移入下一张/上一张时取消自动轮播，点击时实现切换，移除后继续自动轮播
	$(".next").on({"mouseenter":function(){
		clearInterval(timer);
	},"click":function(){
		num++;
		if(num>=oLi.length){
			num=0
		}
		setPic(num)
	}})
	$(".next").on("mouseleave",function(){
		start()
	});
	$(".prev").on({"mouseenter":function(){
		clearInterval(timer);
	},"click":function(){
		num--;
		if(num<0){
			num=oLi.length-1
		}
		setPic(num)
	}})
	$(".prev").on("mouseleave",function(){
		start()
	})
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=20){
			$("header").addClass("mini");
			$(".ac").removeClass("active")
		}else{
			$("header").removeClass("mini")
			$(".ac").addClass(".active")
		}
	})
	
	
})
