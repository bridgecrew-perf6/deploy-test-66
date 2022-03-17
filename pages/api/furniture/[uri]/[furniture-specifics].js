import dbConnect from "../../../../utils/dbConnect"
import Furniture from '../../../../models/Furniture'
import Ratings from '../../../../models/Ratings'

dbConnect();

export default async function furnitureSpecificsHandler(req, res) {
    const { method, query } = req;
    switch(method) {
    case 'GET':
        try {
            const furnitureSpecifics = await Furniture.findOne({
                relatedGroupName: query.uri,
                url: query['furniture-specifics']
            }).populate({
                path: 'ratings',
                model: Ratings
            });
            return res.status(200).json(furnitureSpecifics)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    default:
        return res.status(400).json({ message: 'This method is not supported' })
    }
}