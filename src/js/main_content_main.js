import User from "./models/user.js";

export function main() {
  console.log("[main][main]window.extensionIdMain", window.extensionIdMain);
  console.log("[main][main]window.location", window.location);
  console.log("[main][main]document.body", document.body);
  console.log("[main][main]chrome.extension", chrome.extension);
  console.log("[main][main]chrome.runtime", chrome.runtime);

  const user = User.new({ name: "Yuns" });
  console.log(user.greet());
  console.log("[main][main]Is chrome.runtime available here?", typeof chrome.runtime.sendMessage == "function");
}
