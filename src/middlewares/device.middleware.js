export function checkDevice() {
  return (req, res, next) => {
    const headers = req.headers;

    function evaluateHeaders(headers) {
      const checks = {
        userAgentMobile: /Android|iPhone/.test(headers["user-agent"]),
        platformMobile: /Android|iOS/.test(headers["sec-ch-ua-platform"]),
        telegramAndroid:
          headers["x-requested-with"] === "org.telegram.messenger",
        userAgentWindows: /Windows|Win64/.test(headers["user-agent"]),
      };

      // Determine access status with updated condition for telegramAndroid
      return (
        (checks.userAgentMobile || checks.telegramAndroid) &&
        !checks.userAgentWindows &&
        checks.telegramAndroid
      );
    }

    // Call evaluateHeaders and decide based on the result
    if (evaluateHeaders(headers)) {
      next();
    } else {
      res.status(403).redirect("/forbiden").json({
        message:
          "Access forbidden: This service is only accessible from Android or iPhone devices.",
      });
    }
  };
}
