const Sequelize= require('sequelize');



const sequelize= new Sequelize("mydb","root","00E061479638fibra",{
    host:'localhost',
    dialect:'mysql'
});


sequelize.authenticate().
then(function(){
    console.log("deu bom");

}).catch(function(){
    console.log("erro");
});


module.exports= sequelize;