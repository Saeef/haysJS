var $ = window.jQuery;

/* _optimizely_evaluate=force */
function checkifbodyexist() {
    //globals
    var agreen = document.createElement('a');
    var sgreen = document.createElement('span');
    var daa = document.querySelector('.field.hays-result-title');
    var remove = null;
    var x = $('.field.hays-result-title .new-job');
    

    if (document.body === null) {
        setTimeout(function() {
            checkifbodyexist();
        }, 10);
    } else {
        //document.body.style.opacity = 0;
    }
}
checkifbodyexist();
/* _optimizely_evaluate=safe */


(function() {
    var $ = window.jQuery;
    var Hays01 = {
        init: function(data) {

            this.mainCss(true);
            this.addClass();
            this.ajaxComplete();
            this.attachToP();

        },
        mainCss: function(applyCss) {
            if (applyCss) {
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
                style.innerHTML += "li.result.first.last {padding:0;width:100%;overflow:auto;}\n";
                style.innerHTML += ".result-list.sponsored-jobs {background-color:#fff !important;margin-top:0;border:1px solid #002776 !important; padding:0px;}\n";
                style.innerHTML += ".job-search-title {padding:0 12px !important;}\n";
                style.innerHTML += "p.value {margin-bottom:22px; color:808080 !important; font-weight:400;font-size:14px;line-height:16px;}";
                style.innerHTML += ".hays-jobs .hays-result-sponsored {width:20%;margin-left:12px!important; text-align:center; margin-bottom:15px !important; display:block; padding:5px 12px 5px 12px;margin:0; border:0;font-size:10px;line-height:20px;background-color:#002776;float:none !important;color:#fff !important;font-weight:normal;cursor:pointer;letter-spacing:.25px;}\n";
                style.innerHTML += ".hays-jobs .hays-result-rate-value {margin-bottom:0;}\n";
                style.innerHTML += ".hays-jobs .hays-result-location {margin-bottom:0px; padding-left:12px;font-size:15px;}\n";
                style.innerHTML += ".hays-jobs .hays-result-location .value {margin-left:5px;line-height:16px;font-size:14px;margin-bottom:5px;font-weight:400;color:#808080 !important;}\n";
                style.innerHTML += "field hays-result-title  jobtitle tk-stl-title {margin-bottom:20px;}\n";
                style.innerHTML += ".hays-jobs .hays-result-description {margin:0; max-width:none; max-width:none; max-height:none;font-size:14px;vertical-align:middle;padding:0 12px !important;}\n";
                style.innerHTML += ".hays-jobs .job-search-title {margin-bottom:30px; display:inline-block;}\n";
                style.innerHTML += ".field.hays-result-rate-value {width:45%; padding-left:12px; line-height:14px;font-size:13px;}\n";
                style.innerHTML += ".hays-jobs .hays-result-title .value {margin-top:0 !important; margin-right:1em;}";
                style.innerHTML += ".hays-jobs .result-list .result { padding:0; padding-bottom:30px !important; margin:20px auto !important; border:1px solid #e6e6e6; padding-bottom:0; padding-top:20px; background-color:#ffffff;}";
                style.innerHTML += ".hays-jobs ol.result-list {border:0; width:100%; margin:0 auto;background-color:#f0f0f0;}";
                style.innerHTML += ".hays-jobs .result-list .result.first {}";
                style.innerHTML += ".result-list.sponsored-jobs {}";
                style.innerHTML += ".hays-jobs .result-list .result:last-child {border-bottom: 1px solid #d2d2d2 !important;}";
                style.innerHTML += ".butdetails {position: absolute; right: 4%; bottom: 27%; padding: 10px 28px; background-color: rgb(0, 159, 218); border: 0px; box-shadow: rgb(4, 121, 165) 0px 0px 1px; color: #fff !important;font-size:15px;line-height:22px;vertical-align:middle;cursor:pointer;letter-spacing:.25px;}";
                style.innerHTML += ".hays-jobs .hays-result-location:before, .hays-jobs .hays-result-location .before {color: #313131; font-size:16px;}";
                style.innerHTML += ".tk-stl-description .value {color: #808080 !important;line-height:18px !important;font-size: 14px;}";
                style.innerHTML += ".hays-jobs.hays-result-title .value {line-height:1.5em; margin-bottom:.75em;display:block; margin-right:2.5em;vertical-align:bottom;}";
                style.innerHTML += ".field.hays-result-title.new-job {float:left !important;}";
                style.innerHTML += ".hays-jobs.new-job + span {position:inherit;}";
                style.innerHTML += ".hays-jobs .new-job + span {position:initial !important;}";
                style.innerHTML += ".hays-jobs .hays-result-location:before,.hays-jobs .hays-result-location .before {font-size:1em !important;vertical-align:baseline;}";
                style.innerHTML += ".panel-layout.pl-content {background-color: #f0f0f0;}";
                style.innerHTML += "div#pageTop1.pageNo.pageCurrent {background-color:#f0f0f0;}";
                style.innerHTML += ".hays-jobs {background-color:#fff;}";
                style.innerHTML += ".panel-layout .pl-content {background-color:#f0f0f0 !important;}";
                style.innerHTML += ".hays-jobs a.butdetails {position: absolute;right: 4%;bottom: 22%;padding: 10px 23px; text-decoration: none !important;}";
                style.innerHTML += "a.butdetails.hover,a.butdetails:active {background-color:#002776;text-decoration:none;}";

                style.innerHTML += ".hays-jobs .sponsored-jobs a.butdetails {		 position: absolute;right: 4%;bottom: 32%;padding: 10px 28px;background-color: rgb(0, 159, 218); border: 0px;box-shadow: rgb(4, 121, 165) 0px 0px 1px;color: #fff !important;font-size: 15px;line-height: 22px;vertical-align: middle;cursor: pointer;letter-spacing: .25px;}";
                style.innerHTML += "#search .pageNo {background-color:#f0f0f0 !important;font-weight: 500;color: #8a8b8d;font-size: 18px;padding: 3px;}";
                style.innerHTML += "p.value {::first-letter:color:#black;}";
                style.innerHTML += ".blackPound::first-letter {color:#ffffff;font-size:10px;margin-right:5px; border-radius:50%;letter-spacing:6px;text-align:center;padding:2px 0px 2px 5px;background-color:#313131; display:inline-block;}";
                style.innerHTML += ".hays-result-sponsored img {right:9999px !important;}";
                style.innerHTML += ".hays-jobs .result-list .last {padding-bottom:1em !important;}";

                style.innerHTML += ".hays-jobs .hays-result-sponsored img {display:none !important;}";

                style.innerHTML += ".hays-jobs .result-list .result img {right:99999px !important;}";
                style.innerHTML += ".agreen {display:inline-block;font-size:12px;vertical-align:middle; line-height:15px;text-align:center;vertical-align:bottom;color:#afc350 !important;background-color:#fff !important;border:1px solid rgb(175,195,80); padding:2px 3px; font-weight:normal;position: relative; top: 2px;}";

                style.innerHTML += ".field.hays-result-location.xlocationdescription {width:49%;}"
                style.innerHTML += "p.value.blackPound:before {position:absolute;left:0; top:0;}";
                style.innerHTML += "field.hays-result-rate-value p.value::before {margin-left:-5px;}";
                style.innerHTML += "field.hays-result-rate-value p.value {margin-left:0px;}";
                style.innerHTML += ".hays-jobs .hays-result-title .value a {padding-right:10px; }";
                style.innerHTML += ".blackPound {display:inline-block;position: absolute; left: 0;}";

                style.innerHTML += ".field.hays-result-rate-value .value{display: block; padding-left: 20px; position: relative;}";



                //append to head
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        },
        addCTA: function(e) {
            if (e !== undefined && e !== null) {

            }
        },
        hasClass: function(el, cls) {
            return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
        },
        addClass: function() {


            $('.hays-jobs .result-list .result').each(function(i) {
                var el = $(this);
                if ($(this).hasClass('changes-done')) {
                    // CTA HAS BEEN ADDED ALREADY'.l..s
                } else {
                    el.addClass('changes-done');

                    /* append pound */
                    $(this).find('.field.hays-result-rate-value p.value').prepend('<span class="blackPound">£</span>');

                    /* new */
                    if($(this).find('.job-search-title span').text() == 'NEW'){
                        var nnew = $(this).find('.job-search-title span');
                        var title = $(this).find('.job-search-title p.value');
                        $(nnew).appendTo(title);
                        $(nnew).addClass('agreen');
                    }
                    // $(this).find('.job-search-title span').addClass('agreen').text("NEW");


                    /* main CTA */
                    var link = el.find('.job-search-title a').attr('href');

                    var a = document.createElement('a');
                    var linkText = document.createTextNode("View details");
                    a.appendChild(linkText);
                    a.title = "View details";
                    a.className = 'butdetails';
                    a.href = link;

                    el.find('.field.hays-result-rate-value').append(a);

                }
            });
        },

        attachToP: function() {
              
               
                // $('.field.hays-result-title.new-job').each(function() {
                //         //grab handles
                //         var n = $(this).find('p.value');
                //         var spano = this.parentElement.children[1];
                //         //append
                //         n.append(spano);


                        
                     
                // });



        },
        


        ajaxComplete: function() {
            $(document).ajaxComplete(function() {
                setTimeout(function() {
                    //console.log($('.hays-jobs .result-list .result').length);
                    Hays01.addClass();
                }, 500);

            });
        }
    };



    $(document).ready(function() {
        // try{

        Hays01.init();

        setTimeout(function() {
            //document.body.style.opacity = 1;
        }, 500);


        

    });

})(); 
