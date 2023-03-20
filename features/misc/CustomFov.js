import Settings from "../../config"

register('tick', () => {
    if (!Settings.customFovToggle) return
    Client.settings.setFOV(Settings.customFov)
});