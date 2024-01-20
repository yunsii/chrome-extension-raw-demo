import User from "./models/user.js";

export function main() {
  console.log("[isolated][main_iife]window.extensionIdIsolated", window.extensionIdIsolated);
  console.log("[isolated][main_iife]window.location", window.location);
  console.log("[isolated][main_iife]document.body", document.body);
  console.log("[isolated][main_iife]chrome.extension", chrome.extension);
  console.log("[isolated][main_iife]chrome.runtime", chrome.runtime);
  const user = User.new({ name: "Yuns" });
  console.log(user.greet());
  console.log(
    "[isolated][main_iife]Is chrome.runtime available here?",
    typeof chrome.runtime.sendMessage == "function"
  );
}

main();
