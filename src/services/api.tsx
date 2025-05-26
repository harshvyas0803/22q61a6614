import axios from 'axios';

// API base URL (for reference, not used due to token expiration)
const BASE_URL = 'http://20.244.56.144/evaluation-service';

// Interface for stock price data
export interface StockPrice {
  price: number;
  lastUpdatedAt: string;
}

// Mock stock list (from the example response in Screenshot 7)
const mockStocks: string[] = [
  "Advanced Micro Devices, Inc.", "AMD",
  "Alphabet Inc. Class A", "GOOGL",
  "Alphabet Inc. Class C", "GOOG",
  "Amazon.com, Inc.", "AMZN",
  "Amgen Inc.", "AMGN",
  "Apple Inc.", "AAPL",
  "Berkshire Hathaway Inc.", "BRKB",
  "Booking Holdings Inc.", "BKNG",
  "Broadcom Inc.", "AVGO",
  "CSX Corporation", "CSX",
  "Eli Lilly and Company", "LLY",
  "Marriott International, Inc.", "MAR",
  "Marvell Technology, Inc.", "MRVL",
  "Meta Platforms, Inc.", "META",
  "Microsoft Corporation", "MSFT",
  "Nvidia Corporation", "NVDA",
  "PayPal Holdings, Inc.", "PYPL",
  "TSMC", "2330TW",
  "Tesla, Inc.", "TSLA",
  "Visa Inc.", "V"
];

// Mock price history for a stock (based on the example response in Screenshot 6)
const mockPriceHistory: StockPrice[] = [
  { price: 666.66595, lastUpdatedAt: "2025-05-08T04:11:42.465706306Z" },
  { price: 212.9439, lastUpdatedAt: "2025-05-08T04:14:39.465211057Z" },
  { price: 163.42203, lastUpdatedAt: "2025-05-08T04:23:30.465542162Z" },
  { price: 231.95296, lastUpdatedAt: "2025-05-08T04:26:27.46584912Z" }
];

// Mocked function to fetch the list of stocks
export const getStocks = async (): Promise<string[]> => {
  return Promise.resolve(mockStocks);
};

// Mocked function to fetch price history for a specific stock
export const getStockPriceHistory = async (ticker: string, minutes: number): Promise<StockPrice[]> => {
  return Promise.resolve(mockPriceHistory);
};