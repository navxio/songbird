## songbird

A minimal command line snippet manager

#### Requirements
* node >= 10
* npm

#### Installation
`npm i -g songbird-cli`

#### Usage

By default, `song` command copies the result to your clipboard. To avoid it, use the `-n` flag

`song <key> [value]`

Store any string inside the register `key`

To retrieve the value, just omit the `[value]` parameter

`song <key>`

By default, the song command will copy the target value to the clipboard

##### Flags

`-n, --no-clip` Skip copying to clipboard

`-l, --list` list all keyvalue pairs in a pretty formatted table

`-p, --pretty` pretty print a stored value

#### TODO
- [x] create storage dir creation on package install

- [ ] pretty print option

- [ ] Enable reading from stdin

- [ ] minimize deps

### Planned Features

- [ ] GNU pass like folders

#### License

GPL-v2.0
