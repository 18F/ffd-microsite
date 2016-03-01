# Federal Front Door Microsite

[![Build Status](https://travis-ci.org/18F/ffd-microsite.svg?branch=master)](https://travis-ci.org/18F/ffd-microsite)

This repository contains the files and infrastructure to run the Federal Front
Door Microsite.

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

### Development

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

#### Descriptions for optional `gulp [ flags ]` task prefixes

These flags are 100% optional and can be omitted from any tasks that are
affected by them.

- `no-test` This flag disables linters and tests for assets
- `production` This flag enables minification and compression of assets
