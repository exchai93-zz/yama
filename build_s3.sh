#!/bin/bash
npm run webpack
rm -r build_s3
mkdir build_s3
cp -r build build_s3/
cp index-yama.html build_s3/index.html
cp style.css build_s3/
cp -r video build_s3/
cp -r fonts build_s3/
cp icon.svg build_s3/
