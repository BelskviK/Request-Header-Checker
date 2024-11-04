export function checkDevice() {
  return (req, res, next) => {
    const userAgent = req.headers["user-agent"] || "";

    // Check for Android or iPhone in User-Agent header
    if (userAgent.includes("Android") || userAgent.includes("iPhone")) {
      next(); // Allowed device, proceed to the next middleware or route handler
    } else {
      // Device is not allowed, send forbidden message
      res.status(403).json({
        message:
          "Access forbidden: This service is only accessible from Android or iPhone devices.",
      });
    }
  };
}
