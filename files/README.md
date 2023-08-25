## Developer Guide

- [JSON Format Documentation](json/README.md)
- [Markup Format Documentation](markup/README.md)

### File Structure
```bash
files/
├─ json/         # intermediate json docs definitons
├─ markup/       # markup docs definitons
├─ docs-base/    # docs template folder for every language/version
├─ font-awesome/ # belongs to docs-base
│
├─ conf.json     # general generation info (languages, scopes, type defs, ...)
├─ generate.js   # convert json/ to out/ html docs
├─ updatePages.js      # copy temporary out/ to public docs/
├─ jsdoc-parser.js     # convert markup/ to json/
├─ markup-generator.js # convert json/ to markup/ (verify bidirectional conversion)
├─ testLinks.sh        # check all docs-internal links valid
├─ adjustJson.js       # cleanup JSON files (trim(), remove empty, sort keys, ...)
├─ transformPopups.js  # convert html popups in markup/ files
│
├─ ReleaseNotes.txt    # incremental ReleaseNotes
├─ animate.png   # used by app.Animate doc
│
├─ types.d.ts    # DS and generator type definitions for vscode
├─ jsconfig.json # vscode js/ts linter settings
└─ package.json  # script npm package dependencies
```


### NPM Command Palette

Install dependencies
- `npm i` 

Generation Pipelines
- `npm run generate` generate out/docs from json
- `npm run generateDocs` generate displayed docs from json
- `npm run updateVersion` generate displayed docs and updates version

Individual pipeline steps
- `npm run docs` generate out/docs from json
- `npm run docs-lazy` docs, but regenerates only outdated scopes
- `npm run update` docs-lazy, but updates out/version.txt
- `npm run updatePages` update displayed docs (copy out/ to docs/)
- `npm run json` convert markup files to json
- `npm run markup` convert json files to markup
