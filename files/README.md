## Developer Guide

- [JSON Format Documentation](json/README.md)
- [Markup Format Documentation](markup/README.md)

### Command Palette

Install dependencies
- `npm i` 

Generation Pipelines
- `npm run generate` generate files/out/docs from json
- `npm run generateDocs` generate displayed docs from json
- `npm run updateVersion` generate displayed docs and updates version

Individual pipeline steps
- `npm run docs` generate files/out/docs from json
- `npm run docs-lazy` docs, but regenerates only outdated scopes
- `npm run update` docs-lazy, but updates files/out/version.txt
- `npm run updatePages` update displayed docs (copy out/ to docs/)
- `npm run json` convert markup files to json
- `npm run markup` convert json files to markup
