/* _optimizely_evaluate=force */
function checkifbodyexist() {
	//globals
	var agreen = document.createElement('a');
  	var sgreen = document.createElement('span');
  	var daa = document.querySelector('.field.hays-result-title');
  	var remove = null;
  	var x  = $('.field.hays-result-title .new-job');

 if (document.body === null) {
   setTimeout(function() {
     checkifbodyexist();
   }, 10);
 } else {
   document.body.style.opacity = 0;
 }
}
checkifbodyexist();
/* _optimizely_evaluate=safe */


(function(){
	var $ = window.jQuery;
	var Hays01 = {
	    init: function(data) {

	        this.mainCss(true);
	        this.addClass();
	        this.ajaxComplete();
	        this.addNew();

	    },
	    mainCss: function(applyCss){
	        if(applyCss){
	        		var style = document.createElement('style');
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
					  style.innerHTML += ".hays-jobs .result-list.sponsored-jobs .result {padding-right:0 !important; border:0 !important; padding-left:0 !important; margin-left:0 !important; margin-top:0 !important; margin-bottom:0 !important;padding-top:15px !important;}\n";
					  style.innerHTML += ".hays-jobs {margin:0;padding:0;}\n";
					  style.innerHTML += ".hays-jobs .result-list {padding:0;}\n";
					  style.innerHTML += "li.result.first.last {padding:0;width:100%;overflow:auto;}\n"
					  style.innerHTML += ".result-list.sponsored-jobs {background-color:#fff !important;margin-top:0;border:1px solid #002776 !important; padding:0px;}\n";
					  style.innerHTML += ".job-search-title {padding:0 12px !important;}\n";
					  style.innerHTML += "p.value {margin-bottom:22px; color:808080 !important; font-weight:400;font-size:14px;line-height:16px;}"
					  style.innerHTML += ".hays-jobs .hays-result-sponsored {width:20%;margin-left:12px!important; text-align:center; margin-bottom:15px !important; display:block; padding:5px 12px 5px 12px;margin:0; border:0;font-size:10px;line-height:20px;background-color:#002776;float:none !important;color:#fff !important;font-weight:normal;cursor:pointer;letter-spacing:.25px;}\n";
					  style.innerHTML += ".hays-jobs .hays-result-rate-value {margin-bottom:0;}\n";
					  style.innerHTML += ".hays-jobs .hays-result-location {margin-bottom:0px; padding-left:12px;}\n";
					  style.innerHTML += ".hays-jobs .hays-result-location .value {margin-left:5px;line-height:16px;font-size:14px;margin-bottom:5px;font-weight:400;color:#808080 !important;}\n";
					  style.innerHTML += "field hays-result-title  jobtitle tk-stl-title {margin-bottom:20px;}\n";
					  style.innerHTML += ".hays-jobs .hays-result-description {margin:0; max-width:none; max-width:none; max-height:none;font-size:14px;vertical-align:middle;padding:0 12px !important;}\n";
					  style.innerHTML += ".hays-jobs .job-search-title {margin-bottom:25px; display:inline-block;}\n";
					  style.innerHTML += ".field.hays-result-rate-value {width:45%; padding-left:12px; line-height:14px;font-size:13px;}\n";
					  style.innerHTML += ".hays-jobs .hays-result-title .value {margin-top:0 !important; margin-right:1em;}";
					  style.innerHTML += ".hays-jobs .result-list .result { padding:0; margin:20px auto !important; border:1px solid #e6e6e6; padding-bottom:0; padding-top:20px; background-color:#ffffff;}";
					  style.innerHTML += ".hays-jobs ol.result-list {border:0; width:100%; margin:0 auto;background-color:#f0f0f0;}";
					  style.innerHTML += ".hays-jobs .result-list .result.first {}";
					  style.innerHTML += ".result-list.sponsored-jobs {}";
					  style.innerHTML += ".hays-jobs .result-list .result:last-child {border-bottom: 1px solid #d2d2d2 !important;}";
					  style.innerHTML += ".butdetails {position: absolute; right: 4%; bottom: 27%; padding: 10px 28px; background-color: rgb(0, 159, 218); border: 0px; box-shadow: rgb(4, 121, 165) 0px 0px 1px; color: #fff !important;font-size:15px;line-height:22px;vertical-align:middle;cursor:pointer;letter-spacing:.25px;}";
			style.innerHTML += ".hays-jobs .hays-result-location:before, .hays-jobs .hays-result-location .before {color: #313131;}";
			style.innerHTML += ".tk-stl-description .value {color: #808080 !important;line-height:18px !important;font-size: 14px;}";
			style.innerHTML += ".hays-jobs.hays-result-title .value {line-height:1.5em; margin-bottom:.75em;display:block; margin-right:2.5em;vertical-align:bottom;}";
			style.innerHTML += ".field.hays-result-title.new-job {float:left !important;}"
			style.innerHTML += ".hays-jobs.new-job + span {position:inherit;}";
			style.innerHTML += ".hays-jobs .new-job + span {position:initial !important;}"
			style.innerHTML += ".hays-jobs .hays-result-location:before,.hays-jobs .hays-result-location .before {font-size:1em !important;vertical-align:baseline;}";
			style.innerHTML += ".panel-layout.pl-content {background-color: #f0f0f0;}";
			style.innerHTML += "div#pageTop1.pageNo.pageCurrent {background-color:#f0f0f0;}";
			style.innerHTML += ".hays-jobs {background-color:#fff;}";
			style.innerHTML += ".panel-layout .pl-content {background-color:#f0f0f0 !important;}";	
			style.innerHTML += ".hays-jobs a.butdetails {position: absolute;right: 4%;bottom: 13%;padding: 10px 28px;}";

			style.innerHTML += ".hays-jobs .sponsored-jobs a.butdetails {		 position: absolute;right: 4%;bottom: 27%;padding: 10px 28px;background-color: rgb(0, 159, 218); border: 0px;box-shadow: rgb(4, 121, 165) 0px 0px 1px;color: #fff !important;font-size: 15px;line-height: 22px;vertical-align: middle;cursor: pointer;letter-spacing: .25px;}";
			style.innerHTML += "#search .pageNo {background-color:#f0f0f0 !important;font-weight: 500;color: #8a8b8d;font-size: 18px;padding: 3px;}";


					  //append to head
					  document.getElementsByTagName('head')[0].appendChild(style);
	        }
	    },
	    addCTA: function(e){
	    	if(e !== undefined && e !== null){
	    		
	    	}
			},
			hasClass: function(el, cls) {
			  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
			},
			addClass: function(){


			  document.querySelectorAll('.hays-jobs .result-list .result').forEach(function(el){
				  if (hasClass(el, "changes-done")) {
			    	// CTA HAS BEEN ADDED ALREADY'.l..s
			    } else {
			      el.className += ' changes-done';

			      var link = el.querySelector('.job-search-title a');

			      var a = document.createElement('a');
						var linkText = document.createTextNode("View details");
						a.appendChild(linkText);
						a.title = "View details";
						a.className = 'butdetails';
						a.href = link.href;


						el.querySelector('.field.hays-result-rate-value').appendChild(a);

			    }
				});
			},
			addNew:function() {
				debugger;
				//sponsored and new have no links
				document.querySelectorAll('.job-search-title span').forEach(function(el){
				  if (hasClass(el, "changes-done")) {
			    	 
			    } else {
			      //add class here too
	              el.className = 'agreen';
	              el.textContent = 'NEW';
	              el.style.display = 'inline-block';
                  el.style.fontSize = '12px';
                  el.style.lineHeight = '18px';
                  el.style.textAlign = 'center';
                  el.style.verticalAlign = 'bottom';
                  el.style.fontSize = '12px';
                  el.style.lineHeight = '18px';
                  el.style.color = '#afc350';
                  el.style.backgroundColor = '#ffffff';
                  el.style.border = '1px solid rgb(175, 195, 80)';
                  el.style.padding = '0 3px';


			}	



			});
		},	



	    ajaxComplete: function() {
	      $(document).ajaxComplete(function() {
					setTimeout(function(){
						console.log($('.hays-jobs .result-list .result').length)
						Hays01.addClass();
					}, 150);
					
				});
	    }
	};

    

	$(document).ready(function() {
		// try{

      Hays01.init();

      setTimeout(function(){
        document.body.style.opacity = 1;  
      }, 300);


    // } catch(err){
    //   document.body.style.opacity = 1;
    //   console.log('Something happen: '+ err);
    // }

	});

})();