// 버튼0을 누르면 
// -모든 버튼에 붙은 orange 클래스명 제거
// -버튼 0에 orange 클래스명 추가
// -모든 div에 붙은 show 클래스명 제거
// -div0에 show 클래스명 추가 

var 버튼 = $('.tab-button');

for(let i=0; i<버튼.length; i++) {
    버튼.eq(i).on("click", function(){
        버튼.removeClass('orange');
        버튼.eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}
