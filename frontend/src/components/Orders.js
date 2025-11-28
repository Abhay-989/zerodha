import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/api/auth/orders",
          { withCredentials: true }
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Menu />
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">

        {loading ? (
          <p className="loading-text">Loading orders...</p>
        ) : orders.length === 0 ? (
          <div className="no-orders">
            <p>No orders yet — place your first order 🚀</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, idx) => {
                const value = order.qty * order.price;
                return (
                  <tr key={idx}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>{order.mode.toUpperCase()}</td>
                    <td>{value.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Summary Footer (optional like holdings) */}
      {orders.length > 0 && (
        <div className="row">
          <div className="col">
            <h5>{orders.length}</h5>
            <p>Total Orders</p>
          </div>
          <div className="col">
            <h5>
              ₹
              {orders
                .reduce((a, o) => a + o.price * o.qty, 0)
                .toFixed(2)}
            </h5>
            <p>Total Value</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
