const pet = {
    name: "Penelope",
    species: "canine",
    nicknames: [
        "P",
        "Sweet P"
    ],
    age: 1,
    bark: function() {
        window.alert("WOOF!")
    },
    yawn: function() {
        window.alert(`${this.name} yawns...`)
    },
    stretch: function() {
        window.alert(`${this.name} stretches...`)
    },
    favoriteToys: [

    ],
    play: function(toy) {
        if (toy.toLowerCase().search("ball") !== -1) {
            //add toy to array
            this.favoriteToys.push(toy)
        } else if (toy.toLowerCase().search("frisbee") !== -1) {
            this.favoriteToys.push(toy)
        }
    }

}

pet.bark()
pet.yawn()
pet.stretch()

pet.play("tennis ball")
pet.play("floatable frisbee")
