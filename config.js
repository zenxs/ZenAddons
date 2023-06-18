import { 
    @Vigilant,
@TextProperty,
@ColorProperty,
@ButtonProperty,
@SwitchProperty,
@SelectorProperty,
@SliderProperty,
Color
} from "Vigilance";

@Vigilant("ZenAddons")
class Settings {

  //Misc

  @SwitchProperty({
    name: "Toggle Custom FOV",
    description: "",
    category: "Misc",
    subcategory: ""
  })
  customFovToggle = false;

  @SliderProperty({
    name: "Custom FOV",
    description: "Allows you to set custom FOV",
    category: "Misc",
    subcategory: "",
    min: 1,
    max: 200
  })
  customFov = 110;

  @SwitchProperty({
    name: "Adventure Mode Notifier",
    description: "Alerts when you are getting admin checked",
    category: "Misc",
    subcategory: ""
  })
  adminCheckNotifier = false;

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();