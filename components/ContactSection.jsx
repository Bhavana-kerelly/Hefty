"use client";
import React from "react";
import { motion } from "framer-motion";

const offices = [
  {
    city: "Hyderabad",
    address: "E-63, 1st Floor, Above Shiva Homeo Care, Madhuranagar, Hyderabad, Telangana",
    phone: "+91 9951606993",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3371810419266!2d78.43265107504443!3d17.44390038346123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b929653770335e9%3A0x8673a55745161421!2sMadhuranagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716301385493!5m2!1sen!2sin"
  },
  
];

export default function ContactSection() {
  return (
    <div style={styles.container}>
      <motion.div
        style={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>Collaborate with Hefty</h2>
        <form style={styles.form}>
          <label style={styles.label}>Name *</label>
          <input type="text" style={styles.input} />

          <div style={styles.flexRow}>
            <div style={styles.flexHalf}>
              <label style={styles.label}>Email *</label>
              <input type="email" style={styles.input} />
            </div>
            <div style={styles.flexHalf}>
              <label style={styles.label}>Phone Number *</label>
              <input type="text" style={styles.input} />
            </div>
          </div>

          <label style={styles.label}>Subject *</label>
          <select style={styles.input}>
            <option>--- Select Choice ---</option>
            <option>Crushers </option>
            <option>Mobile Series</option>
            <option>Semi Mobile Series</option>
            <option>Feeders</option>
            <option>Impactors</option>
            <option>Screens</option>
            <option>Washing System</option>
            <option>Classifier</option>
          </select>

          <label style={styles.label}>Comment or Message</label>
          <textarea rows={4} style={styles.textarea} />

          <button style={styles.button}>Submit</button>
        </form>
      </motion.div>

      <motion.div
        style={styles.right}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 style={styles.titleRight}>
          <span style={{ color: "#fff" }}>Our </span>
          <span style={styles.gray}>Offices</span>
        </h2>
        <div style={styles.officeList}>
          {offices.map((office, index) => (
            <motion.div 
              key={index} 
              style={styles.office}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 style={styles.officeCity}>{office.city}</h3>
              <p style={styles.officeText}>{office.address}</p>
              {office.phone && <p style={styles.officeText}>{office.phone}</p>}
              {office.map && (
                <div style={styles.mapContainer}>
                  <iframe 
                    src={office.map} 
                    style={styles.mapIframe}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "nowrap", // This change forces the sections to stay side-by-side
    backgroundColor: "#ec6b24",
    color: "#fff",
    padding: "50px 20px",
    fontFamily: "'Segoe UI', sans-serif",
    overflowX: "auto", // Adds horizontal scroll on small screens
  },
  left: {
    flex: "1 1 500px",
    backgroundColor: "#ec6b24",
    padding: "30px",
    borderRadius: "10px",
    margin: "10px",
  },
  right: {
    flex: "1 1 500px",
    padding: "30px",
    margin: "10px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  titleRight: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
  },
  gray: {
    color: "white",
  },
  label: {
    display: "block",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#ec6b24",
    color: "white",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    backgroundColor: "#ec6b24",
    color: "white",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "white",
    color: "#ec6b24",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  flexRow: {
    display: "flex",
    gap: "10px",
  },
  flexHalf: {
    flex: 1,
  },
  officeList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  office: {
    flex: "1 1 45%",
    border: "1px solid white", 
    borderRadius: "8px",
    padding: "20px",
  },
  officeCity: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "5px",
  },
  officeText: {
    fontSize: "14px",
    lineHeight: "1.4",
  },
  mapContainer: {
    marginTop: "15px",
    width: "100%",
    height: "200px",
  },
  mapIframe: {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "8px",
  },
};
