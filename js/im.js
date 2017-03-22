
  //globals
  var but = document.createElement('button');
  var al = document.createElement('a');
  var agreen = document.createElement('a');
  var sgreen = document.createElement('span');
  var style = document.createElement('style');
  doe = document.querySelector('.field.hays-result-rate-value');
  daa = document.querySelector('.field.hays-result-title');
  debugger;

  function addStyles() {
  //create elem
  style.type = "text/css";
  //enter styles here:
  style.innerHTML = ".noscript {background-color:#fff;color:#000;}\n";
  style.innerHTML += "body {}\n";
  style.innerHTML += "input#jobTitleHome {color:#c2c1c1 !important; }\n";
  style.innerHTML += ".filter-toggle span {font-size:18px;}\n";
  style.innerHTML += "div#pageTop1.pageNo.pageCurrent {background-color:#fff; font-weight:500; color:#8a8b8d;font-size:18px;padding:3px;}\n";
  style.innerHTML += "#mainDiv { margin:0 auto; width:95%;}\n";
  style.innerHTML += "#search .hays-searchbox {margin:0;}\n";
  style.innerHTML += ".filter-toggle {background-color:#fff;font-weight:bold;margin:12px;width:90%;padding-bottom:10px;border-bottom:1px solid #bcbcbc;}\n";
  style.innerHTML += ".hays-search-header {padding:0;}\n";
  style.innerHTML += "main.pl-content {background-color:#f0f0f0;}\n";
  style.innerHTML += "#search .panel-layout .pl-canvas {background-color:#f0f0f0;}\n";
  style.innerHTML += ".hays-jobs .result-list.sponsored-jobs .result {padding-right:0 !important; border:0 !important; padding-left:0 !important; margin-left:0 !important; margin-top:0 !important; margin-bottom:0 !important;padding-top:18px !important;}\n";
  style.innerHTML += ".hays-jobs {margin:0;padding:0;}\n";
  style.innerHTML += ".hays-jobs .result-list {padding:0;}\n";
  style.innerHTML += "li.result.first.last {padding:0;width:100%;overflow:auto;}\n"
  style.innerHTML += ".result-list.sponsored-jobs {background-color:#fff !important;margin-top:0;border:1px solid #002776 !important; padding:0px;}\n";
  style.innerHTML += ".job-search-title {padding:0 12px !important;}\n";
  style.innerHTML += "p.value {margin-bottom:22px; color:808080 !important; font-weight:400;a}"
  style.innerHTML += ".hays-jobs .hays-result-sponsored {display:block; padding:5px 12px 5px 12px;margin:0; border:0;font-size:10px;line-height:18px;background-color:#002776;float:none !important;color:#fff !important;font-weight:normal;}\n";
  style.innerHTML += ".hays-jobs .hays-result-rate-value {margin-bottom:0;}\n";
  style.innerHTML += ".hays-jobs .hays-result-location {margin-bottom:0px; padding-left:12px;}\n";
  style.innerHTML += ".hays-jobs .hays-result-location .value {margin-left:5px;line-height:12px;font-size:12px;margin-bottom:5px;font-weight:400;}\n";
  style.innerHTML += "field hays-result-title  jobtitle tk-stl-title {margin-bottom:20px;}\n";
  style.innerHTML += ".hays-jobs .hays-result-description {margin:0; max-width:none; max-width:none; max-height:none;font-size:14px;vertical-align:middle;padding:0 12px !important;}\n";
  style.innerHTML += ".hays-jobs .job-search-title {margin-bottom:25px; width:75%;}\n";
  style.innerHTML += ".field.hays-result-rate-value {width:45%; padding-left:12px; line-height:14px;font-size:13px;}\n";
  style.innerHTML += ".hays-jobs .hays-result-title .value {margin-top:0 !important;}";
  style.innerHTML += ".hays-jobs .result-list .result { padding:0; margin:20px auto !important; border:1px solid #e6e6e6; padding-bottom:25px; padding-top:20px;}";
  style.innerHTML += ".hays-jobs ol.result-list {border:0; width:99%; margin:0 auto;}";
  style.innerHTML += ".hays-jobs .result-list .result.first {}";
  style.innerHTML += ".result-list.sponsored-jobs {}";
  style.innerHTML += ".butdetails {position:absolute; right:4%; bottom:25%; padding:9px 21px; background-color:#009fda; border:0; box-shadow:0px 0px 1px #0479a5;font-size:14px;line-height:24px; color:#fff;}";

  //append to head
  document.getElementsByTagName('head')[0].appendChild(style);
} 

addStyles();









function addCTA(element){
	var link = $(element).find('.job-search-title a').attr('href');
	$('<button class="butdetails">View details<a class="adeet" href="'+link+'"></button>').appendTo(element);
          
             
}

function addClass(){
	
    $('.hays-jobs .result-list .result').each(function(i){
		  
        if($(this).hasClass('changes-done')){
			     
           console.log('ok')
		    

        } else 		{	
      $(this).addClass('regular');

			  if($(this).closest('.result-list').hasClass('sponsored-jobs')) {

          remove = document.querySelectorAll('div.job-search-title span');
         


				  console.log('SPONSOR --> '+ $(this).find('.job-search-title').text().trim());

			} else {

				 console.log('--> '+ $(this).find('.job-search-title').text().trim());

			}

			addCTA($(this));
			// run your functions
		
    }//else
		
	});

} addClass();


$(document).ajaxComplete(function() {
	
   setTimeout(function(){
		  console.log($('.hays-jobs .result-list .result').length);
		  addClass();
	
   }, 150);
	
});