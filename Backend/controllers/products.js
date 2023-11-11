import Catalog from "../model/Catalog.js";

// Search products based on keyword
const searchProducts = (req, res) => {
    return new Promise((resolve, reject) => {
        const { keyword, price_min, price_max } = req.query;

        const searchQuery = {
            $or: [
                { product_description: { $regex: `.*${keyword}.*`, $options: 'i' } },
                { brand_name: { $regex: `.*${keyword}.*`, $options: 'i' } }
            ]};
            // Filter based on price
        if (price_min && price_max) {
            searchQuery.price = { $gte: parseInt(price_min), $lte: parseInt(price_max) };
        } else if (price_min) {
            searchQuery.price = { $gte: parseInt(price_min)};
        } else if (price_max) {
            searchQuery.price = { $lte: parseInt(price_max) };
        } 
        // Sort according to Rank and select top 10
        Catalog.find(searchQuery)
            .sort({ Rank: 1 }) 
            .limit(10) 
            .then((searchResults) => {
                res.json(searchResults);
                resolve(searchResults);  
            })
            .catch((error) => {
                res.status(500).json({ error: "Internal Server Error" });
                reject(error); 
            });
    });
};

export {searchProducts};