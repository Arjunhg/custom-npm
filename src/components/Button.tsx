import * as React from "react"

interface PropTypes{
    children: React.ReactNode
}
function Button ({children} : PropTypes) {
  return (
    <button
        style={{
            padding: '10px 20px',
            fontSize: "1.2em",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
            border: "none"
        }}
    >{children}</button>
  )
}

export {Button}
