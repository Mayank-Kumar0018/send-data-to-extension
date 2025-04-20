function sendTokenToExtension() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    if (token) {
      window.postMessage(
        {
          type: "OAUTH_SUCCESS",
          token: token,
        },
        "*"
      );
  
      console.log("✅ Token sent to content script");
    } else {
      console.log("❌ Token not found in URL");
    }
  }
  
  setTimeout(sendTokenToExtension, 5000); // Give the content script some time
  