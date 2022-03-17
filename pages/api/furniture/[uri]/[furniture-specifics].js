import dbConnect from "../../../../utils/dbConnect"
import Furniture from '../../../../models/Furniture'
import Ratings from '../../../../models/Ratings'
import Cors from 'cors'
import { runMiddleware } from "../../../middleware/runMiddleware";

const cors = Cors({
    methods: ['GET'],
})

const furnitureSpecificsHandler = async (req, res) => {
    const { method, query } = req;
    try {
        await runMiddleware(req, res, cors);
        switch(method) {
            case 'GET':
                const furnitureSpecifics = await Furniture.findOne({
                    relatedGroupName: query.uri,
                    url: query['furniture-specifics']
                }).populate({
                    path: 'ratings',
                    model: Ratings
                });
                return res.status(200).json(furnitureSpecifics)
            default:
                return res.status(400).json({ message: 'This method is not supported' })
        }
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
}

export default dbConnect(furnitureSpecificsHandler)