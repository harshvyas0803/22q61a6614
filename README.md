# 22q61a6614

This repository contains solutions for two problem statements: **Stock Price Aggregation** and **Average Calculator**. Below is an overview of the project structure, features, limitations, and instructions for running the applications.

## 📁 Project Structure

```
aal1bb/
├── stock-aggregation/
│   ├── public/
│   ├── src/
│   ├── screenshots/
│   │   ├── desktop.png
│   │   └── mobile.png
│   └── ...
├── average-calculator/
│   └── ...
```

## 📈 Stock Price Aggregation

**Folder:** `stock-aggregation`

### 🔍 Overview

A React-based frontend application designed to display stock price charts and was intended to include correlation heatmaps. Due to the API token expiring on **May 16, 2025** (prior to the submission date of **May 26, 2025**) and the inability to retrieve a new token as per challenge guidelines, **mock data** is used to simulate API responses.

### ✅ Features

- Fetches and displays mock stock data and price history.
- Renders a price history chart on the **Stock Page**.
- Responsive design implemented using **pure CSS**.
- Includes screenshots for both **desktop** and **mobile** views.

### ⚠️ Limitations

- **Correlation heatmap** was not implemented due to time constraints and API limitations.
- API requests are simulated with mock data due to the expired API token.

### 📸 Screenshots

Screenshots are located in `stock-aggregation/screenshots/`:
- `desktop.png`: Desktop view of the Stock Page.
- `mobile.png`: Mobile view showcasing responsive design.

### 🚀 Running the App

To run the Stock Price Aggregation app locally:

1. Navigate to the `stock-aggregation` folder:
   ```bash
   cd stock-aggregation
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Open your browser and visit `http://localhost:3000`. The app loads the Stock Page with mock data, defaulting to AMD stock.

## 🧮 Average Calculator

**Folder:** `average-calculator`

### 🔍 Overview

This component was intended to be a microservice to calculate the average of numbers fetched from a third-party API.

### ⚠️ Not Implemented

Due to time constraints, the Average Calculator microservice has not been implemented. A placeholder structure is available in the `average-calculator` folder.

## 📌 Final Submission Notes

- ✅ Stock Page with chart using mock data
- ✅ Responsive design with desktop and mobile screenshots
- ✅ Clear project structure and documentation
- ❌ Correlation Heatmap (not implemented)
- ❌ Average Calculator service (not implemented)
