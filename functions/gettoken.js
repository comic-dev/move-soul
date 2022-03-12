for (let a in (window.webpackJsonp
  ? ((gg = window.webpackJsonp.push([
      [],
      { get_require: (a, b, c) => (a.exports = c) },
      [["get_require"]],
    ])),
    delete gg.m.get_require,
    delete gg.c.get_require)
  : window.webpackChunkdiscord_app &&
    window.webpackChunkdiscord_app.push([
      [Math.random()],
      {},
      (a) => {
        gg = a;
      },
    ]), gg.c))
  if (gg.c.hasOwnProperty(a)) {
    let b = gg.c[a].exports;
    if (b && b.__esModule && b.default)
      for (let a in b.default)
        "getToken" == a && (token = b.default.getToken());
  }
token;