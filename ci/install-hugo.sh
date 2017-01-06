#!/bin/bash

set -e
set -x

HUGO_VERSION="0.18.1"

# Install Hugo
mkdir -p $HOME/bin
export PATH="$PATH:$HOME/bin"
wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz
tar xvfz hugo_${HUGO_VERSION}_Linux-64bit.tar.gz
cp hugo_${HUGO_VERSION}_linux_amd64/hugo_${HUGO_VERSION}_linux_amd64 $HOME/bin/hugo
