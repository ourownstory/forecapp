# Forecapp

A NeuralProphet GUI to make custom forecasts more accessible

## Structure

Forecapp is built with a React frontend and a Python/Flask backend. The
frontend is compiled to static HTML, Javascript, and CSS files, and the Flask
backend is compiled to an executable. Electron delivers the frontend and spins
up a child process to run the backend. Requests are routed within the user’s
computer via localhost:5050 to the local backend.

## Build instructions

1. Install packages. `npm install` in both main directory and /client directory. Needed Python packages are listed in backend/requirements.txt
2. Compile Python backend. `pyinstaller app.spec`
3. Build frontend. From /client directory, `npm run build`
4. Compile binary. `npm run dist`
   The final application will be written to the /dist directory
