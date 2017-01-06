#!/bin/bash

set -e
set -x

HUGO_VERSION="0.18.1"

# Install Hugo
$INSTALL_PATH=./bin
mkdir -p $INSTALL_PATH
export PATH="$PATH:$INSTALL_PATH"
wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux_amd64.tar.gz
tar xvfz hugo_${HUGO_VERSION}_linux_amd64.tar.gz
cp hugo_${HUGO_VERSION}_linux_amd64/hugo_${HUGO_VERSION}_linux_amd64 $INSTALL_PATH/hugo
