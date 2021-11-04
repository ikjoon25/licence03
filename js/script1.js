$('#nav>ul>li').hover(function(){
    $(this).find('ul').stop().slideDown();
},function(){
    $(this).find('ul').stop().slideUp();
});

var banner = $('#banner>ul>li');
var current = 0;

function move(tg, start, end){
    tg.css({'opacity':start}).stop().animate({opacity:end},500)
}

setInterval(function(){
    var prev = banner.eq(current);
    current++;
    move(prev, 1, 0);
    if(current ==banner.size()){
        current = 0;
    }
    var next = banner.eq(current);
    move(next, 0, 1);
},2000);