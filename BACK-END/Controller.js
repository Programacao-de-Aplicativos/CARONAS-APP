const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const app=express();
const mysql = require('mysql');
const Sequelize = require('sequelize');
const op = Sequelize.Op;



//default opttion 
app.use(fileUpload());

//Tamplating engine 
app.engine('hbs', exphbs.engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(cors());
//configurando o borry parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let postagem=models.PostCar;

app.post('/login', async (req,res)=>{
    let response=await user.findOne({
        where: {RA: req.body.RA, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        response = response.toJSON();
        res.send(response);
    }
});

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

/*app.get('/', (req,res)=>{
    res.send('Servidor Rodando!');
});*/

//parte da postagem aqui!!

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


app.get('/', async(req, res)=>{
    postagem.findAll({order:[['id', 'DESC']],
        where:{
            flag:0,
            horario: {
                [op.and]: {
                    [op.gt]: new Date(),
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

app.get('/create', (req,res)=>{
    const filename = Date.now()+'_'+ req.files.sampleFile.name;
    const file = req.files.sampleFile;
    //let sampleFile;
    let uploadPath;

    if(!req.files|| Object.keys(req.files).length === 0){
    	return res.status(400).send('Nenhum arquivo foi selecionado');
    }

    //name of the input is samplefile
    //sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + filename;
    console.log(file);
    //req.body.imagem = file;

    //Use mv() to place file on server
    file.mv(uploadPath, function(err){
        if(err)return res.status(500).send(err);
    });
    

    res.send('Arquivo enviado!');
});

let port=process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando');
});
    


/*exphbs.registerHelper("ifEqual", function(variable1, variable2, options){
    if(variable1 == variable2){
        return options.fn(this);
    }
    return options.inverse(this);
});*/


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
            //response.vagas = req.body.vagas;
            if(response.vagas === 0){
                response.flag = 1;
            }
            response.save();
            res.send('Carona reservada! :)');
        }
    });
});


app.get('/motorista/:id', async(req,res)=>{
    const motoristaId = await user.findOne({where: {postId: req.params.id}
    });
     if(motoristaId === null){
        res.send(JSON.stringify('error'));
    }else{
        motoristaId = motoristaId.toJSON();
        res.send(motoristaId);
    }

})

//ligando com o banco de dados
//let postagem=models.Postagem;
/*app.post('/registra', async(req, res) => {
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
});
*/

















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