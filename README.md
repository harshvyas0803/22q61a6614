# aal1bb

This repository contains solutions to two problem statements: **Stock Price Aggregation** and **Average Calculator**.

## 📁 Project Structure

aal1bb/
├── stock-aggregation/
│ ├── public/
│ ├── src/
│ ├── screenshots/
│ │ ├── desktop.png
│ │ └── mobile.png
│ └── ...
├── average-calculator/
│ └── ...

markdown
Copy
Edit

---

## 📈 Stock Price Aggregation

**Folder:** `stock-aggregation`

### 🔍 Overview

A React-based frontend application that displays stock price charts and was intended to show correlation heatmaps.

Due to the API token expiring on **May 16, 2025** (prior to the current submission date: **May 26, 2025**), and the inability to retrieve a new token as per the challenge guidelines, **mock data** has been used to simulate the API responses.

### ✅ Features

- Fetches and displays mock stock data and price history.
- Renders a price history chart on the **Stock Page**.
- Responsive design implemented using **pure CSS**.
- Screenshots for both **desktop** and **mobile** views included.

### ⚠️ Limitations

- **Correlation heatmap** was not implemented due to time and API limitations.
- API requests are simulated with mock data since the real API token has expired.

### 📸 Screenshots

Screenshots are located in `stock-aggregation/screenshots/`:
- `desktop.png`: Desktop view of the Stock Page.
- `mobile.png`: Mobile view using responsive design.

### 🚀 Running the App

To run the app locally:

```bash
cd stock-aggregation
npm install
npm start
Open the app in your browser at http://localhost:3000. The app loads the Stock Page with mock data, defaulting to AMD stock.

🧮 Average Calculator
Folder: average-calculator

🔍 Overview
This was intended to be a microservice to calculate the average of numbers fetched from a third-party API.

⚠️ Not Implemented
Due to time constraints, this microservice has not been implemented. Placeholder structure is available in the folder.

📌 Final Submission Notes
✅ Stock Page with chart using mock data

✅ Responsive design with desktop and mobile screenshots

✅ Clear project structure and documentation

❌ Correlation Heatmap (not implemented)

❌ Average Calculator service (not implemented)