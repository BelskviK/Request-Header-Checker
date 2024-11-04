class UserController {
  async getCurrentUser(req, res) {
    try {
      const requestData = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
      };
      res.status(200).json(requestData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async checkDevice(req, res) {
    try {
      const requestData = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
      };
      res.status(200).json(requestData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new UserController();
