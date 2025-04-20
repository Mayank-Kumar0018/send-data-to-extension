window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    window.postMessage(
      {
        type: "OAUTH_SUCCESS",
        token: token,
      },
      "*"
    );
  
    console.log("oauth token : ", token);
    console.log("hello world sending tokens :)");
  };
  