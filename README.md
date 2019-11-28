# challenge-one
Simple Node developer challenge.

### Goal
Clone this repo and build a simple key/value store CLI using only the core Node API. Once you have finished the challenge, please deliver it by providing a GitHub repo, Dropbox, or Google Drive link.

### Store API

`$ store add mykey myvalue`

`$ store list`

`$ store get mykey`

`$ store remove mykey`

### LINK
`npm link` for store command


### CLI 

`node app.js help` or `store help`

app.js [command]

Commands:
 - `add`  =>  Add a new item
 - `remove` => Remove an item
 - `get`  =>   Read an item
 - `list`  =>  List the items

Options:
 - --help     Show help                                                 [boolean]
 - --version  Show version number                                       [boolean]

#### To get detailed help

`store <add/remove/get/list> help`

### Sample Add command
store add --key product1 --value value1