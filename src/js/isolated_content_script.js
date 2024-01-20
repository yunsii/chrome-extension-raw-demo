(async () => {
  window.extensionIdIsolated = chrome.runtime.id;
  console.log("[isolated][entry]window.extensionIdIsolated", window.extensionIdIsolated);
  console.log("[isolated][entry]window.location", window.location);
  console.log("[isolated][entry]document.body", document.body);
  console.log("[isolated][entry]chrome.extension", chrome.extension);
  console.log("[isolated][entry]chrome.runtime", chrome.runtime);
  const src = chrome.runtime.getURL("src/js/isolated_content_main.js");
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
  const srcIife = chrome.runtime.getURL("src/js/isolated_content_main_iife.js");
  await import(srcIife);
})();
