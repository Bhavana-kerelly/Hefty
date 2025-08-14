"use client";
import React from "react";

const articles = [
  {
    title: "Hefty Machines- Redefining Crushing, Screening, and Washing Excellence",
    image: "https://img.freepik.com/free-vector/isometric-family-budget-composition-with-people-counting-money-vector-illustration_1284-80992.jpg?semt=ais_hybrid&w=740&q=80",
    slug: "structured-loans",
  },
  {
    title: "The Science of Perfect Aggregates- How Hefty Machines Deliver Unmatched Quality",
    image: "https://www.cfoselections.com/hubfs/Images/integrity-in-finance.jpeg",
    slug: "financial-partner",
  },
  {
    title: "Why Mobile is the Future of Crushing Equipment- The Hefty Advantage",
    image: "https://images.moneycontrol.com/static-mcnews/2018/10/Loans-2-final-770x433.png?impolicy=website&width=770&height=431",
    slug: "driven-by-values",
  },
  {
    title: "PSafety and Sustainability- How Hefty Leads in Responsible Machinery Design",
    image: "https://media.assettype.com/outlookmoney/2025-01-31/104ynhsa/Untitled-design-8.png?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.05",
    slug: "loans-for-doctors-cas",
  },
];

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "18px",
    color: "#555",
    textAlign: "center",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "20px",
    gap: "30px",
  },
  card: {
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    flexShrink: "0",
  },
  cardTitle: {
    padding: "16px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#000",
    lineHeight: "1.4",
  },
};

export default function FeaturedInsights() {
  const handleRedirect = (slug) => {
    // A standard way to redirect in a non-Next.js environment
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Blogs</div>
      <div style={styles.subheading}>
        <div className="text-black font-serif"> 
          Explore our comprehensive blog posts today and let Hefty guide you towards smarter manufacture crushers and screening equipment.
        </div>
      </div>
      <div style={styles.grid}>
        {articles.map((item, index) => (
          <div 
            key={index} 
            style={styles.card} 
            className="hover:scale-105"
            onClick={() => handleRedirect(item.slug)}
          >
            <img src={item.image} alt={item.title} style={styles.cardImage} />
            <div style={styles.cardTitle}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
