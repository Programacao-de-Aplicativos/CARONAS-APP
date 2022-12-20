const Sequelize= require('sequelize');
const db= require('./db');

const User=db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
        
    },

    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    ra:{
        type:Sequelize.STRING,
        allowNull:false,
    },

   
    avaliation:{
        type: Sequelize.INTEGER,
        allowNull: null,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});


//cria caso nao exista


module.exports=User;