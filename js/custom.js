/* 控制台输出 */
if(window.console) {
	var cons = console; 
	if(cons) { 
		cons.group("O(∩_∩)O哈喽！");
		cons.info("这位看代码的童鞋，不如留下你的友链来一起玩耍吧！8==D https://caokuii.github.io/friends/"); 
		cons.log("%cCaokuii's Blog", "background-image: linear-gradient(#063053, #395873, #5c7c99);font-size: 2rem;");
		cons.info("==============================此乃分界线==============================");
		cons.log("  █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗\n▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝\n▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗\n░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║\n░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝\n ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝\n ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░\n ░ ░    ░░░ ░ ░ ░        ░ ░░ ░\n          ░     ░ ░      ░  ░\n")
		cons.groupEnd();
	} 
}

/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array("人生", "自是", "有缘", "相逢", "未必", "偶然");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
		/* 点击频率，点击几次就换文字 */
		var frequency = 2;
		if (a_click % frequency === 0) {
			
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": randomColor(),
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
			
		}
	a_click ++;
		
    });
});

/* 轮播背景图片 */
$(function () {
	$.backstretch([
		"/images/background/plane.jpg",
		"/images/background/UmimachiDiary.jpg",
		"/images/background/La La Land.jpg",
		"/images/background/SpideMan3.jpg",
		"/images/background/Spirited Away.jpg",
		"/images/background/Suzume.jpg",
		"/images/background/The Grand Budapest Hotel.jpg",
		"/images/background/Totoro.jpg",
		"/images/background/Up.jpg",
		"/images/background/Your Name.jpg",
		"/images/background/YiYi.jpg",
		"/images/background/TheLifeOf_PI2.jpg",
		"/images/background/Beautiful Life.png",
		"/images/background/Chungking Express.jpg",
		"/images/background/Dust in the Wind.jpg",
		"/images/background/Forrest Gump.jpg",
		"/images/background/GodFather.jpg",
		"/images/background/Kiki's Delivery Service.jpg",
		"/images/background/Love Letter.jpg",
		"/images/background/Mr. Donkey.jpg",
	], { duration: 60000, fade: 1500 });
});

/* 拉姆蕾姆回到顶部或底部按钮 */
$(function() {
	$("#lamu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
	$("#leimu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
});

/* 后置加载页面组件的背景图片 */
// $(function() {
// 	/* 首页头像div加载GitHub Chart作为背景图片 */
// 	$("div.home-avatar").attr('style', "background: url(https://ghchart.rshah.org/FFA500/lewky);background-repeat: no-repeat;background-position: center;background-size: auto 7.5rem;");

// 	/* 评论框加载背景图片 */
// 	$(".v[data-class=v] .veditor").attr('style', "background-image: url(" + $cdnPrefix + "/images/common/valinebg.webp) !important;");
// });

function getCurrentDateString() {
	var now = new Date();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	return "" + now.getFullYear() + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day) + (hour < 10 ? "0" + hour : hour);
}

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
// window.onload = function() {
//   var OriginTitile = document.title;
//   var titleTime;
//   document.addEventListener('visibilitychange', function() {
//     if(document.hidden) {
//       $('[rel="icon"]').attr('href', "/failure.ico");
//       $('[rel="shortcut icon"]').attr('href', "/failure.ico");
//       document.title = '喔唷，崩溃啦！';
//       clearTimeout(titleTime);
//     } else {
//       $('[rel="icon"]').attr('href', "/favicon-32x32.png");
//       $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
//       document.title = '咦，页面又好了！';
//       titleTime = setTimeout(function() {
//         document.title = OriginTitile;
//       }, 2000);
// 	}
//   });
// }

/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修改这里的起始时间 */
    let startTime = new Date('01/10/2024 12:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();