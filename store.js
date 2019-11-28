const fs = require('fs')
const chalk = require('chalk')

const addItem = (key, value) => {
    const items = loadItems()

    const duplicateItem = items.find((item) =>  item.key === key)

    if (!duplicateItem){
        items.push ({
            key: key,
            value: value
        })
        saveItems(items)
        console.log(chalk.green(key + ' added.'))
    } else {
        console.log(chalk.red('Key ' + key + ' already exists.'))
    }
}

const removeItem = (key) => {
    const items = loadItems()

    const updatedItems = items.filter((item) => item.key !== key)

    if(items.length > updatedItems.length){
        saveItems(updatedItems)
        console.log(chalk.green.inverse('Key ' + key + ' Removed.'))
    } else {
        console.log(chalk.red.inverse('No key ' + key + ' found.'))
    }
}

const listItems = () => {
    
    const items = loadItems()

    if (items.length <= 0){
        return console.log(chalk.inverse('No keys found in the store.'))
    }
    
    console.log(chalk.inverse('Store Items'))
    items.forEach((item) => {
        console.log(chalk.green(item.key + ': ') + item.value)
    }) 
}

const readItem = (key) => {
    const items = loadItems()

    const keyToRead = items.find((item) => item.key === key)

    if(keyToRead){
        console.log(chalk.green(keyToRead.key) + ': ' + keyToRead.value)
    } else {
        console.log(chalk.red('No such key found.'))
    }
}

const saveItems = (items) => {
    const dataJSON = JSON.stringify(items)
    fs.writeFileSync('store.json', dataJSON)
}

const loadItems = () => {
    try{
        const dataBuffer = fs.readFileSync('store.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

module.exports = {
    addItem: addItem,
    removeItem: removeItem,
    listItems: listItems,
    readItem: readItem
}