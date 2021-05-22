### songbird

A minimal command line snippet manager

#### Requirements
* node >= 12
* npm

#### Installation
`npm i -g songbird-cli`

#### Usage

`song <key> [value]`

Store any string inside the register `key`

To retrieve the value, just omit the `[value]` parameter

`song <key>`

By default, the song command will copy the target value to the clipboard

##### Flags

`-n --no-copy` Skip copying to clipboard

`-a --all` list all keyvalue pairs


#### TODO
- [ ] Add --no-clipboard flag

- [ ] Finish pretty print list all flag (`-a`)

- [ ] create storage dir creation on package install

### Planned Features

- [ ] GNU pass like folders

#### License

GPL-v2.0