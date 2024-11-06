document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("requestButton");
  const buttonServer = document.getElementById("requestButtonServer");
  const headerOutput = document.getElementById("headerOutput");
  const accessStatus = document.getElementById("accessStatus");
  buttonServer.addEventListener("click", async () => {
    try {
      const response = await fetch(
        // "https://requestertest-github-io.onrender.com/api/users/current-user-chedevice",
        "http://localhost:3000/api/users/current-user-chedevice",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        evaluateHeaders(data.headers);
      } else {
        headerOutput.innerText = "Try To Open With Mobile";
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      headerOutput.innerText = "Error occurred.";
      console.error("Error:", error);
    }
  });
  button.addEventListener("click", async () => {
    try {
      const response = await fetch(
        "https://requestertest-github-io.onrender.com/api/users/current-user",
        // "http://localhost:3000/api/users/current-user",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        evaluateHeaders(data.headers);
      } else {
        headerOutput.innerText = "Failed to fetch data.";
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      headerOutput.innerText = "Error occurred.";
      console.error("Error:", error);
    }
  });
  function evaluateHeaders(headers) {
    headerOutput.innerHTML = "<h3>Request Headers</h3>";

    const checks = {
      userAgentMobile: /Android|iPhone/.test(headers["user-agent"]),
      platformMobile: /Android|iOS/.test(headers["sec-ch-ua-platform"]),
      telegramAndroid: headers["x-requested-with"] === "org.telegram.messenger",
      userAgentWindows: /Windows|Win64/.test(headers["user-agent"]),
    };

    // Display header check results with ticks or crosses
    for (const [key, passed] of Object.entries(checks)) {
      const result = document.createElement("p");
      result.innerHTML = ` ${passed ? "✅" : "❌"} : ${key}`;
      headerOutput.appendChild(result);
    }

    // Determine access status with updated condition for telegramAndroid
    if (
      (checks.userAgentMobile || checks.telegramAndroid) &&
      !checks.userAgentWindows &&
      checks.telegramAndroid // Ensure telegramAndroid is "true" (✅)
    ) {
      accessStatus.innerHTML = "<h3 style='color: green;'>Access Allowed</h3>";
    } else {
      accessStatus.innerHTML = "<h3 style='color: red;'>Access Forbidden</h3>";
    }
  }
});
