const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const User = require('./models/User');
const bodyParser = require('body-parser');
const session = require("express-session")
const flash = require("connect-flash")
var handlebars = require('express-handlebars')
const carro = require('./models/Carro')
const jwt = require('jsonwebtoken');
const SECRET = "orracap"
const Carona = require('./models/Carona');
const { timeStamp } = require('console');
const Estacionamento = require('./models/Estacionamento');
const Bairros = require('./models/Bairros');
const UsuarioCarro = require('./models/UsuarioCarona');

//const LocalStrategy =require('passport-local').Strategy;

let logado;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', handlebars.engine())

app.set('view engine', "handlebars")

app.set('views', 'views')



app.use(session({
    secret: SECRET,
    resave: true,
    saveUnitialized: true
}))
app.use(flash())

function verificaJWT(req, res, next) {
    const token = req.headers['x-acess-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end();

        req.userId = decoded.userId;
        next();
    })
}

app.use((req, res, next) => {
    res.locals.sucesso = req.flash("Deu certo");
    res.locals.erro = req.flash("Deu erro");
    next()
})
app.get("/", async (req, res) => {
    res.render('index');

});
app.get("/Login", async (req, res) => {

    res.render('login');

});
app.get("/Corridas", async (req, res) => {
    const ve = await Carona.findAll();// comentado pq como nao tem dados da erro na hora do render

    res.json(ve)

});
app.get("/Cadastro", async (req, res) => {
    res.sendFile(__dirname + "/cadastro.html");

});
app.get("/Carro", async (req, res) => {
    res.render('carro')

});
app.get("/Home", async (req, res) => {
    var token=localStorage.getItem('token');
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end();

        req.userId = decoded.userId;
        console.log("teste: " + req.userId);
        res.render('Home');
    })

});

app.get("/AdicionarCorridas", async (req, res) => {
    //const auth=req.headers.authorization;

    //console.log("entrou:"+auth);
    logado = req.userId
    res.render('adicionarCorridas')

});

app.post("/AdicionarCorridas", async (req, res) => {
    console.log(localStorage.getItem('token'));
    const { preco, horario, estacionamento, bairro } = req.body
    const esta = await Estacionamento.findOne({ where: { id: estacionamento } });
    const ba = await Bairros.findOne({ where: { id: bairro } });
    const corrida = await Carona.create({
        preco, horario, estacionamento: esta.id, destino: ba.id
    });
    //res.json(corrida)


    //const ve = await Carona.findOne({where:{id:userNovo.id}});
    //res.json(ve);
    res.redirect('/Home')


});
app.post("/Cadastro", async (req, res) => {

    const { name, ra } = req.body;

    var avaliation = 0;
    const password = await bcrypt.hash(req.body.password, 10);

    const ve = await User.findOne({ where: { ra: ra } });
    if (ve instanceof User) {
        res.send("Esse usuario ja existe");
    } else {
        const userNovo = User.create({
            name, ra, avaliation, password
        });
        res.send("deu bom");
    }
});
app.post("/Login", async (req, res) => {
    const { ra, password } = req.body;
    const ve = await User.findOne({ where: { ra: ra } });
    console.log(ve.ra);
    const decodificaSenha = await bcrypt.compare(password, ve.password);
    if (decodificaSenha) {
        var token = jwt.sign({ userId: ve.id }, SECRET, { expiresIn: 30000 })
        if (typeof localStorage === "undefined" || localStorage === null) {
            var LocalStorage = require('node-localstorage').LocalStorage;
            localStorage = new LocalStorage('./scratch');
        }
        localStorage.setItem('token', token)
        //localStorage.setItem('teste',token);
        res.json(token);
    } else {
        res.send("Certifique se seus dados estão corretos ou se cadastre");
    }
});
app.post("/Carro", async (req, res) => {
    var id;
    var token=localStorage.getItem('token');
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end();

        req.userId = decoded.userId
        id=req.userId})
    const ve = await User.findOne({ where: { id: id } });
    const { placa, marca, modelo, capacidade } = req.body;
    if (placa != null && marca != null && modelo != null) {
        const carroNovo = carro.create({
            modelo, placa, marca, capacidade, motorista: ve.id
        });
        res.redirect('/Home');
    } else {
        res.send("Certifique se seus dados estão corretos ou vazios");
    }
});
app.post("/Corridas", async (req, res) => {
    var token=localStorage.getItem('token');
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end();

        req.userId = decoded.userId;
        const ve =  Carona.findOne({ where: { id: req.userId } });
        const decodificaSenha =  bcrypt.compare(password, ve.password);
        if (decodificaSenha) {
            res.redirect('/Home');
        } else {
            res.send("Certifique se seus dados estão corretos ou se cadastre");
        }
    })

});
app.listen(8080, () => {
    console.log("Iniciou o server na 8080: localhost:8080");
});