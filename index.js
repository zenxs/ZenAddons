//GUI 
import Settings from "./config"

//Dungeons

//SB UI
//soon!

//Misc Feature
import "./features/misc/CustomFov"
//import "./features/misc/AdminCheckNotifier"

//GUI Open Command
register("command", (...args) => {
    let mode = args[0]
    if (mode == null) {
      Settings.openGUI()
    }
  }).setCommandName("zenaddons").setAliases("za","zen")