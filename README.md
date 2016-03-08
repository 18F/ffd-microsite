# Federal Front Door Microsite

[![Build Status](https://travis-ci.org/18F/ffd-microsite.svg?branch=master)](https://travis-ci.org/18F/ffd-microsite)

This repository contains the files and infrastructure to run the Federal Front
Door Microsite.

 Section | Description
 ------- | -----------
 [Installation](#installation)   | Installing the project locally.
 [Development](#development)     | Development workflow using `gulp`.
 [Deployment](#deployment)       | Automated and Manual deployment information using `cloud.gov`.
 [Contributing](CONTRIBUTING.md) | Contributing to the project

## Installation

The development for the microsite has the following dependencies

- [Hugo](http://gohugo.io "Hugo Homepage"), a static-site generator written in Go.
- [Gulp](http://gulpjs.com "GulpJS Homepage"), an automation tool for asset-pipelines.
- [NodeJS](https://nodejs.org/ "NodeJS Homepage")
- [Ruby](https://www.ruby-lang.org/ "Ruby Homepage")

This documentation assumes that you have Ruby and NodeJS installed on your
machine.  Instructions for installing `node`, and `npm`, [can be found here] [node-install].

[node-install]: https://nodejs.org/en/download/ "NodeJS Downloads"

### Installing Hugo

In order to serve the microsite locally, you will need to install the `hugo`
command-line tool. This can be installed easily via [Homebrew][homebrew-install]
on Mac OS X with the following command in your Terminal.

[homebrew-install]: http://brew.sh "Homebrew Installation"

```shell
brew update && \
brew install hugo
```

You can also [download the latest release][hugo-release] and checkout the
[quick start guide][hugo-quick-guide] for further instructions.

[hugo-release]: https://github.com/spf13/hugo/releases "Download Latest Hugo Release"
[hugo-quick-guide]: http://gohugo.io/overview/quickstart/ "Hugo Quickstart Guide"

### Installing Gulp

In order to build the assets for the microsite, you will need to install the
`gulp` command-line tool.

```sh
npm install --global gulp-cli
```

### Installing SCSS-Lint

The Sass file linter uses the Ruby gem `scss_lint`. This gem must be installed
on your machine in order to run any tasks that depend on the `scss-lint` binary.

```sh
gem install scss_lint
```

## Development

Once `gulp` is installed globally, navigate to this directory in your Terminal
and tell `npm` to bring in the asset-pipeline's dependencies.

```sh
npm install
```

Once that is complete, run `gulp` in your Terminal to get a list of tasks.

```sh
$ gulp

  Using gulpfile ~/Developer/ffd-microsite/gulpfile.js
  Starting 'default'...
  v1.0.0 ffd-microsite
   ______ ______ _____
  /\  ___/\  ___/\  __-.
  \ \  __\ \  __\ \ \/\ \
   \ \_\  \ \_\  \ \____-
    \/_/   \/_/   \/____/

  Available tasks

  ...
```

To start the local webserver and have gulp watch for changes:

```sh
npm start
```

### Descriptions for optional `gulp [ flags ]` task prefixes

These flags are 100% optional and can be omitted from any tasks that are
affected by them.

- `no-test` This flag disables linters and tests for all assets.
- `production` This flag enables minification and compression of all assets in
  prep for a production environment.

## Deployment

The microsite is deployed on [cloud.gov] [cg-homepage]. To read the `cloud.gov`
documentation, [click here] [cg-docs]. The documentation below makes the
following assumptions.

- Assuming you have the `cf` binary installed on your machine and within your
  `$PATH`.
    - [Please read _Setting up the command line_] [cg-docs-cli-install] for more
      information.
- Assuming that you have a `cloud.gov` account.
    - [Please read _Setting up your account_] [cg-docs-cg-account] for more
      information.

[cg-homepage]: https://cloud.gov "Cloud.gov: Homepage"
[cg-docs]: https://docs.cloud.gov "Cloud.gov: Documentation"
[cg-docs-cli-install]: https://docs.cloud.gov/getting-started/setup/ "Cloud.gov: Setting up the command line"
[cg-docs-cg-account]: https://docs.cloud.gov/getting-started/accounts/ "Cloud.gov: Setting up your account"

### Automated deployment

This project uses [Travis-CI] [tci-homepage] for continuous deployment. Our
current process deploys our `staging` branch and our `master` branch to their
own [`staging`] [ffd-staging] and [`production`] [ffd-production] URLs.

[tci-homepage]: https://travis-ci.org "Travis-CI: Homepage"
[ffd-staging]: https://ffd-microsite-staging.apps.cloud.gov "Federal Front Door: Staging"
[ffd-production]: https://labs.usa.gov "Federal Front Door: Production"

### Manual deployment

Using the `cf` command-line tool, you can run a manual deployment to either
`staging` or `production` by targeting the corresponding organization / space
and as long as you have access to `cf push` the target. More information on
deploying to `cloud.gov` can be found [here] [cg-deploy-hw] and [here] [cg-deploy-ss].

[cg-deploy-hw]: https://docs.cloud.gov/getting-started/your-first-deploy/ "Cloud.gov: Your First Deploy"
[cg-deploy-ss]: https://docs.cloud.gov/apps/static/ "Cloud.gov: Deploying Static Sites"

> Manual deployments are not necessary as all deployments _should_ go through
Travis-CI.

To check which space you're targeting using the `cf` command-line tool, type the
following in your terminal.

```sh
cf target
```

#### Building the microsite locally

Building the microsite locally can be done with the same command that runs in
Travis-CI. Type the following in your terminal.

```sh
npm run build
```

#### Pushing to a target

Once the microsite has been built locally by running the above command, you can
push your changes up to the targeted space. Type the following in your terminal.

```sh
cf push
```
