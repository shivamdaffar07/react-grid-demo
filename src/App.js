import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export default function App() {
  const layout = [
    { i: "1", x: 0, y: 0, w: 2, h: 2 },
    { i: "2", x: 2, y: 0, w: 2, h: 2 },
    { i: "3", x: 4, y: 0, w: 2, h: 2 },
    { i: "4", x: 6, y: 0, w: 2, h: 2 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>React Grid Layout Demo</h2>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={100}
        width={1200}
      >
        <div key="1" style={{ background: "#90CAF9", borderRadius: "10px" }}>Box 1</div>
        <div key="2" style={{ background: "#A5D6A7", borderRadius: "10px" }}>Box 2</div>
        <div key="3" style={{ background: "#FFCC80", borderRadius: "10px" }}>Box 3</div>
        <div key="4" style={{ background: "#F48FB1", borderRadius: "10px" }}>Box 4</div>
      </GridLayout>
    </div>
  );
}
