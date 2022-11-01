#!/bin/sh

echo "Building backend..."
pyinstaller app.spec

echo "Building frontend..."
(cd client && npm run build)

echo "Building distribution file..."
npm run dist