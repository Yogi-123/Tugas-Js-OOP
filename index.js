class enemy {
    constructor ( name, speed, healthPoint, attackPoint, isDead) {
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead
        
        
    }
    attack () {
        this.healthPoint -=50
    }
    confused () {
        this.speed -=50
    }
}

class beast extends enemy {
    constructor (name, speed, healthPoint, attackPoint, isDead)
    super (name, speed, healthPoint, attackPoint, isDead)

    beastRage () {
        this.healthpoint +=300
    }
}

class flyingBeast extends enemy {
    constructor (name, speed, healthPoint, attackPoint, isDead)
    super (name, speed, healthPoint, attackPoint, isDead)

    wingAttack () {
        this.speed +=100
    }

}

let beast1 = new beast ("nemean", 50, 500, 300, false)