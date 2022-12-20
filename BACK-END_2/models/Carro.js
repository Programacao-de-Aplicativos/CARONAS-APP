const Sequelize= require('sequelize');
const db= require('./db');
const User= require('./User');

const Carro=db.define('carros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
        
    },

    modelo:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    placa:{
        type:Sequelize.STRING,
        allowNull:false,
    },

    marca:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    capacidade:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    
});

Carro.belongsTo(User,{foreignKey :'motorista', allowNull:false
});


//cria caso nao exista
//Carro.sync({force:true})

module.exports=Carro;