import React from 'react'

const Project = () => {
  return (
    <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "gray",
              flex: "1",
              borderBottom: "1px solid black",
              height: "2px",
            }}
          />
          <span
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Projelerimiz
          </span>
          <div
            style={{
              background: "gray",
              flex: "1",
              borderBottom: "1px solid black",
              height: "2px",
            }}
          />
        </div>
    </div>
  )
}

export default Project