const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("assets", resolve("./src/assets"))
      .set("comp", resolve("./src/components"))
      .set("common", resolve("./src/common"))
      .set("content", resolve("./src/components/content"))
      .set("network", resolve("./src/network"))
      .set("views", resolve("./src/views"));
  }
};
