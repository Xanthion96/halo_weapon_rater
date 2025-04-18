//Only Weapons in every Halo game.
const weaponData = ["Assault Rifle", "Pistol", "Sniper Rifle", "Rocket Launcher", "Shotgun", "Frag Grenade", "Plasma Rifle", "Plasma Pistol", "Needler", "Plasma Grenade"]


const getWeapons = () => {
    return ["Assault Rifle", "Pistol", "Sniper Rifle", "Rocket Launcher", "Shotgun", "Frag Grenade", "Plasma Rifle", "Plasma Pistol", "Needler", "Plasma Grenade"]
}

const getRandomWeapon = () => {
    const randomIndex = Math.floor(Math.random() * weaponData.length);
    return weaponData[randomIndex];
}

export {getWeapons, getRandomWeapon}
export default weaponData;