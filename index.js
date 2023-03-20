ChatLib.chat("§bZenAddons Loaded");

//GUI 
import Settings from "./config"

//Misc Feature
import "./features/misc/CustomFov"

//GUI Open Command
register("command", (...args) => {
    let mode = args[0]
    if (mode == null) {
      Settings.openGUI()
    }
  }).setCommandName("zenaddons").setAliases("za","zen")