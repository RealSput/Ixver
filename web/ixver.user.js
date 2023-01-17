// ==UserScript==
// @name         Ixver
// @namespace    https://realsput.github.io/Ixver/
// @version      0.1
// @description  A web voice assistant
// @author       RealSput
// @include      https://*/*
// @grant        none
// ==/UserScript==

if (location.protocol === 'https:') {
    const stl = `#grad1 {
      position: fixed;
      top: 80%;
      left: 0%;
      height: 200px;
      width: 100%;
      background-image: linear-gradient(transparent, black);
      transition: opacity 0.5s;
      z-index: 9999999999999;
    }

    .inactive {
      opacity: 0%;
    }

    .active {
      opacity: 100%;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    .hr1 {
      border: 0;
      height: 2px;
      background-image: linear-gradient(90deg, transparent 13%, rgba(0, 67, 255, 1) 33%, rgba(0, 234, 255, 1) 33%, rgba(0, 67, 255, 1) 33%, transparent 81%);
      background-size: 400% 400%;
      animation: gradient 2s ease infinite;
      z-index: 9999999999999;
    }

    #grad1 h1 {
      position: absolute;
      transform: translate(-50%, -50%);
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 1;
      left: 50%;
      top: 40%;
    }

    #qresp {
      background-color: black;
      position: fixed;
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0%;
      top: 0%;
      left: 0%;
      transition: opacity 0.5s;
      text-align: center;
      color: white;
      font-family: Arial, Helvetica, sans-serif;
    }

    .qrinactive {
      visibility: hidden;
      opacity: 0%;
    }

    .qractive {
      opacity: 65%;
      z-index: 9999999999999;
    }`;

    let elm = document.createElement('style');
    elm.innerText = stl;
    document.body.appendChild(elm);

    let $_FG_ELEM_1_$ = document.createElement("div");
    $_FG_ELEM_1_$.setAttribute("id", "qresp");
    $_FG_ELEM_1_$.setAttribute("class", "qrinactive");
    document.body.appendChild($_FG_ELEM_1_$);

    let $_FG_ELEM_2_$ = document.createElement("p");
    $_FG_ELEM_2_$.setAttribute("style", "position: fixed;width: 100%;top: 50%;font-family: Arial, Helvetica, sans-serif;font-weight: 1;");
    $_FG_ELEM_2_$.setAttribute("id", "tresp");
    $_FG_ELEM_1_$.appendChild($_FG_ELEM_2_$);

    let $_FG_ELEM_3_$ = document.createElement("div");
    $_FG_ELEM_3_$.setAttribute("id", "grad1");
    $_FG_ELEM_3_$.setAttribute("class", "inactive");
    document.body.appendChild($_FG_ELEM_3_$);

    let $_FG_ELEM_4_$ = document.createElement("hr");
    $_FG_ELEM_4_$.setAttribute("class", "hr1");
    $_FG_ELEM_3_$.appendChild($_FG_ELEM_4_$);

    let $_FG_ELEM_5_$ = document.createElement("h1");
    $_FG_ELEM_5_$.setAttribute("id", "ixver-prompt");
    $_FG_ELEM_3_$.appendChild($_FG_ELEM_5_$);

    let code = `let oldWords = undefined;
    function _0x2e9b(_0x3b39cf, _0x1f151f) {const _0x28833c = _0x2883(); return _0x2e9b = function (_0x2e9b4c, _0x199af1) {_0x2e9b4c = _0x2e9b4c - 0xff; let _0x4c464c = _0x28833c[_0x2e9b4c]; return _0x4c464c;}, _0x2e9b(_0x3b39cf, _0x1f151f);} const _0x5dd1ec = _0x2e9b; (function (_0x1824a3, _0x39c31d) {const _0x547cb0 = _0x2e9b, _0xa69fb8 = _0x1824a3(); while (!![]) {try {const _0x13f34f = parseInt(_0x547cb0(0xff)) / 0x1 * (-parseInt(_0x547cb0(0x103)) / 0x2) + -parseInt(_0x547cb0(0x107)) / 0x3 * (parseInt(_0x547cb0(0x105)) / 0x4) + -parseInt(_0x547cb0(0x101)) / 0x5 * (parseInt(_0x547cb0(0x10c)) / 0x6) + parseInt(_0x547cb0(0x10b)) / 0x7 * (parseInt(_0x547cb0(0x102)) / 0x8) + -parseInt(_0x547cb0(0x100)) / 0x9 * (-parseInt(_0x547cb0(0x106)) / 0xa) + parseInt(_0x547cb0(0x104)) / 0xb * (parseInt(_0x547cb0(0x108)) / 0xc) + parseInt(_0x547cb0(0x10a)) / 0xd; if (_0x13f34f === _0x39c31d) break; else _0xa69fb8['push'](_0xa69fb8['shift']());} catch (_0xe13251) {_0xa69fb8['push'](_0xa69fb8['shift']());} } }(_0x2883, 0xdd78c)); function _0x2883() {const _0x27c83a = ['9LKcCAJ', '2705GgnZbR', '537488qiWdVu', '22biocbK', '11kgGeva', '4496gNkYYg', '8410810abDMIb', '663tgUouE', '6529284GpjzeQ', '4c1366dd-25c3-40a7-b09c-b52c45bb2d15', '5081414EBVRIc', '91FNGwwd', '3234EEDyxQ', '109303OibbUu']; _0x2883 = function () {return _0x27c83a;}; return _0x2883();} import {BrowserClient, BrowserMicrophone} from '//unpkg.com/@speechly/browser-client?module=true'; let spoken = ''; const speechly = new BrowserClient({'appId': _0x5dd1ec(0x109), 'debug': !![], 'logSegments': !![]}), microphone = new BrowserMicrophone();

    const msg = new SpeechSynthesisUtterance();
    const finish = () => {
      if (fin) {
        document.querySelector("#grad1").classList.remove("active");
        document.querySelector("#grad1").classList.add("inactive");
        document.querySelector('#qresp').classList.remove('qrinactive');
        document.querySelector('#qresp').classList.add('qractive');
        document.querySelector('#tresp').innerText = '(Waiting for response)';
        document.querySelector('#qresp').onclick = () => {
          document.querySelector('#qresp').classList.remove('qractive');
          document.querySelector('#qresp').classList.add('qrinactive');
          document.querySelector('#tresp').innerText = '(Waiting for response)';
          speechSynthesis.cancel();
        }
        fetch(\`https://open-ai.seven7four4.repl.co/api/question?prompt=\${encodeURIComponent(spoken)}\`).then(x => x.text()).then(x => {
          fin = false;
          spoken = "";
          msg.text = x;
          speechSynthesis.speak(msg);
          document.querySelector('#tresp').innerText = x;
        });
      }
    }
    speechly.onSegmentChange(segment => {
      let transcript = segment.words
        .map(w => w.value.toLowerCase())
        .join(" ");
        if (document.hasFocus()) {
      		spoken = transcript;
      		if (transcript !== "computer") document.querySelector('#ixver-prompt').innerText = transcript;
      		if (transcript !== "computer" && spoken !== "" && segment.isFinal) {
        		finish();
      		} else if (spoken == "") {
        		document.querySelector("#grad1").classList.remove("active");
        		document.querySelector("#grad1").classList.add("inactive");
        		document.querySelector('#qresp').classList.remove('qractive');
        		document.querySelector('#qresp').classList.add('qrinactive');
      		};
      	}
    });

    const startListening = async () => {
      if (microphone.mediaStream === undefined) {
        await microphone.initialize()
        await speechly.attach(microphone.mediaStream)
      }
      return speechly.start();
    }
    const stopListening = async () => {
      if (speechly.isActive()) {
        return speechly.stop();
      }
    }
    startListening()
    let fin = false;
    setInterval(() => {
      if (spoken == "computer" && !fin) {
        fin = true;
        spoken = "";
        document.querySelector('#qresp').classList.remove('qractive');
        document.querySelector('#qresp').classList.add('qrinactive');
        document.querySelector('#ixver-prompt').innerText = "";
        document.querySelector("#grad1").classList.remove("inactive");
        document.querySelector("#grad1").classList.add("active");
        setTimeout(() => {
          document.querySelector("#grad1").classList.remove("active");
          document.querySelector("#grad1").classList.add("inactive");
          fin = false;
        }, 5000);
      };
    }, 100);`;
    const element = document.createElement('script');
    element.setAttribute('type', 'module');
    element.innerHTML = code;
    document.body.appendChild(element);
} else {
    alert('Location is not secure and Ixver could not be loaded.')
}
