#!/bin/sh

echo "Building backend..."
pyinstaller --noconfirm --upx-dir=/usr/local/bin/ --strip --onefile --add-data "backend/datasets/air_passengers.csv:./datasets" --add-data "backend/datasets/retail_sales.csv:./datasets" --add-data "backend/datasets/wp_log_peyton_manning.csv:./datasets" backend/app.py

echo "Building frontend..."
(cd client && npm run build)

echo "Building distribution file..."
npm run dist
