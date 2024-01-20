import User from "./models/user.js";

export function main() {
  console.log("[isolated][main]window.extensionIdIsolated", window.extensionIdIsolated);
  console.log("[isolated][main]window.location", window.location);
  console.log("[isolated][main]document.body", document.body);
  console.log("[isolated][main]chrome.extension", chrome.extension);
  console.log("[isolated][main]chrome.runtime", chrome.runtime);
  const user = User.new({ name: "Yuns" });
  console.log(user.greet());
  console.log("[isolated][main]Is chrome.runtime available here?", typeof chrome.runtime.sendMessage == "function");
}
