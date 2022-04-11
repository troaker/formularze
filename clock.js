/* Clock */
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
  
    if (hh > 12) 
    {
      session = "PM";
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
  
    let time = hh + ":" + mm
    document.getElementById("clock").innerText = time;
    
    setTimeout(currentTime(), 1000);
  }
  
  currentTime();