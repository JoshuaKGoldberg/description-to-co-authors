<h1 align="center">Description to Co Authors</h1>

<p align="center">Parses co-authors from Git/GitHub-style commit messages. ✍️</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/description-to-co-authors/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/description-to-co-authors" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/description-to-co-authors?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/description-to-co-authors/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/description-to-co-authors"><img alt="📦 npm version" src="https://img.shields.io/npm/v/description-to-co-authors?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
</p>

## Usage

```shell
npm i description-to-co-authors
```

Pass any variant of Git/GitHub-style commit message string to this package's exported `commitToCoAuthors`.
It will collect data from each case-insensitive `co-authored-by:` match.
Data may include `email`, `name`, and/or `username`:

```ts
import { commitToCoAuthors } from "description-to-co-authors";

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
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [description-to-co-authors](https://github.com/JoshuaKGoldberg/description-to-co-authors).
