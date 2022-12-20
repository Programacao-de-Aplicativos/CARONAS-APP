const Sequelize= require('sequelize');
const db= require('./db');

const Bairros=db.define('bairros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
        
    },

    bairro:{
        type: Sequelize.STRING,
        allowNull: false,
    },

})



//cria caso nao exista
//Bairros.sync();

module.exports=Bairros;