const nameList: string[] = []

const addName =(name: string) => {
    nameList.push(name)
}

const getName = () => {
    nameList.forEach(name => console.log(name))
}

const removeName = (index: number) => {
    nameList.splice(index, 1)
}

const updateName = (index: number, name: string) => {
    nameList.splice(index, 1, name)    
}

addName("Jonas")
addName("Salete")
addName("Elias")

removeName(1)
updateName(1, "Jonatan")

getName()
