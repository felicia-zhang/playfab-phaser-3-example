import { PlayFabClient } from "playfab-sdk";
import { textStyle } from "../utils/constants";
import AScene from "./AScene";

class MenuScene extends AScene {
	constructor() {
		super("Menu");
	}

	create() {
		this.cameras.main.fadeIn(500, 0, 0, 0);
		this.add.image(400, 300, "sky");
		this.add.text(400, 16, "Menu", textStyle).setOrigin(0.5, 0.5).setAlign("center");

		PlayFabClient.GetCatalogItems({ CatalogVersion: "1" }, (error, result) => {
			this.registry.set("CatalogItems", result.data.Catalog);

			PlayFabClient.GetUserInventory({}, (error, result) => {
				this.registry.set("SB", result.data.VirtualCurrency.SB);
				this.registry.set("IC", result.data.VirtualCurrency.IC);
				this.registry.set("Inventories", result.data.Inventory);

				this.add
					.text(400, 200, "START", textStyle)
					.setOrigin(0.5, 0.5)
					.setAlign("center")
					.setInteractive({ useHandCursor: true })
					.on("pointerup", () => {
						this.cameras.main.fadeOut(500, 0, 0, 0);
						this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
							this.scene.start("Map");
						});
					});
				this.add
					.text(400, 250, "LEADERBOARD", textStyle)
					.setOrigin(0.5, 0.5)
					.setAlign("center")
					.setInteractive({ useHandCursor: true })
					.on("pointerup", () => {
						this.cameras.main.fadeOut(500, 0, 0, 0);
						this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
							this.scene.start("Leaderboard");
						});
					});
			});
		});
	}

	update() {
		if (!this.registry.has("FinishedSignIn")) {
			this.scene.start("Signin");
		}
	}
}

export default MenuScene;
