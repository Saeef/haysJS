//number of items
  var baskette = null;

  var testNameSL = {

    init: function() {
       console.log('Greetings from init function step2 of 3');
       //keep external css out
       this.mainCss(false);

    },

    mainCss:function() {
      //create elem
      var style = document.createElement('style');
      style.type = "text/css";
      
      //enter styles here:
      style.innerHTML = "body {}\n";
      style.innerHTML += "main.pl-content {background-color:#f0f0f0 !important;}\n";
      style.innerHTML += "div#pageTop1.pageNo.pageCurrent { background-color:#f0f0f0 !important;color:#949494;font-size:14px;font-weight:500;\n}";
      //page1
      style.innerHTML += "div#mainDiv {width:95%; margin:0 auto;}\n";
      style.innerHTML += "#search .pageNo {margin:14px 0 !important;\n}";
      //sponsored
      style.innerHTML += ".result-list.sponsored-jobs {background-color:#fff !important; border:1px solid #002776;\n}";
      style.innerHTML += ".result-list.sponsored-jobs .result {border:none !important; margin:0 !important; }\n";
      style.innerHTML += ".hays-jobs .hays-result-title .value {font-size:15px !important;\n}"
      style.innerHTML += "div:first-child p.value {margin-top:.75em;}\n";
      style.innerHTML += "p.value {color: #888888 !important;}\n";
      style.innerHTML += ".hays-jobs .hays-result-description {margin-bottom:0 !important; font-size:14px !important;}\n";

      style.innerHTML += ".field.hays-result-rate-value { color:#949494 !important;}\n";
      style.innerHTML += "li.result.first.last { padding:10px 0 !important;}\n";
      style.innerHTML += "div.hays-result-sponsored {background-color:#002776; margin:5px 0 0 0; padding:5px 9px !important; width:80px; text-align:center; color:#fff; font-weight:normal; float:none; display:block;}\n";

      style.innerHTML += ".hays-jobs .hays-result-sponsored {margin-top:0 !important; margin-bottom:0 !important; margin-right:0 !important;}\n";

      //append to head
      document.getElementsByTagName('head')[0].appendChild(style);
        

    },  //mainCss

    hayo: function() {
        console.log('Greetings from step3 of 3');

    }

    
  };// testnameSL

  (function pollForjQuery() {
        console.clear();
        if (window.jQuery !== undefined) {
            try { 
              console.log('Test initialized - step1 of 3');
              testNameSL.init();

              function runErrors() {
              //root local folder
              if(window.location.protocol == "file:") {
                //run for mobile devices only               
                if (window.screen.width < 1080) {
                        console.info('im local')                   
                        testNameSL.hayo();
                }//if
                                     
            }//try
            //run target page
        else if (window.location.protocol == "https:") {
                //run for mobile devices only
                if(window.screen.width < 1080) {
                        console.info('im live');
                        testnameSL.hayo();
                }
               

        }//if    
                
      }//pollForJQuery
  
      try {       
              
        runErrors();
      
      } //try

      catch(err) {
  
        console.warn('\n Greetings from Errors \n\n');
        console.error('Following issues were found: \n\n' +  err + ' \n\n');
      
      } //catch


  } catch (err) {
                console.log('TRY ERROR: '+ err);
            }
        } else {
            setTimeout(pollForjQuery, 25);
        }
})();


