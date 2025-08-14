"use client";

import React from "react";

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
    marginBottom: "40px",
    maxWidth: "1200px",
    margin: "0 auto 40px",
    color: "#000",
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
  },
  quoteIcon: {
    fontSize: "32px",
    color: "#e74c3c",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "black",
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
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        Testimonials
      </div>
      <div style={styles.testimonials}>
        {testimonials.map((item, idx) => (
          <div key={idx} style={styles.card}>
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
