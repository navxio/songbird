## songbird

A minimal command line snippet manager

#### Requirements
* node >= 10
* npm

#### Installation
`npm i -g songbird-cli`

#### Usage


`song <key> [value]`

Store any string inside the register `key`

To retrieve the value, just omit the `[value]` parameter

`song <key>`

By default, `song` command copies the result to your clipboard. To avoid it, use the `-n` flag


`song` prints all the key value pairs in a formatted table

##### Flags

`-n, --no-clip` Skip copying to clipboard

`-p, --pretty` pretty print a stored value

#### TODO
- [x] create storage dir creation on package install

- [x] pretty print option

- [ ] Enable reading from stdin

- [ ] minimize deps

### Planned Features

- [ ] GNU pass like folders

#### License

GPL v3
