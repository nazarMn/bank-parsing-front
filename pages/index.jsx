import { useEffect, useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl d mb-6 text-center">Список транзакцій</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {transactions.map((item, index) => (
          <div key={index} className="bg-white  p-6">
            <div className="mb-4">
              <h2 className="text-lg  text-gray-700 mb-1"> Дата і час операції:</h2>
              <p className="text-gray-900">{item['Дата i час операції']}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg  text-gray-700 mb-1"> Деталі операції:</h2>
              <p className="text-gray-900">{item['Деталі операції']}</p>
            </div>
            <div>
              <h2 className="text-lg f text-gray-700 mb-1"> Сума в валюті операції:</h2>
              <p className="text-gray-900">{item['Сума в валюті операції']}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
