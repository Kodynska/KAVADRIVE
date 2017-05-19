setInterval(function()
{var date = new Date();
 
var formats = [(date.getDate()<10?"0"+date.getDate():+date.getDate()),
            (date.getMonth()<10?"0"+date.getMonth():+date.getMonth()),
            (date.getFullYear())].join(" ");
    document.getElementById('date').innerHTML=formats;
  }, 900 )