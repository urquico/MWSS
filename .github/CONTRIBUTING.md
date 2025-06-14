Hello @jbleesimplevia88 @Dc-Radin

Just a reminder to always refer to our existing `code-standards.md` when writing code. It outlines our coding conventions and best practices to keep the codebase clean and consistent.

Also, please follow this format for `Pull Request` titles:

```
<type>: <short, clear, and contextful title>
```

Accepted PR types:

`feature` – for adding new features or significant functionality
`fix` – for bug fixes or resolving issues
`refactor` – for code improvements that don't change behavior (e.g., cleanup, restructuring)
`chore` – for routine tasks (e.g., dependency updates, config changes)
`misc` – for uncategorized or minor updates
`docs` – for changes related to documentation
`test` – for adding or updating tests

### Smaller PRs are highly appreciated — they're easier and faster to review.

Examples of small, focused PRs:

```
fix: resolve null error on login submit
docs: update README with setup instructions
refactor: extract validation logic to helper function
chore: bump axios version to latest
test: add unit test for auth guard middleware
```

Whenever possible, split large changes into multiple small PRs based on functionality or concern (e.g., logic, UI, tests, docs).

### Merging Guidelines

Once your PR is approved, use **`Squash and Merge`** only.

Do NOT use **`Merge`** or **`Rebase & Merge`**

### Questions or Clarifications?

If you have questions or need clarification:

1. Open a new ticket in the Issues tab.
2. Use the question label.
3. Tag the specific developer(s) you're addressing.

### React to this post with 👍 if you’ve read and understood the guidelines.

Thanks! 🙌
