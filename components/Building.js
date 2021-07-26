import BuildingTypes from './../constants/BuildingTypes.js';

export default class Building {
    constructor(context, specs) {
        this.context = context;
        this.specs = specs;

        this.projWidth = 800;
        this.projHeight = 600;

        this.draw = this.draw.bind(this);
    }

    drawRoofTop(player, images) {
        const context = this.context;

        let { x, y, z, type } = this.specs;

        let roofTexture, roofWidth, roofHeight;

        if (type === BuildingTypes.FLAT_A) {
            roofWidth = 100;
            roofHeight = 100;

            roofTexture = images.filter(img => img.id === 'roof')[0];
        }

        context.drawImage(
            roofTexture['img'],
            x - (player.x - (this.projWidth / 2)), y - (player.y - (this.projHeight / 2)),
            roofWidth, roofHeight
        );
    }

    draw(player, images) {
        const context = this.context;

        let { x, y, z, type } = this.specs;

        let frontTexture, sideTexture, roofWidth, roofHeight;

        if (type === BuildingTypes.FLAT_A) {
            roofWidth = 100;
            roofHeight = 100;
            frontTexture = images.filter(img => img.id === 'flat_a')[0];
        }

        // this determines how fish-eyed the lens is
        const stretch = 1500;

        // RENDER HORIZONTAL VIEW
        context.save();

        // ensure the texture is drawn on the right side of the rooftop
        if ((y + (roofHeight / 2)) < player.y) {
            context.translate(x - (player.x - (this.projWidth / 2)) , y - (player.y - (this.projHeight / 2)) + roofHeight);
        } else {
            context.translate(x - (player.x - (this.projWidth / 2)), y - (player.y - (this.projHeight / 2)));
        }

        // make the texture width fit the rooftop "width" (but, in best case this is done manually in photoshop)
        context.scale(
            roofWidth / frontTexture.img.naturalWidth,
            1
        );

        // determines how far the image should "stretch up" according to the distance to the player
        context.scale(1, (y - player.y + (roofWidth / 2)) / stretch);

        // skewing takes care of the perspective
        const diffX = x - player.x + (roofWidth / 2);
        const skewX = diffX / (stretch / 3) / (roofHeight / 100);
        context.transform(1, 0, -skewX, -1, 0, 0);

        context.drawImage(
            frontTexture['img'],
            0, 0
        );

        context.restore();

        // RENDER VERTICAL VIEW
        context.save();

        // ensure the texture is drawn on the right side of the rooftop
        if ((x + (roofWidth / 2)) < player.x) {
            context.translate(x - (player.x - (this.projWidth / 2)) + roofWidth, y - (player.y - (this.projHeight / 2)));
        } else {
            context.translate(x - (player.x - (this.projWidth / 2)), y - (player.y - (this.projHeight / 2)));
        }

        // make the texture height fit the rooftop "height" (but, in best case this is done manually in photoshop)
        context.scale(
            1,
            roofHeight / frontTexture.img.naturalHeight
        );

        // determines how far the image should "stretch up" according to the distance to the player
        context.scale((x - player.x + (roofHeight / 2)) / stretch, 1);

        // skewing takes care of the perspective
        const diffY = y - player.y + (roofHeight / 2);
        const skewY = diffY / (stretch / 3) / (roofHeight / 100);
        context.transform(0, 1, -1, -skewY, 0, 0);

        context.drawImage(
            frontTexture['img'],
            0, 0
        );

        context.restore();
    }
}
