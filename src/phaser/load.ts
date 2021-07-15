import GameScene from "./game";
import SigninScene from "./signin";
import sky from "../assets/sky.png";
import bonfire from "../assets/bonfire.png";
import igloo from "../assets/igloo.png";
import snowball from "../assets/snowball.png";
import icicle from "../assets/icicle.png";
import icicles10 from "../assets/icicles10.png";
import icicles50 from "../assets/icicles50.png";
import icicles100 from "../assets/icicles100.png";
import icicles500 from "../assets/icicles500.png";
import snowman from "../assets/snowman.png";
import mittens from "../assets/mittens.png";
import vault from "../assets/vault.png";
import lock from "../assets/lock.png";
import penguin1 from "../assets/penguin1.png";
import penguin2 from "../assets/penguin2.png";
import penguin3 from "../assets/penguin3.png";
import icebiome from "../assets/icebiome.png";
import savannabiome from "../assets/savannabiome.png";
import magmabiome from "../assets/magmabiome.png";
import marinebiome from "../assets/marinebiome.png";
import tropicalbiome from "../assets/tropicalbiome.png";
import mountain1 from "../assets/mountain1.png";
import mountain2 from "../assets/mountain2.png";
import mountain3 from "../assets/mountain3.png";
import light1 from "../assets/light1.png";
import light2 from "../assets/light2.png";
import light3 from "../assets/light3.png";
import light4 from "../assets/light4.png";
import star from "../assets/star.png";
import title from "../assets/title.png";
import AScene from "./AScene";

class Load extends AScene {
	constructor() {
		super("Load");
	}

	preload() {
		this.load.image("sky", sky);
		this.add.image(400, 300, "sky");
		this.add.text(400, 300, "Loading");

		this.load.image("bonfire", bonfire);
		this.load.image("igloo", igloo);
		this.load.image("snowball", snowball);
		this.load.image("icicle", icicle);
		this.load.image("icicles10", icicles10);
		this.load.image("icicles50", icicles50);
		this.load.image("icicles100", icicles100);
		this.load.image("icicles500", icicles500);
		this.load.image("snowman", snowman);
		this.load.image("mittens", mittens);
		this.load.image("vault", vault);
		this.load.image("lock", lock);
		this.load.image("penguin1", penguin1);
		this.load.image("penguin2", penguin2);
		this.load.image("penguin3", penguin3);
		this.load.image("icebiome", icebiome);
		this.load.image("savannabiome", savannabiome);
		this.load.image("magmabiome", magmabiome);
		this.load.image("marinebiome", marinebiome);
		this.load.image("tropicalbiome", tropicalbiome);
		this.load.image("mountain1", mountain1);
		this.load.image("mountain2", mountain2);
		this.load.image("mountain3", mountain3);
		this.load.image("light1", light1);
		this.load.image("light2", light2);
		this.load.image("light3", light3);
		this.load.image("light4", light4);
		this.load.image("star", star);
		this.load.image("title", title);
	}

	create(finishLoading: () => any) {
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		this.cameras.main.fadeOut(500, 0, 0, 0);
		this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
			finishLoading();
			this.scene.start("Signin");
		});
	}
}

export default Load;