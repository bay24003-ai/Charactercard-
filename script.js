const character = {
    name: "Wyatt the Brave",
    class: "Knight",
    level: 1,
    health: 100,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Vd-Orig.png/240px-Vd-Orig.png",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.getElementById("message").textContent =
                `${this.name} has died!`;
        }

        updateCard();
    },

    levelUp() {
        this.level += 1;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById("character-image").src = character.image;
}

document.getElementById("attack-btn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelup-btn").addEventListener("click", () => {
    character.levelUp();
});

updateCard();