import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HomeController {
  async viewHome(req, res) {
    try {
      res.sendFile(path.join(__dirname, "../../../../"));
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}

export default new HomeController();
