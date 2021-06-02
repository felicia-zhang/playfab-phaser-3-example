import GameScene from "../components/game";
import { fontFamily } from "../utils/font";

export default class BaseItem extends Phaser.GameObjects.Sprite {
    level: number
    totalLevel: number
    scene: GameScene
    descriptionBox: Phaser.GameObjects.Text

    constructor(scene: GameScene, x, y, texture, level, totalLevel) {
      super(scene, x, y, texture);
      this.scene = scene
      this.level = level
      this.totalLevel = totalLevel


    this.setInteractive().on('pointerover', this.createDescriptionBox).on('pointerout', () => {this.descriptionBox.destroy(true)})
    }

    createDescriptionBox(pointer: Phaser.Input.Pointer, localX, localY, event) {
        this.descriptionBox = this.scene.add.text(pointer.x, pointer.y, "Description", { fontFamily: fontFamily })
    }
  }