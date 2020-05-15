const db = require('../data/recipe-book.db3')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes as r')
        .select('r.name')
}

function getShoppingList(id){
    return db('shopping_cart as sc').where({recipe_id: id})
        .join('ingredients as i', 'sc.ingredient_id', 'i.id')
        .select('sc.quantity', 'i.name')

}

function getInstructions(id){
    return db('instructions as ins').where({recipe_id: id})
        .join('ingredients as ing', 'sc.ingredient_id', 'i.id')
        .select('ins.')
}

