$("a").each(function (index, element) {
    console.log("編號 : " + index);
    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");
    console.log("目標 : " + target);
    console.log("時間 : " + duration);

    var offset = $("#" + target).offset();
    var top = offset.top;
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