"use client";

import React, { useState } from "react";

const testimonials = [
  {
    text: "Hefty’s track-mounted jaw crusher has transformed our site productivity. Setup was quick, operation is smooth, and the output quality exceeded our expectations.",
    name: "Ramesh K.",
    position: "Project Manager, Apex Constructions",
  },
  {
    text: "We’ve been using Hefty’s cone crusher for over two years, and the reliability is unmatched. Minimal downtime, easy maintenance, and excellent after-sales service.",
    name: "Suresh B.",
    position: "Operations Head, GraniteWorks Mining",
  },
  {
    text: "What sets Hefty apart is their attention to detail and customer support. They didn’t just sell us a machine — they provided a complete solution for our crushing needs.",
    name: "Anita M.",
    position: "Director, BuildRight Infrastructure",
  },
  {
    text: "From day one, the Hefty team understood our challenges and recommended the right equipment. Our screening process is now twice as efficient.",
    name: "Vikram P.",
    position: "Plant Supervisor, RiverStone Aggregates",
  },
  {
    text: "High-quality machines backed by a responsive service team. Hefty has become our go-to partner for all crushing and screening requirements.",
    name: "Pradeep S.",
    position: "Owner, Shakti Constructions",
  },
];

const styles = {
  wrapper: {
    backgroundColor: "#f3f3f3",
    padding: "80px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    fontSize: "42px",
    fontWeight: "700",
    textAlign: "center",
    margin: "0 auto 40px",
    color: "#1e3a8a", // blue-900
    transition: "color 0.3s",
    cursor: "pointer",
  },
  testimonials: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    flex: "1 1 45%",
    minWidth: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  quoteIcon: {
    fontSize: "32px",
    color: "#e74c3c",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#1e3a8a", // blue-900
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  author: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#000",
  },
  role: {
    fontSize: "14px",
    color: "#e74c3c",
  },
};

export default function Testimonials() {
  const [headerHover, setHeaderHover] = useState(false);

  const handleCardMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.header,
          color: headerHover ? "#f97316" : "#1e3a8a", // blue-900 → orange on hover
        }}
        onMouseEnter={() => setHeaderHover(true)}
        onMouseLeave={() => setHeaderHover(false)}
      >
        Testimonials
      </div>
      <div style={styles.testimonials}>
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            style={styles.card}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div style={styles.quoteIcon}>❝</div>
            <div style={styles.text}>{item.text}</div>
            <div style={styles.author}>{item.name}</div>
            <div style={styles.role}>{item.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
