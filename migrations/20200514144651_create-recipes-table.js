
exports.up = function(knex) {
  return knex.schema
  .createTable('recicpes', recipes=>{
    recipes.increments()

    recipes.text('name', 128)
        .notNullable()

  })

  .createTable('instructions', instructions=>{
    instructions.increments()

    instructions.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

    instructions.integer('step_number')
        .notNullable()
        .unsigned()

    instructions.text('description', 255)
        .notNullable()
    
    instructions.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    instructions.text('amount', 128) 
    
  })

  .createTable('ingredients', ingredients=>{
    ingredients.increments()
    
    ingredients.text('name', 128)
        .notNullable()
    
    ingredients.integer('price')
        .notNullable()
        .unsigned()
  })
  
  .createTable('shopping_cart', shoppingCart=>{
        shoppingCart.increments()

        shoppingCart.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        
        shoppingCart.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')

        shoppingCart.integer('quantity')
            .notNullable()
            .unsigned()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('shopping_cart')
};
