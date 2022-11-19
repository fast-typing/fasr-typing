const User = require('./user')

class controller {
    async registration (req, res) {
        try {
            console.log('1')
            const {username, password, wpm} = req.body 
            const candidate = await User.findOne({username})

            if (candidate) {
                return res.status(400).json({meessage:"Уже есть такой :/"})
            }

            const user = new User ({username, password, wpm})
            await user.save()
            return res.json({message: "Ты зарегестрирован!"})
        } catch (e) {
            console.log(e)
        }
    }

    async login (req, res) {
        try {
            const {username, password} = req.body 
            const user = await User.findOne({username})

            if (!user) {
                return res.status(400).json({meessage:"Такого нету :/"})
            }

            if (user.password != password) {
                return res.status(400).json({message:"Пароль не правильный :/"})
            }

            return res.json({message: `Вы вошли`})
        } catch (e) {
            console.log(e)
        }
    }    

    async getUsers (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new controller()