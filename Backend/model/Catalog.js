import {model, Schema} from 'mongoose';

const catalogSchema = new Schema({
    product_id: {type: Number, required: true},
    Product_category : String,
    Rank: Number,
    brand_name: String,
    product_description : String,
    price: Number,
    image_link: String
})

const Catalog = model("Catalog", catalogSchema);

export default Catalog;