#!/bin/sh

echo "Installing dependencies for electron..."
npm install

echo "Installing dependencies for client..."
(cd client && npm install)

if [ -f ".venv/bin/python" ]; then
  echo "Virtual environment already exists."
else
  echo "Creating virtual environment..."
  python -m venv .venv
fi

echo "Installing dependencies for backend..."
.venv/bin/pip install -r backend/requirements.txt
