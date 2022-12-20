const Sequelize= require('sequelize');
const db= require('./db');
const carona= require('./Carona');
const user= require('./User');

const UsuarioCarona=db.define('usuarioCarona', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
        
    }

});


//cria caso nao exista

//UsuarioCarona.sync({force:true})

module.exports=UsuarioCarona;