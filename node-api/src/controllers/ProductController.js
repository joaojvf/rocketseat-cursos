const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index (req, res){
        const { page = 1 } =  req.query;
        const products = await Product.paginate({/*Aqui ficam os filtros*/}, {page, limit: 10});

        return res.json(products);
    },

    async show (req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async  store(req, res){
        //Create
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update (req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true});
        // {new : true} significa que é para retornar o produto atualizado. 
        // Caso não tenha esse parâmetro, será retornado o objeto antes do update.

        return res.json(product);;
    },

    async destroy (req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};