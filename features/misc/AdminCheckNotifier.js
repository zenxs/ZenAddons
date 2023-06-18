ChatLib.chat("A Loaded");
import Settings from "../../config"
//import { isAdventure } from "../../utils/Utils"

const GameType = Java.type('net.minecraft.world.WorldSettings').GameType;
const isAdventure = Client.getMinecraft().field_71442_b.func_178889_l() == GameType.ADVENTURE;

register('tick', () => {
    //if (!Settings.adminCheckNotifier) return;
    if (isAdventure == true) {ChatLib.chat("ADVENTUREMODE!") else return};
});