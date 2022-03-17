import mongoose from 'mongoose'
const { Schema, model, models } = mongoose

const ratingsSchema = new Schema(
    {
        muebleRelacionado: {
            type: String,
            required: false
        },
        comodidad: {
            type: Number,
            required: true,
        },
        diseño: {
            type: Number,
            required: true,
        },
        calidad: {
            type: Number,
            required: true,
        },
        materiales: {
            type: Number,
            required: true,
        },
        promedio: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        comments: {
            type: String,
            required: false
        }
    }
)

const Ratings = models.Ratings || model('Ratings', ratingsSchema);

export default Ratings