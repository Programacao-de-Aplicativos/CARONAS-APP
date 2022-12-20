const Sequelize= require('sequelize');
const db= require('./db');

const Estacionamento=db.define('estacionamento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
        
    },

    estacionamento:{
        type: Sequelize.STRING,
        allowNull: false,
    },

})


//cria caso nao exista
//Estacionamento.sync();

module.exports=Estacionamento;