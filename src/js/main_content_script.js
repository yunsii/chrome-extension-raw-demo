(async () => {
  // undefined
  window.extensionIdMain = chrome.runtime.id;
  console.log("[main]window.extensionId", window.extensionId);
  console.log("[main]window.location", window.location);
  console.log("[main]document.body", document.body);
  // undefined
  console.log("[main]chrome.extension", chrome.extension);
  console.log("[main]chrome.runtime", chrome.runtime);
  const src = chrome.runtime.getURL("src/js/main_content_main.js");
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();
