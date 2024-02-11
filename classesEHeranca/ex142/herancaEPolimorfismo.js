/*Herança e Polimorfismo*/

class Animal {
    falar(){
        return "O animal faz um som";
    }
}

class Cao extends Animal {
    falar(){
        return "O cão late";
    }
}

class Gato extends Animal {
    falar(){
        return "O gato mia";
    }
}

const cao = new Cao();
console.log(cao.falar());

const gato = new Gato();
console.log(gato.falar());