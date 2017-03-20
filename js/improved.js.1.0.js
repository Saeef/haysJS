(function() {
  //debugger ;
  //new and improved formula
  var but = document.createElement('button');
  var al = document.createElement('a');
  //Process
  function Process(n, t, l) {
      !function c() {
          t.length > 0 ? t.shift().apply(n || {}, [].slice.call(arguments).concat(c)) : 0,
          0 == t.length ? l.call(n) : 0
      }();
  }//Process

  //Init
  Init = {
      runCss: {
          step1: 'js step 1 completed!',
          step2: 'href and button completed',
          step3: 'appended elements to dom completed'

      },//runCss
      timers: {
        counter: 0,
        medium: 1500 
      },//timers
      runCode: {
          step4: 'js step 4 completed!',
          step5: 'js step 5 completed!',
          step6: 'js step 6 completed!',
          step1: 'css styles completed'
      },
      //step7 (optional)
      other: function(name) {
          name = name || "no other functions have been added";
          console.info('default is: ' + name);
      },
      other1: 'end of done one',
      other2: 'alerts user when JS disabled',
      //step8
      finish: 'script ended!'
  };//Init

  //Process: Init
  Process(Init, [
      function noJs(next) {
        //scope encapsulated
        var enca = function() {
          var self = this;
          debugger ;
          var noscript = document.createElement('noscript');
          noscript.innerHTML = "Please enable JavaScript in your Browser";
          noscript.className = 'noscript';
          noscript.style.color = "#000";
          document.body.appendChild(noscript);
          console.info(this.other2);
        };
        next();         
      },
      function step1(next) {
          //create elem
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
          style.innerHTML += ".hays-jobs .result-list.sponsored-jobs .result {padding-right:0;border-left:0;padding-left:0;margin-left:0;}\n";
          style.innerHTML += ".hays-jobs {margin:0;padding:0;}\n";
          style.innerHTML += ".hays-jobs .result-list {padding:0 10px;}\n";
          style.innerHTML += "li.result.first.last {padding:0;width:100%;overflow:auto;}\n"
          style.innerHTML += ".result-list.sponsored-jobs {background-color:#fff !important;margin-top:0;border:1px solid #002776; padding:18px 0px 0px;}\n";
          style.innerHTML += ".job-search-title {padding:0 12px !important;}\n";
          style.innerHTML += "p.value {margin-bottom:22px;}"
          style.innerHTML += ".hays-jobs .hays-result-sponsored {display:block; padding:5px 12px 5px 12px;margin:0; border:0;font-size:10px;line-height:18px;background-color:#002776;float:none !important;color:#fff !important;font-weight:normal;}\n";
          style.innerHTML += ".hays-jobs .hays-result-rate-value {margin-bottom:0;}\n";
          style.innerHTML += ".hays-jobs .hays-result-location {margin-bottom:-5px; padding-left:12px;}\n";
          style.innerHTML += ".hays-jobs .hays-result-location .value {margin-left:5px;line-height:10px;font-size14px;margin-bottom:20px;}\n";
          style.innerHTML += "field hays-result-title  jobtitle tk-stl-title {margin-bottom:20px;}\n";
          style.innerHTML += ".hays-jobs .hays-result-description {margin:0; max-width:none; max-width:none; max-height:none;font-size:14px;vertical-align:middle;padding:0 12px !important;}\n";
          style.innerHTML += ".hays-jobs .job-search-title {margin-bottom:10px;}\n";
          style.innerHTML += ".field.hays-result-rate-value {width:45%; padding-left:12px; line-height:18px;}\n";



          //append to head
          document.getElementsByTagName('head')[0].appendChild(style);
          console.log('step 1: ' + this.runCss.step1);
          next();

      },
      function step2(next) {
         debugger;
         al.className = 'adeet';
         but.className = 'butdetails';
         al.textContent = 'View details';
         //apend to dom
         but.appendChild(al);
         //append to dom
         var doe = document.querySelector('.field.hays-result-rate-value');
         doe.appendChild(but);
         console.log('step 2 :' + this.runCss.step2);
         next()
         
      },

      //cta styles
      function step3() {      
          if (!undefined) {
                but.style.position = 'absolute';
                but.style.right = '5%';
                but.style.bottom = '22%';
                but.style.padding = '14px 35px';
                but.style.backgroundColor = '#009fda';
                but.style.border = '0';
                but.style.boxShadow = '0px 0px 1px #0479a5';
                al.style.fontSize = '14px';
                al.style.lineHeight = '22px';
                al.style.color = '#ffffff';   
          } 

      }              
  ],//Process:Init
  
  function done() {
         //enter code here
         this.timers.counter;
         while(this.timers.counter <= 1) {
              this.timers.counter++;
              console.log(Init.other1,'delaaayyyyy done.');
              setTimeout(function() {
                     
              }, 100);
         }//while       
  });//done

  //Process:Init.runCode
  setTimeout(function() {
      Process(Init.runCode, [
        function step4(next) {
            console.log(this.step4);
            next();
        },
        function step5(next) {
            var self1 = this, arg;
            setTimeout(function() {
                next(arg);
            }, 200);
            console.log(this.step5);
        },
        function step6(arg, next) {
            arg = arg || 'noname';
            console.log(arg);
            console.log(this.step6);
        }
      ],
      function done() {
          console.log(Init.finish);
      }
    );//Process:Init.runCode

}, this.Init.timers.medium);//timeout

})();
//self exec closure
