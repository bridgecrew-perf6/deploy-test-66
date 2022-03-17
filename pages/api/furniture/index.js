import dbConnect from "../../../utils/dbConnect"
import Furniture from '../../../models/Furniture'
import Cors from 'cors'
import { runMiddleware } from "../../../middleware/runMiddleware";

const cors = Cors({
  methods: ['GET'],
})

const furnitureHandler = async (req, res) => {
  const { method } = req;
  try {
    await runMiddleware(req, res, cors);
    switch(method) {
      case 'GET':
        const furnitureData = await Furniture.find({});
        return res.status(200).json(furnitureData);
      default:
        return res.status(400).json({ message: 'This method is not supported' })
    }
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}

export default dbConnect(furnitureHandler)