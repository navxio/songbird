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

or read from stdin
`cat myFile | song myKey -s`

To retrieve the value, just omit the `[value]` parameter

`song <key>`

Note: By default, `song` command copies the result to your clipboard. To avoid it, use the `-n` flag

`song` prints all the key value pairs in a formatted table

##### Flags

`-n` Skip copying to clipboard

`-p` pretty print a stored value

`-s` accept value from stdin

### Planned Features

- [ ] GNU pass like folders
- [ ] Tab Completion
- [ ] Password protected strings

Note: Only utf8 strings supported.

#### License

GPL v3
