module.exports = {
  devServer: {
    proxy: {
      "^/webapi/sample": {
        target: "http://localhost:8081",
        changeOrigin: true
      }
    }
  }
};
