"use strict"

const path = require("path")

function getPath() {
  if (process.env.USE_SYSTEM_INNOEXTRACT === "true") {
    return "unrar"
  }

  if (process.platform === "darwin") {
    return path.join(__dirname, "mac", "unrar")
  }
  else if (process.platform === "win32") {
    return path.join(__dirname, "win", process.arch, "unrar.exe")
  }
  else {
    return path.join(__dirname, "linux", process.arch, "unrar")
  }
}

exports.path = getPath()