import React from "react";
import "./ReviewsTable.css";

const ReviewsTable = () => {
  const reviews = [
    {
      product: "Haldiram's Sev Bhujia",
      name: "Barry McKenzie",
      review: "Nice & fresh oranges with value for money...",
      rating: 5,
      date: "23 Nov, 2022",
    },
    {
      product: "NutriChoice Digestive",
      name: "Dale Jenkins",
      review: "Nice product 💰 quality...",
      rating: 4,
      date: "23 Nov, 2022",
    },
    {
      product: "Cadbury 5 Star Chocolate",
      name: "Michael Phillips",
      review: "Good quality product delivered...",
      rating: 5,
      date: "23 Nov, 2022",
    },
    // Add more rows as required
  ];

  return (
    <div className="reviews-container">
      <h2 className="table-heading">Customer Reviews</h2>
      <div className="table-wrapper">
        <table className="reviews-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Reviews</th>
              <th>Rating</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.name}</td>
                <td>{item.review}</td>
                <td>
                  {"⭐".repeat(item.rating) +
                    "☆".repeat(5 - item.rating)}
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button className="page-btn">Previous</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">Next</button>
      </div>
    </div>
  );
};

export default ReviewsTable;