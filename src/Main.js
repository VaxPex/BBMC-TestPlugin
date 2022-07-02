const PluginStructure = require("../../../src/plugin/PluginStructure");

class Main extends PluginStructure {
	successfullyEnabled() {
		this.log.info("Plugin loaded!");
		this.log.info("Author: " + this.description.author);
	}

	successfullyDisabled() {
		this.log.info("Plugin unloaded!");
	}

	handleEvents() {
		this.server.eventsHandler.on("join", async (joinEvent) => {
			this.log.info("Player joining " + joinEvent.player.chainData[2]["extraData"]["displayName"]);
		});
	}
}

module.exports = Main;