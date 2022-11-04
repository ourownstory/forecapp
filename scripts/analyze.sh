#!/bin/sh

# Look into the packaged app with
# du -sh dist/mac/Forecapp.app/Contents/Resources/* | sort -h

# Analyze python package
du -sh dist/app/* | sort -h
