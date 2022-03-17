import dbConnect from "../../../../utils/dbConnect"
import Furniture from '../../../../models/Furniture'

dbConnect();

export default async function uriHandler(req, res) {
  const { method, query } = req;
  switch(method) {
    case 'GET':
      try {
        const furnitureSection = await Furniture.find({
          relatedGroupName: query.uri
        });
        return res.status(200).json(furnitureSection)
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return res.status(400).json({ message: 'This method is not supported' })
  }
}