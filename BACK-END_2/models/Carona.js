const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./User');
const Estacionamento = require('./Estacionamento');
const Bairros = require('./Bairros');
const usuarioCarona= require('./UsuarioCarona')

const Carona = db.define('caronas', {
   id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    horario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})
Estacionamento.hasMany(Carona, {
    foreignKey: 'estacionamento'
})
Bairros.hasMany(Carona, {
    foreignKey: 'destino'
})

Carona.belongsToMany(User,{
    through:{
        model: usuarioCarona
    },
     foreignKey:'idCarona',
     constraint: true
  
})

User.belongsToMany(Carona,{
    through:{
        model: usuarioCarona
    },
     foreignKey:'idUsuario',
     constraint: true
  
})

//cria caso nao exista
//Carona.sync({force:true})


module.exports = Carona;