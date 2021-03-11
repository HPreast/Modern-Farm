let allPlants = [];

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        seedObj.forEach(seed => {
            allPlants.push(seed)
        })
    }
        else {
            allPlants.push(seedObj)
        }
    }

export const usePlants = () => {
    return [...allPlants]
}
