//Only the mainline Halo games. 
const gameTitleData = ["Halo 1", "Halo 2", "Halo 3", "Halo 3: ODST", "Halo Reach", "Halo 4", "Halo 5", "Halo Infinite"]

const getgameTitles = () => {
    return ["Halo 1", "Halo 2", "Halo 3", "Halo 3: ODST", "Halo Reach", "Halo 4", "Halo 5", "Halo Infinite"]
}

const getRandomTitle = () => {
    const randomIndex = Math.floor(Math.random() * gameTitleData.length);
    return gameTitleData[randomIndex];
}

export {getgameTitles, getRandomTitle }
export default gameTitleData;