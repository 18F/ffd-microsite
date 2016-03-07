# Contributing to the Federal Front Door Microsite

We aspire to create a welcoming environment for collaboration on this project.
To that end, we follow the [18F Code of Conduct] [18f-coc] and ask that all
contributors do the same.

[18f-coc]: https://github.com/18F/code-of-conduct/blob/master/code-of-conduct.md "18F: Code of Conduct"

 Section | Description
 ------- | -----------
 [README](README.md) | Information about the project
 [Opening an issue](#opening-an-issue) | Information on contributing issues
 [Submitting pull requests](#submitting-pull-requests) | Information on contributing pull requests
 [Deployment cycle](#deployment-cycle) | Information on the deployment cycle

## Opening an issue

Before submitting a new issue, please consider the following guidelines:

- Search [this repository for open or closed issues] [gh-search-issue] that may
  relate to your pull request.

To help us get a better understanding of the issue you are submitting, please
use the following outline (as inspired by the following
[Girl Develop It issue template](https://github.com/girldevelopit/gdi-new-site/issues/83))

[View the ISSUE_TEMPLATE.md in this repository] [ffd-issue-template].

[gh-search-issue]: https://github.com/18F/ffd-microsite/issues?utf8=✓&q=is%3Aissue "Github: Search All Issues"
[ffd-issue-template]: .github/ISSUE_TEMPLATE.md "Federal Front Door: Issue Template"

## Submitting pull requests

Before submitting your pull request, please consider the following guidelines:

- Search [this repository for open or closed PRs] [gh-search-pr] that may relate
  to your pull request.
- Make your changes in a new git branch from the remote `staging` branch.
  ```sh
  git fetch --all
  git checkout -b my-branch origin/staging
  ```
- Test your changes by following the instructions on [_Building the microsite
locally_] [ffd-build-local].
  ```sh
  npm test
  npm run build
  ```
- Ensure that there are no errors or warnings.
- Commit your changes.

All new pull requests must target this repository's `staging` branch. You can
use [this link to ensure the base branch is set correctly] [gh-base-branch].

[gh-search-pr]: https://github.com/18F/ffd-microsite/pulls?utf8=✓&q=is%3Apr "Github: Search All pull requests"
[gh-base-branch]: https://github.com/18F/ffd-microsite/compare/staging...staging "Github: Submit a new pull request"
[ffd-build-local]: README.md#building-the-microsite-locally "Federal Front Door: Building the microsite locally"

## Deployment cycle

The deployment cycle for pushing to the production site is every __[x days,
weeks, etc.]__. A core team member will open a pull request from `staging`
against `master` for a final sanity check. Once we merge the code into `master`,
it will be live and ready for viewing [at our `production` URL] [ffd-production].

[ffd-production]: https://labs.usa.gov "Federal Front Door: Production"

