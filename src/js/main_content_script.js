(async () => {
  // undefined
  window.extensionIdMain = chrome.runtime.id;
  console.log("[main][entry]window.extensionIdMain", window.extensionIdMain);
  console.log("[main][entry]window.location", window.location);
  console.log("[main][entry]document.body", document.body);
  // undefined
  console.log("[main][entry]chrome.extension", chrome.extension);
  console.log("[main][entry]chrome.runtime", chrome.runtime);
  // undefined
  console.log("[main][entry]chrome.runtime.getURL:", chrome.runtime.getURL);
  const src = chrome.runtime.getURL("src/js/main_content_main.js");
  console.log("[main][entry]main src:", src);
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();
