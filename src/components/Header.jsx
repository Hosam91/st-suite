import React from 'react'

export default function Header({ headerTitle ,tAlign,fSize}) {
  const headerStyle = {
    textAlign:  tAlign,
    padding: '.5rem',
      textTransform: 'capitalize',
      fontSize: fSize,
      fontWeight:'bold',
  }

  return <h2 style={headerStyle}>{headerTitle}</h2>
}
