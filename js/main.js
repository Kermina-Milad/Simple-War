function Character(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.elements = new UIElements(this.name);
}

function UIElements(name) {
    this.attackBtn = document.querySelector(`#${name}_attack`);
    this.healthkBtn = document.querySelector(`#${name}_make_health`);
    this.alive = document.querySelector(`#${name}_alive`);
    this.progress = document.querySelector(`.${name}_health span`);
}

Character.prototype.attack = function(opponent) {
    if (opponent.health > 0) {
        opponent.health -= this.strength;
        opponent.elements.progress.style.width = `${opponent.health}%`
    } else {
        opponent.elements.attackBtn.remove();
        opponent.elements.healthkBtn.remove();
        opponent.elements.alive.innerHTML = `he is dead`

    }

}
Character.prototype.status = function() {
    console.log(`name: ${this.name}`);
    console.log(`strength: ${this.strength}`);
    console.log(`health: ${this.health}`);

}
Character.prototype.makeHealth = function() {
    if (this.health < 100) {
        this.health += 10;
        this.elements.progress.style.width = `${this.health}%`
    }
    if (this.health > 100) {
        this.health = 100;
        this.elements.progress.style.width = `${this.health}%`
    }

}

let nartoo = new Character('nartoo', 10, 100);
let sasakii = new Character('sasakii', 5, 100);
nartoo.elements.attackBtn.addEventListener('click', function() {
    nartoo.attack(sasakii);
})
sasakii.elements.attackBtn.addEventListener('click', function() {
    sasakii.attack(nartoo);
})
nartoo.elements.healthkBtn.addEventListener('click', function() {
    nartoo.makeHealth();
})
sasakii.elements.healthkBtn.addEventListener('click', function() {
    sasakii.makeHealth();
})