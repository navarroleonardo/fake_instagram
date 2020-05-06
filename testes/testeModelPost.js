const { sequelize, Post } = require('../models');

// Post.findAll().then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
//         sequelize.close();
//     }
// )

Post.create(
    {
        texto: "Olá galerinha do youtube!",
    }
)