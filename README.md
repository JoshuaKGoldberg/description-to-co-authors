<h1 align="center">commit-to-co-authors</h1>

<p align="center">Parses co-authors from Git/GitHub-style commit messages. ✍️</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors" target="_blank"><img alt="All Contributors: 1 👪" src="https://img.shields.io/badge/all_contributors-1_👪-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://codecov.io/gh/JoshuaKGoldberg/commit-to-co-authors" target="_blank"><img alt="Codecov Test Coverage" src="https://codecov.io/gh/JoshuaKGoldberg/commit-to-co-authors/branch/main/graph/badge.svg"/></a>
	<a href="https://github.com/JoshuaKGoldberg/commit-to-co-authors/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" /></a>
	<a href="https://github.com/JoshuaKGoldberg/commit-to-co-authors/blob/main/LICENSE.md" target="_blank"><img alt="License: MIT" src="https://img.shields.io/github/license/JoshuaKGoldberg/commit-to-co-authors?color=21bb42"></a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
	<img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
	<img alt="npm package version" src="https://img.shields.io/npm/v/create-typescript-app?color=21bb42" />
</p>

## Usage

```shell
npm i commit-to-co-authors
```

Pass any variant of Git/GitHub-style commit message string to this package's exported `commitToCoAuthors`.
It will collect data from each case-insensitive `co-authored-by:` match.
Data may include `email`, `name`, and/or `username`:

```ts
import { commitToCoAuthors } from "commit-to-co-authors";

commitToCoAuthors(`
co-authored-by: @DirectUsername
Co-authored-by: Josh Goldberg <github@joshuakgoldberg.com>
`);
```

```json
[
	{
		"username": "DirectUsername"
	},
	{
		"email": "github@joshuakgoldberg.com",
		"name": "Josh Goldberg"
	}
]
```

> [!NOTE]
> Proper `Co-authored-by` attributions should use the _`name <email>`_ format, not `@username`.
> The `@username` extension is only there as a friendly compatibility layer for GitHub users who don't allow seeing their email.
> Please don't use it unless you absolutely need to.

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/JoshuaKGoldberg/commit-to-co-authors/issues?q=author%3AJoshuaKGoldberg" title="Bug reports">🐛</a> <a href="https://github.com/JoshuaKGoldberg/commit-to-co-authors/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="https://github.com/JoshuaKGoldberg/commit-to-co-authors/pulls?q=is%3Apr+reviewed-by%3AJoshuaKGoldberg" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/JoshuaKGoldberg/commit-to-co-authors/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [create-typescript-app](https://github.com/JoshuaKGoldberg/create-typescript-app).
