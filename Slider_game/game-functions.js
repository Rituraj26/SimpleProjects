var canvas = document.getElementById("game");
var scoreDisplay = document.getElementById("marks");

var c = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
var score = 0;
var life = 3;

//  Classes
class Game {
    constructor(gamewidth, gameheight) {
        this.gamewidth = gamewidth;
        this.gameheight = gameheight;
    }
    start() {
        this.stick = new Stick(this);
        this.blackball = new Blackball(this);
        this.greenball = new Greenball(this);
        this.redball = new Redball(this);
        this.blueball = new Blueball(this);

        var blackballs = [];

        this.gameObject = [
            this.blackball,
            this.greenball,
            this.redball,
            this.blueball,
            this.stick
        ];

        new InputHandler(this.stick);
    }
    draw(c) {
        this.gameObject.forEach(object => object.draw(c));
    }
    update(change) {
        this.gameObject.forEach(object => object.update(change));
    }
}

class Blackball {
    constructor(game) {
        this.image = document.getElementById("blackball");
        //add code here
        this.position = { x: 799, y: Math.round(Math.random() * 200) };
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
        this.size = 16;

        this.game = game;
    }

    reset() {
        this.position.x = 799;
        this.position.y = Math.round(Math.random() * 200);
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
    }

    draw(c) {
        //add code here
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        );
    }

    update(change) {
        // add code here
        this.position.x -= this.speed.x;
        if (this.position.x < 0) {
            this.position.x = 799;
            this.position.y = Math.round(Math.random() * 200);
            this.speed = { x: Math.round(Math.random() * 7) + 2 };
        }

        let topBall = this.position.x;
        let topStick = 10 + this.game.stick.width;
        let leftSideStick = this.game.stick.position.y;
        let rightSideStick =
            this.game.stick.position.y + this.game.stick.height;
        if (
            topBall <= topStick &&
            this.position.y >= leftSideStick &&
            this.position.y + this.size <= rightSideStick
        ) {
            score += 5;
            this.reset();
        }
    }
}

// Greeen ball

class Greenball {
    constructor(game) {
        //add code here
        this.image = document.getElementById("greenball");
        this.position = { x: 799, y: Math.round(Math.random() * 200) };
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
        this.size = 16;

        this.game = game;
    }

    reset() {
        this.position.x = 799;
        this.position.y = Math.round(Math.random() * 200);
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
    }

    draw(c) {
        //add code here
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        );
    }

    update(change) {
        // add code here
        this.position.x -= this.speed.x;
        if (this.position.x < 0) {
            this.position.x = 799;
            this.position.y = Math.round(Math.random() * 200);
            this.speed = { x: Math.round(Math.random() * 7) + 2 };
        }

        let topBall = this.position.x;
        let topStick = 10 + this.game.stick.width;
        let leftSideStick = this.game.stick.position.y;
        let rightSideStick =
            this.game.stick.position.y + this.game.stick.height;
        if (
            topBall <= topStick &&
            this.position.y >= leftSideStick &&
            this.position.y + this.size <= rightSideStick
        ) {
            score += 5;
            this.reset();
        }
    }
}

class Redball {
    constructor(game) {
        //add code here
        this.image = document.getElementById("redball");
        this.position = { x: 799, y: Math.round(Math.random() * 200) };
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
        this.size = 16;
        this.flag = 1;

        this.game = game;
    }

    reset() {
        this.position = { x: 799, y: Math.round(Math.random() * 200) };
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
        this.size = 16;
        this.flag = 1;
    }

    draw(c) {
        //add code here
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        );
    }

    update(change) {
        // add code here
        this.position.x -= this.speed.x;
        if (this.position.x < 0) {
            this.position.x = 799;
            this.position.y = Math.round(Math.random() * 200);
            this.speed = { x: Math.round(Math.random() * 7) + 2 };
            this.flag = 1;
        }

        let topBall = this.position.x;
        let topStick = 10 + this.game.stick.width;
        let leftSideStick = this.game.stick.position.y;
        let rightSideStick =
            this.game.stick.position.y + this.game.stick.height;
        if (
            this.flag === 1 &&
            topBall <= topStick &&
            this.position.y >= leftSideStick &&
            this.position.y + this.size <= rightSideStick
        ) {
            life--;
            this.reset();
        }
        if (life === 0) {
            alert("You Lose");
            life = 3;
            score = 0;
        }
    }
}
// blue ball

class Blueball {
    constructor(game) {
        //add code here
        this.image = document.getElementById("blueball");
        this.position = { x: 799, y: Math.round(Math.random() * 200) };
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
        this.size = 16;

        this.game = game;
    }

    reset() {
        this.position.x = 799;
        this.position.y = Math.round(Math.random() * 200);
        this.speed = { x: Math.round(Math.random() * 7) + 2 };
    }

    draw(c) {
        //add code here
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        );
    }

    update(change) {
        // add code here
        this.position.x -= this.speed.x;
        if (this.position.x < 0) {
            this.position.x = 799;
            this.position.y = Math.round(Math.random() * 200);
            this.speed = { x: Math.round(Math.random() * 7) + 2 };
        }

        let topBall = this.position.x;
        let topStick = 10 + this.game.stick.width;
        let leftSideStick = this.game.stick.position.y;
        let rightSideStick =
            this.game.stick.position.y + this.game.stick.height;
        if (
            topBall <= topStick &&
            this.position.y >= leftSideStick &&
            this.position.y + this.size <= rightSideStick
        ) {
            score += 5;
            this.reset();
        }
    }
}

class Stick {
    constructor(game) {
        // add code here
        this.gameheight = game.gameheight;

        this.width = 30;
        this.height = 100;

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: 10,
            y: game.gameheight - this.height - 10
        };
    }

    moveUp() {
        //add code here
        this.speed = -this.maxSpeed;
    }
    moveDown() {
        // add code here
        this.speed = this.maxSpeed;
    }

    draw(c) {
        // add code here
        c.fillStyle = "yellow";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(change) {
        // add code here
        if (!change) return;
        this.position.y += this.speed;
        if (this.position.y < 0) this.position.y = 0;

        if (this.position.y + this.height > this.gameheight) {
            this.position.y = this.gameheight - this.height;
        }
    }
}

class InputHandler {
    constructor(stick) {
        document.addEventListener("keyup", event => {
            switch (event.keyCode) {
                case 38:
                    stick.moveUp();
                    break;
                case 40:
                    stick.moveDown();
                    break;
            }
        });
    }
}

// Classes end

//  Raw code

var previous = 0;

var game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function gameLoop(position) {
    var change = position - previous;
    previous = position;
    c.clearRect(0, 0, innerWidth, innerHeight);

    game.draw(c);
    game.update(change);

    c.fillStyle = "black";
    c.font = "20px Georgia";
    c.fillText(`score: ${score}`, 700, 30);
    c.fillText(`life: ${life}`, 40, 30);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
