# Forecapp

A NeuralProphet GUI to make custom forecasts more accessible

## Development

### Structure

Forecapp is built with a React frontend and a Python/Flask backend. The frontend is compiled to static HTML, Javascript, and CSS files, and the Flask backend is compiled to an executable. Electron delivers the frontend and spins up a child process to run the backend. Requests are routed within the user’s computer via localhost:5050 to the local backend.

### Setup

Make sure you have [Node.js](https://nodejs.org/en/download/) and [Python 3](https://www.python.org/downloads/) installed.

Setup virtual environment and install all dependencies:

```bash
scripts/setup.sh
```

Or manually:

1. Electron app: `npm install`
2. Frontend: `(cd client && npm install)`
3. Virtual environment: `python3 -m venv .venv`
4. Backend: `.venv/bin/pip install -r backend/requirements.txt`

### Start development setup

Make sure you have completed the setup steps above.

1. Frontend: `npm start`
2. Backend: `.venv/bin/python backend/app.py`

### Build instructions

Make sure you have completed the setup steps above.

1. Compile backend: `pyinstaller app.spec`
2. Build frontend: `(cd client && npm run build)`
4. Compile binary: `npm run dist`

The final application will be written to the `/dist` directory.
