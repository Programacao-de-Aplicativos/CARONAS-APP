const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
//const models=require('./models');
//const exphbs = require('express-handlebars');
//const fileUpload = require('express-fileupload');
const app=express();
//const mysql = require('mysql');
//const Sequelize = require('sequelize');
//const op = Sequelize.Op;

//default opttion 
//app.use(fileUpload());

//Tamplating engine 
//app.engine('hbs', exphbs.engine({ extname: '.hbs'}));
//app.set('view engine', 'hbs');

app.use(cors());
//configurando o borry parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//let user=models.User;
//let postagem=models.PostCar;

app.post('/login', async (req,res)=>{
    /*
    let response=await user.findOne({
        where: {RA: req.body.RA, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
    */
   console.log('login')
   console.log(req.body.ra)
   //return false
   res.json(req.body);
});

app.get('/', async (req,res)=>{
    console.log('entrei')
    res.redirect('/login')

});

app.get('/login', async (req,res)=>{
    console.log('getLogin')
    res.redirect('/login')

});

/*
app.post('/create',async(req,res)=>{
    let reqs=await models.User.create({
        'RA' :req.body.RA,
        'nome' :req.body.nome,
        'senha' :req.body.senha,
        'cpf' :req.body.cpf,
        'rg' :req.body.rg,
        'classificacao' :req.body.classificacao,
        'imagem' :req.body.sampleFile,
        'createAt' :new Date(),
        'updatedAt' :new Date()
    });
});
*/

/*app.get('/', (req,res)=>{
    res.send('Servidor Rodando!');
});*/

//parte da postagem aqui!!

/*
app.get('/', async(req, res)=>{

    postagem.findAll({order:[['id', 'DESC']],
        where:{
            flag:0,
            horario: {
                [op.and]: {
                    [op.lt]: new Date(),
                }
            }
       } 
    }).then(function(postagens) {
        res.render('posts', {postagens: postagens.map(posts => posts.toJSON())})
    })
});

app.get('/cadastro', (req,res)=>{
    res.render('index');
});

app.post('/add/image', (req,res)=>{
    let sampleFile;
    let uploadPath;

    if(!req.files|| Object.keys(req.files).length === 0){
    	return res.status(400).send('Nenhum arquivo foi selecionado');
    }

    //name of the input is samplefile
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload' + sampleFile.name;
    console.log(sampleFile);
    req.body.imagem = sampleFile;

    //Use mv() to place file on server
    sampleFile.mv(uploadPath, function(err){
        if(err)return res.status(500).send(err);
    });
    

    //res.send('Arquivo enviado!');
});
*/

let port=process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando');
});
    

//connection  pool
/*const pool = mysql.createPool({
    conectionLimit :10,
    host : 'localhost',
    user :'root',
    password : 'root',
    database : 'Caronas' 
});
pool.getConnection((err, connection)=>{
    console.log('Connected!');
});*/

/*exphbs.registerHelper("ifEqual", function(variable1, variable2, options){
    if(variable1 == variable2){
        return options.fn(this);
    }
    return options.inverse(this);
});*/

/*
app.get('/postagem/:id', async(req, res) => {
    const postagemId = await postagem.findOne({where: {id: req.params.id}
    }).then(function(postInd){
        if(postInd === null){
            console.log('Not found!');
        }else{
            postInd = postInd.toJSON();
            res.render('leiamais', {postInd:postInd});
            console.log(postInd);
        }
    });  
});


app.get('/postagens/add', (req, res) => {
    res.render('addpostagens');
});
          
app.get('/aceitar/:id', async(req, res) => {
    const caronaId = await postagem.findOne({where: {id: req.params.id}
    }).then(function(response) {
        if(response === null){
            console.log('Not found!');
        }else{
            response.vagas = (response.vagas)- 1;
            if(response.vagas === 0){
                response.flag = 1;
            }
            response.save();
            res.send('Carona reservada! :)');
        }
    });
});
*/

//ligando com o banco de dados
//let postagem=models.Postagem;
app.post('/postagens/nova', async(req, res) => {
    let requi=await models.PostCar.create({

        'veiculo' :req.body.veiculo,
        'horario' :req.body.horario,
        'vagas' :req.body.vagas,
        'destino' :req.body.destino,
        'estacionamento' :req.body.estacionamento,
        'flag' :0,
        'createAt' :new Date(),
        'updatedAt' :new Date()
    });
    if(requi){
        res.send(JSON.stringify('Carona cadastrada com sucesso!'));
    }
});

//Envio do token
/*import config from './config/config';
async function sendtoken(){
    let response=await fetch(input:config.urlRoot+'token',init:{
        method:POST,
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(value:{
            token:expoPushToken
        });
    });
}*/