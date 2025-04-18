//Three Positive comments, three negative comments
const commentData = ["is a very capable weapon against the covenant!",
    "does a lot of damage to the flood!",
    "is a great weapon for multiplayer!",
    "stinks!",
    "got me killed on legendary!",
    "is for noobs."
]

const getComments = () => {
    return ["is a very capable weapon against the covenant!",
        "does a lot of damage to the flood!",
        "is a great weapon for multiplayer!",
        "stinks!",
        "got me killed on legendary!",
        "is for noobs."]
}

const getRandomComment = () => {
    const randomIndex = Math.floor(Math.random() * commentData.length);
    return commentData[randomIndex];
}

export {getComments, getRandomComment }
export default commentData;