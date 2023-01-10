function randomNumber(limit){
    return Math.floor(Math.random()) * limit
}

function getRandomElement(arr){
    return arr[ randomNumber(this.saxonArmy.length) ]
}

function removeElementFromArray(arr, idx){
    const arrLength = arr.length
    let res = []
    for(let i=0; i<arrLength; i++){
        if( i!= idx ){
            res.push(arr[i])
        }
    }
    return res
}

// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        this.health -= damage
        return this.health>0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{

    // constructor(health, strength){
    //     super(health, strength)
    // }

    receiveDamage(damage){
        this.health -= damage
        return this.health>0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }

}

// War
class War {

    constructor(){
        this.vikingArmy = []
        this.saxonArmy  = []

    }

    addViking(oneViking){
        this.vikingArmy.push(oneViking)
    }

    addSaxon(oneSaxon){
        this.saxonArmy.push(oneSaxon)
    }
    
    vikingAttack(){

        let randomSaxonIndex = randomNumber(this.saxonArmy.length)
        let randomVikingIndex = randomNumber(this.vikingArmy.length)
        // let vikingDamage = this.vikingArmy[0].damage != null ? this.vikingArmy[0].damage : 0
        let vikingDamage = this.vikingArmy[randomVikingIndex].strength 
        
        let res = this.saxonArmy[randomSaxonIndex].receiveDamage(vikingDamage)

        // if( this.saxonArmy[randomSaxonIndex].health < 0 ){
        //     removeElementFromArray( this.saxonArmy, randomSaxonIndex )
        //     this.saxonArmy.splice( -1, 1 )
        // }

        if( res ==  `A Saxon has died in combat`){
            removeElementFromArray( this.saxonArmy, randomSaxonIndex )
            this.saxonArmy.splice( -1, 1 )
        }

        return res
    }
    
    saxonAttack(){
        let randomVikingIndex = randomNumber(this.vikingArmy.length)
        let randomSaxonIndex = randomNumber(this.saxonArmy.length)
        let saxonDamage = this.saxonArmy[randomSaxonIndex].strength

        let res = this.vikingArmy[randomVikingIndex].receiveDamage(saxonDamage)

        if (this.vikingArmy[randomVikingIndex].health<=0){
            removeElementFromArray( this.vikingArmy, randomVikingIndex )
            this.vikingArmy.pop()
            // this.vikingArmy.splice( -1, 1 )
        }

        // if (res == `${this.vikingArmy[randomVikingIndex].name} has died in act of combat`){
        //     removeElementFromArray( this.vikingArmy, randomVikingIndex )
        //     this.vikingArmy.pop()
        // }

        return res
    }
    
    showStatus(){
        let saxons = this.saxonArmy.length
        let vikings = this.vikingArmy.length

        if(saxons==0){
            return "Vikings have won the war of the century!"
        }else if(vikings==0){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    

}
