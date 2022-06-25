const usuarios = [
    {
        id: 1,
        nome: 'Crotilde'
    },
    {
        id: 2,
        nome: 'Godofredo'
    },
    {
        id: 3,
        nome: 'Amélia'
    },
    {
        id: 4,
        nome: 'Joséfina'
    }
]

const controller = require("./indexcontroller")

const controlle = {}

//controller.index = (req, res) => {
 //   res.render('usuarios', {
 //       title: 'Página dos Usúarios',
  //     usuarios
  //  })
//}

controller.show= (req, res) => {
    const { id } = req.params
    if(id) {
    res.render('usuario', {
        title: 'Página do Usuário',
        usuario: usuarios.find(user => user.id == id)
    })
} else {
        res.render('usuarios', {
            title: 'Página dos Usúarios',
           usuarios
        })
}
}


module.exports = controller