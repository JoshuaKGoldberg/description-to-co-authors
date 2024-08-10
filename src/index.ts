export interface CoAuthor {
	email?: string;
	name?: string;
	username?: string;
}

export function commitToCoAuthors(commit: string) {
	const coAuthors: CoAuthor[] = [];

	for (const match of commit.match(/co-authored-by:.+/gi) ?? []) {
		const split = match.trim().split(/\s+/);
		if (split.length < 2) {
			continue;
		}

		const coAuthor: CoAuthor = {};

		const email = /<(.+)>/.exec(split[split.length - 1])?.[1];
		if (email) {
			coAuthor.email = email;
		}

		if (/^@\w+/.test(split[1])) {
			coAuthor.username = split[1].slice(1);
		} else if (email) {
			if (split.length > 2) {
				coAuthor.name = split.slice(1, split.length - 1).join(" ");
			}
		} else if (split.length > 1) {
			coAuthor.name = split.slice(1, split.length).join(" ");
		}

		coAuthors.push(coAuthor);
	}

	return coAuthors;
}
