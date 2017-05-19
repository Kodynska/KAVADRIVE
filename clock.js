setInterval(function()
{
    var date = new Date();
      
    var format = [
          (date.getHours()<10?"0"+date.getHours():+date.getHours()),
            (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())
    ].join(":");
    document.getElementById('clock').innerHTML=format;
  }, 900 )