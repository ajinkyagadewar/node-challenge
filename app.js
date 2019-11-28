#!/usr/bin/env node

const yargs = require('yargs')
const store = require('./store.js')

yargs.command({
    command: 'add',
    describe: 'Add a new item',
    builder: {
        key: {
            describe: 'Item Key',
            demandOption: true,
            type: 'string'
        },
        value: {
            describe: 'Item Value',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        store.addItem(argv.key, argv.value)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove an item',
    builder: {
        key: {
            describe: 'Item Key',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        store.removeItem(argv.key)
    }
})

yargs.command({
    command: 'get',
    describe: 'Read an item',
    builder: {
        key: {
            describe: 'Item Key',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        store.readItem(argv.key)
    }
})

yargs.command({
    command: 'list',
    describe: 'List the items',
    handler() {
        store.listItems()
    }
})

yargs.parse()