import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { getStocks, getStockPriceHistory, StockPrice } from '../services/api';
import '../styles/StockPage.css';

const StockPage: React.FC = () => {
  const [stocks, setStocks] = useState<string[]>([]);
  const [selectedStock, setSelectedStock] = useState<string>('');
  const [minutes, setMinutes] = useState<number>(10);
  const [priceHistory, setPriceHistory] = useState<StockPrice[]>([]);
  const [averagePrice, setAveragePrice] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // Fetch the list of stocks on component mount
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const stockList = await getStocks();
        setStocks(stockList);
        if (stockList.length > 0) {
          setSelectedStock(stockList[1]); // Set default stock (e.g., AMD)
        }
      } catch (err) {
        setError('Failed to fetch stocks. Please try again.');
      }
    };
    fetchStocks();
  }, []);

  // Fetch price history when stock or minutes change
  useEffect(() => {
    const fetchPriceHistory = async () => {
      if (!selectedStock) return;
      try {
        const history = await getStockPriceHistory(selectedStock, minutes);
        setPriceHistory(history);

        // Calculate average price
        if (history.length > 0) {
          const avg = history.reduce((sum, data) => sum + data.price, 0) / history.length;
          setAveragePrice(avg);
        } else {
          setAveragePrice(0);
        }
        setError(null);
      } catch (err) {
        setError('Failed to fetch price history. Please try again.');
      }
    };
    fetchPriceHistory();
  }, [selectedStock, minutes]);

  return (
    <div className="stock-page">
      <h2>Stock Price Chart</h2>
      <div className="controls">
        <div className="control-group">
          <label htmlFor="stock-select">Select Stock: </label>
          <select
            id="stock-select"
            value={selectedStock}
            onChange={(e) => setSelectedStock(e.target.value)}
          >
            {stocks.map((stock, index) => (
              index % 2 === 1 && <option key={stock} value={stock}>{stock}</option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label htmlFor="minutes-select">Time Frame (minutes): </label>
          <select
            id="minutes-select"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      {priceHistory.length > 0 ? (
        <div className="chart-container">
          <LineChart
            width={800}
            height={400}
            data={priceHistory}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="lastUpdatedAt"
              tickFormatter={(value) => new Date(value).toLocaleTimeString()}
            />
            <YAxis />
            <Tooltip
              formatter={(value: number, name: string, props: any) => [
                `$${value.toFixed(2)}`,
                'Price',
              ]}
              labelFormatter={(label) => new Date(label).toLocaleString()}
            />
            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
            {averagePrice > 0 && (
              <ReferenceLine
                y={averagePrice}
                label={`Avg: $${averagePrice.toFixed(2)}`}
                stroke="red"
                strokeDasharray="5 5"
              />
            )}
          </LineChart>
        </div>
      ) : (
        <p>No data available for the selected stock and time frame.</p>
      )}
    </div>
  );
};

export default StockPage;