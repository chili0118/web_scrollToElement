$("a").each(function (index, element) {

    console.log("編號 : " + index);

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");
    var offsetTop = $(this).attr("data-st-offset");

    console.log("目標 : " + target);
    console.log("時間 : " + duration);
    console.log("位移 : " + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;

    if (offsetTop) top -= offsetTop;


    console.log("上方 : "+ top);

    $(this).click(function (e) { 
        e.preventDefault();

        // stop() 停止當前所有動畫
        $("html").stop().animate({
            scrollTop: top

            // parseInt將文字轉為數字(寫在雙引號中JS會認為是一串文字非數字，所以需家此轉換!)
        },parseInt(duration));
    }); 
});


// 使用者使用滑鼠滾動時，停止所有動畫!
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow");
arrow.fadeOut();

$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    console.log("視窗的上方 : " + windowTop);

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime);

    // console.log(arrowTop);
    // console.log(arrowTime);

    // 如果是綴大於等於箭頭上方就淡入
    if(windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
    // 否則就淡出
    else arrow.fadeOut(arrowTimeInt);
});