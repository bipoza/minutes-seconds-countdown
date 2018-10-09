  timer = "00:00";
  countdown(minutes, seconds) {
    var i = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else if (seconds == 0) {
        minutes--;
        seconds = 60;
      }
      if (minutes == 0 && seconds == 0) {
        clearInterval(i);
      }
      //1:9 --> 01:09
      this.timer = String(minutes < 10 ? "0" + minutes : minutes) + ':' + String(seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
  }