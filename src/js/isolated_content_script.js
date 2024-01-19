(async () => {
  window.extensionIdIsolated = chrome.runtime.id;
  console.log("[isolated]window.extensionId", window.extensionId);
  console.log("[isolated]window.location", window.location);
  console.log("[isolated]document.body", document.body);
  console.log("[isolated]chrome.extension", chrome.extension);
  console.log("[isolated]chrome.runtime", chrome.runtime);
  const src = chrome.runtime.getURL("src/js/isolated_content_main.js");
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();
