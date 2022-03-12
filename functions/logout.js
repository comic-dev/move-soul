window.webpackJsonp
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
    ]);
function LogOut() {
  (function (a) {
    const b = "string" == typeof a ? a : null;
    for (const c in gg.c)
      if (gg.c.hasOwnProperty(c)) {
        const d = gg.c[c].exports;
        if (d && d.__esModule && d.default && (b ? d.default[b] : a(d.default)))
          return d.default;
        if (d && (b ? d[b] : a(d))) return d;
      }
    return null;
  })("login").logout();
}
LogOut();
