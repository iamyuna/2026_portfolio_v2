$(document).on('click', 'a[href="#none"]', function(e) {
	e.preventDefault();
});

//기본js
function startJs(){

	$(document).on('click', 'a[href="#none"]', function(e) {e.preventDefault()});

	if($('html').is('.ie67, .ie7, .ie8, .ie9')) {
		$('div.ie_alert_text').show().html('현재 사이트는 IE9 미만의 하위브라우저를 지원하지 않습니다. <br />브라우저를 최신 버전으로 <b>업데이트</b>해 주세요.');
	}

	WebFont.load({google: {families: ['Noto Sans KR', 'Montserrat']}});
	

}
$(function(){
	startJs();
});

 