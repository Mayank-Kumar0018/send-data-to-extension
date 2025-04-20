const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

// chrome.runtime.sendMessage({ type: "OAUTH_SUCCESS", token });
window.postMessage({
    type: "OAUTH_SUCCESS",
    token: token
  }, "*");
console.log("outh token : ",  token);
console.log("hello world sending tokens :)")