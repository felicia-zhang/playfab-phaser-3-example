import AScene from "./AScene";

class SigninScene extends AScene {
	constructor() {
		super("Signin");
	}

	create() {
		this.add.image(400, 300, "sky");
	}

	update() {
		if (this.registry.has("FinishedSignIn")) {
			this.scene.start("Menu");
		}
	}
}

export default SigninScene;