const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    edad: {type: Number, require: true},
    equipo: {type: String}
});

const User = mongoose.model('user', schema);

module.exports = User;




//Logica nuestra sin Mongoose

/*class User {
    
    constructor() {
        this.users = [];
        
    }

    getUsers(){
        return this.users;
    }

    getById(id){
        //Guardamos en la variable user el usuario que tiene esa id
        const user = this.users.find(user => {
            return user.id == id});

            return user;
    }

    store(user){
        this.users.push(user);
        return this.users
    }

    update(id, data){
        //Encuentra al usuario que tiene el id que recibnimos por parametro
        const user = this.users.find(user => {
            return user.id == id});
        // Guardamos en update la info que ya tenia ese usuario, mas la nueva
        const update = {...user, ...data};
        //sacamos el indicie que ocupa ese usuario en el arreglo
        const indice = this.users.indexOf(user)
        //Con el indice hacemos que ese objeto, pase a ser el nuevo usuario
        this.users[indice] = update      

        return update;
    }

    delete(id){
        //Guardamos en el array todos los usuarios que no tienen esa id, por lo tanto el de la id se borra
        this.users = this.users.filter(user => {
            return user.id != id});

        return this.users;
    }
}

module.exports = new User();

*/