# @spyke/conventional-changelog-preset

[![downloads](https://img.shields.io/npm/dm/@spyke/conventional-changelog-preset)](https://www.npmjs.com/package/@spyke/conventional-changelog-preset)
[![CI](https://github.com/the-spyke/spyke-conventional-changelog-preset/workflows/CI/badge.svg)](https://github.com/the-spyke/spyke-conventional-changelog-preset/actions?query=workflow%3ACI)
[![license](https://img.shields.io/npm/l/undercut.svg)](https://github.com/the-spyke/undercut/blob/master/LICENSE)

A preset for [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) and [Lerna](https://github.com/lerna/lerna/) making output similar to [Babel's changelog](https://github.com/babel/babel/blob/main/CHANGELOG.md) with emojis, fancy categories and sorting.

[Example output](https://github.com/the-spyke/undercut/blob/master/CHANGELOG.md).

Sections:

- :bug: Bug Fix
- :memo: Documentation
- :house: Internal
- :rocket: New Feature
- :running_woman: Performance
- :nail_care: Polish
- :leftwards_arrow_with_hook: Revert

Commit types:

- "feat" (NewFeature)
- "feature" (NewFeature)
- "fix" (BugFix)
- "polish" (Polish)
- "refactor" (Polish)
- "docs" (Documentation)
- "chore" (Internal)
- "test" (Internal)
- "perf" (Performance)
- "revert" (Revert)

All other commit types are ignored by default.

## Installation

```sh
npm install --save-dev @spyke/conventional-changelog-preset
# or
yarn add --dev @spyke/conventional-changelog-preset
```

## Usage

Use `changelogPreset` options in `lerna.json`:

```json
{
    "changelogPreset": "@spyke/conventional-changelog-preset",
}
```

Or specify it via command line:

```sh
lerna version --conventional-commits --changelog-preset '@spyke/conventional-changelog-preset'
```

You can override preset options in `lerna.json`'s `changelogPreset` property by using an object instead of a string. For example, to define custom commit types use full section names:

```json
{
  "changelogPreset": {
    "name": "@spyke/conventional-changelog-preset",
    "types": [
      { "type": "addition", "section": ":rocket: New Feature" },
      ...
    ]
  }
}
```

## License

Based on the [conventional-changelog-conventionalcommits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits).

Licensed under the MIT License, see [LICENSE](LICENSE) for more information.
