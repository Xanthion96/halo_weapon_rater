import { getRandomTitle } from "./modules/gameTitleData.js";
import { getRandomWeapon } from "./modules/weaponData.js";
import { getRandomComment } from "./modules/commentData.js";

//Grab the random title, weapon, and comment from the modules, and string them together into one sentence on the log.
console.log(getRandomTitle() + "'s " + getRandomWeapon() + " " + getRandomComment());