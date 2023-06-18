const prefix = "&c[&bZenAddons&c]"

const mc = Client.getMinecraft();

const GameType = Java.type('net.minecraft.world.WorldSettings').GameType;
const isAdventure = Client.getMinecraft().field_71442_b.func_178889_l == GameType.ADVENTURE;

export {prefix, GameType, isAdventure}