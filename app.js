
// helpers
import helpers from './helpers/index.js';

// constants
import BuildingTypes from './constants/BuildingTypes.js';

// components
import Building from './components/Building.js';

// globals
const context = document.getElementById('canvas').getContext('2d');

const state = {
    buildings: [],
    player: {
        x: 400,
        y: 300,
        speed: 10
    },
    upHeld: false,
    downHeld: false,
    rightHeld: false,
    leftHeld: false
};

const images = [
    {
        id: 'flat_a',
        src: 'assets/images/flat_a.jpg'
    },
    {
        id: 'roof',
        src: 'assets/images/roof.jpg'
    }
];

images.map(image => {
    image.img = new Image();
    image['img'].src = image['src'];
});

// instantiate buildings
state.buildings.push(
    new Building(context, { x: 100,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 50, z: 10, type: BuildingTypes.FLAT_A }),

    new Building(context, { x: 100,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 250, z: 10, type: BuildingTypes.FLAT_A }),

    new Building(context, { x: 100,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 450, z: 10, type: BuildingTypes.FLAT_A }),

    new Building(context, { x: 100,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 650, z: 10, type: BuildingTypes.FLAT_A }),

    new Building(context, { x: 100,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 850, z: 10, type: BuildingTypes.FLAT_A }),

    new Building(context, { x: 100,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 1050, z: 10, type: BuildingTypes.FLAT_A }),

    new Building(context, { x: 100,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 1250, z: 10, type: BuildingTypes.FLAT_A }),

    new Building(context, { x: 100,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 300,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 500,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 700,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 900,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1100,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1300,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1500,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1700,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 1900,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),
    new Building(context, { x: 2100,  y: 1450, z: 10, type: BuildingTypes.FLAT_A }),

);

let KEYCODE_LEFT = 37, KEYCODE_RIGHT = 39, KEYCODE_UP = 38, KEYCODE_DOWN = 40;

const handleKeyDown = e => {
    switch(e.keyCode) {
        case KEYCODE_LEFT:
            state.rightHeld = false;
            state.leftHeld = true;
            break;
        case KEYCODE_RIGHT:
            state.leftHeld = false;
            state.rightHeld = true;
            break;
        case KEYCODE_UP:
            state.downHeld = false;
            state.upHeld = true;
            break;
        case KEYCODE_DOWN:
            state.upHeld = false;
            state.downHeld = true;
            break;
    }
};

const handleKeyUp = e => {
    switch(e.keyCode) {
        case KEYCODE_LEFT:
            state.leftHeld = false;
            break;
        case KEYCODE_RIGHT:
            state.rightHeld = false;
            break;
        case KEYCODE_UP:
            state.upHeld = false;
            break;
        case KEYCODE_DOWN:
            state.downHeld = false;
            break;
    }
};

// disable page movement using cursor keys
window.addEventListener("keydown", e => {
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

const drawBuildings = () => {
    state.buildings.forEach(building => {
        building.draw(state.player, images);
    });

    state.buildings.forEach(building => {
        building.drawRoofTop(state.player, images);
    })
};

const drawPlayer = () => {
    context.fillStyle = '#ff0000';
    context.fillRect(400, 300, 5, 5);
};

/**
 * Perform all timely actions
 */
const update = () => {
    helpers.Canvas.clearCanvas(context, '#111133');

    drawBuildings();

    drawPlayer();

    if (state.upHeld) {
        state.player.y-=state.player.speed;
    }
    if (state.downHeld) {
        state.player.y+=state.player.speed;
    }
    if (state.leftHeld) {
        state.player.x-=state.player.speed;
    }
    if (state.rightHeld) {
        state.player.x+=state.player.speed;
    }

    requestAnimationFrame(() => {
        update();
    });
};

// call the updater
update();
