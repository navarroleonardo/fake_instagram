const { sequelize, Usuario } = require('../models');

// Usuario.findAll().then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
//         sequelize.close();
//     }
// )

// Usuario.findByPk(1)
// .then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close()
//     }
// )

// Usuario.create(
//     {
//         nome: "Ádrian",
//         email: "teste@teste.com",
//         senha: "semcriptografar"
//     }
// )

// Usuario.findAll({
//     where: {
//         email: 'teste@teste.com'
//     }
// }).then(
//     data => {
//         console.log(data.map(u => u.toJSON()))
//         sequelize.close
//     }
// )

Usuario.update({
    email: "teste@dh.com",
    senha: "perguntadoleo"
}, {
    where: {
        id: 5
    }
}).then(
    () => sequelize.close()
);