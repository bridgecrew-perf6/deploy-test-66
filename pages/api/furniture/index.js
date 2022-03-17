import dbConnect from "../../../utils/dbConnect"
import Furniture from '../../../models/Furniture'

dbConnect();

export default async function furnitureHandler(req, res) {
  const { method } = req;
  switch(method) {
    case 'GET':
      try {
        const furnitureData = await Furniture.find({});
        return res.status(200).json(furnitureData);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return res.status(400).json({ message: 'This method is not supported' })
  }
}