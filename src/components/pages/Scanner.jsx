import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {

  const [items, setItems] = useState([]);
  const [currentCode, setCurrentCode] = useState("");
  const [price, setPrice] = useState("");

  const scannerRef = useRef(null);

  // Start Scanner
  useEffect(() => {

    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        setCurrentCode(decodedText);
      },
      (error) => {
        console.log(error);
      }
    );

    scannerRef.current = scanner;

    return () => {
      scanner.clear().catch(() => {});
    };

  }, []);

  // Add Item
  const addItem = () => {

    if (!currentCode || !price) return;

    const newItem = {
      id: Date.now(),
      code: currentCode,
      price: Number(price)
    };

    setItems([...items, newItem]);

    setCurrentCode("");
    setPrice("");
  };

  // Remove Item
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Total
  const total = items.reduce((sum, item) => sum + item.price, 0);

  // Print Receipt
  const printReceipt = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen p-6 bg-slate-100">

      <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">
        Raku-Unit Scrap Scanner
      </h1>

      {/* Scanner */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-xl mb-3 font-semibold">Scan Barcode</h2>
        <div id="reader"></div>
      </div>

      {/* Add Item */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">

        <h2 className="text-xl mb-3 font-semibold">Add Item</h2>

        <div className="flex flex-col md:flex-row gap-3">

          <input
            type="text"
            value={currentCode}
            placeholder="Barcode"
            className="border p-2 rounded w-full"
            onChange={(e) => setCurrentCode(e.target.value)}
          />

          <input
            type="number"
            value={price}
            placeholder="Price ₹"
            className="border p-2 rounded w-full"
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            onClick={addItem}
            className="bg-yellow-400 px-4 py-2 rounded font-semibold"
          >
            Add
          </button>

        </div>

      </div>

      {/* Items Table */}

      <div className="bg-white p-4 rounded-xl shadow-md mb-6">

        <h2 className="text-xl mb-3 font-semibold">Scanned Items</h2>

        <table className="w-full text-left">

          <thead>
            <tr className="border-b">
              <th className="p-2">Barcode</th>
              <th className="p-2">Price</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>

            {items.map(item => (

              <tr key={item.id} className="border-b">

                <td className="p-2">{item.code}</td>
                <td className="p-2">₹ {item.price}</td>

                <td className="p-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Receipt */}

      <div className="bg-white p-4 rounded-xl shadow-md">

        <h2 className="text-xl font-semibold mb-3">Receipt</h2>

        <div className="border p-4">

          <h3 className="font-bold text-lg mb-2">Raku-Unit</h3>

          {items.map(item => (
            <p key={item.id}>
              {item.code} — ₹{item.price}
            </p>
          ))}

          <hr className="my-3"/>

          <h3 className="text-lg font-bold">
            Total: ₹ {total}
          </h3>

        </div>

        <button
          onClick={printReceipt}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Print Receipt
        </button>

      </div>

    </div>
  );
};

export default Scanner;