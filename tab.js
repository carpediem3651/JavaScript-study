// 버튼0을 누르면 
// -모든 버튼에 붙은 orange 클래스명 제거
// -버튼 0에 orange 클래스명 추가
// -모든 div에 붙은 show 클래스명 제거
// -div0에 show 클래스명 추가 
$('.list').click(function(e){
    탭열기(e.target.dataset.id)
});

var 버튼 = $('.tab-button');

function 탭열기(숫자) {
    버튼.removeClass('orange');
    버튼.eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').removeClass('show');
}
