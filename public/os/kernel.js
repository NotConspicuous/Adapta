import * as ScreenshotAPI from "./src/screenshot.module.js";

var boot = {
  logo: document.querySelector('.boot__logo'),
  spinner: document.querySelector('.spinner'),
  msg: document.querySelector('.boot__msg'),
  msgs: [
    "We're getting things ready for you",
    "Working on it",
    "Running first time setup",
    "It's like the Byte One but better",
    "We're almost there",
    "Bringing the ensamble together",
    "More moving parts than a Swiss watch",
    "It's alive!",
    "Adopt children"
  ],
  sleep: function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  init: async function () {
    boot.msg.style.display = 'inline-block';
    boot.msg.style.visibility = 'hidden';
    // wait until font loaded on boot message
    await this.sleep(3000);
    boot.msg.classList.add('fadein');
    boot.msg.innerText = "Please give us a moment"
    boot.msg.style.visibility = 'visible';

    ScreenshotAPI.screenshot()

    await this.sleep(3000);
    boot.msg.classList.remove('fadein');
    boot.msg.style.display = 'none';

    // apply fadeout animation to logo
    this.logo.classList.add('fadeout');
    // wait for animation to finish

    await this.sleep(200);
    // hide logo            
    boot.logo.style.display = 'none';
    boot.msg.innerText = ""

    boot.spinner.classList.add('fadein');
    boot.spinner.style.display = 'inline-block';
    boot.msg.classList.remove('fadeout');
    boot.msg.classList.add('fadein');
    boot.msg.style.display = 'inline-block';
    let msg_no = 0;
    function pickRandomMsg() {
      var msg = boot.msgs[Math.floor(Math.random() * boot.msgs.length)];
      if (boot.msgs[msg_no] == msg) {
        msg = pickRandomMsg();
      }


      return msg
    }

    let messages = setInterval(async function () {
      // pick random string from array
      let msg = boot.msgs[Math.floor(Math.random() * boot.msgs.length)];
      boot.msg.classList.remove('fadein');
      boot.msg.classList.add('fadeout');
      await boot.sleep(200);
      boot.msg.innerText = pickRandomMsg();
      boot.msg.style.display = 'none';
      boot.msg.classList.add('fadein');
      boot.msg.style.display = 'inline-block';
    }, 5000);
    await this.sleep(400);
    boot.logo.style.display = 'none';
  }
}

boot.init();