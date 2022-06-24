const controller = require("./indexcontroller")

const controlle = {}

controller.index = (req, res) => {
    res.render('usuarios', {
        title: 'Página dos Usúarios'
    })
}

controller.show = (req, res) => {
    res.render('usuario', {
        title: 'Página do Usúario'
    })
}

module.exports = controller