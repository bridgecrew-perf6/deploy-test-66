import mongoose from 'mongoose'
const { Schema, model, models } = mongoose

const furnitureSchema = new Schema(
    {
        relatedGroupId: {
            type: String,
            required: false
        },
        relatedGroupName: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        colors: {
            type: Array,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true
        },
        measures: {
            type: Array,
            required: true
        },
        content: {
            type: Array,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        ar: {
            type: Boolean,
            required: true
        },
        arImage: {
            type: String,
            required: false
        },
        ratings: [{   
            type: Schema.Types.ObjectId,
            ref: 'Ratings'
        }],
    }
)
// [{type: Schema.Types.Mixed }]
const Furniture = models.Furniture || model('Furniture', furnitureSchema);

export default Furniture