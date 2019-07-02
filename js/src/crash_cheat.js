<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr("https://i.loli.net/2019/04/22/5cbd35f898db6.jpg");
         document.title = 'See you later';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr("https://i.loli.net/2019/04/22/5cbd35f898db6.jpg");
         document.title = 'God bless you';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });