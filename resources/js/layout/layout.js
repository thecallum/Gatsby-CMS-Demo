import React from 'react';

import Header from './header'

export default ({ children }) => {

  return (
    <div>
      <Header />

      <main>
        <div className="container" style={{marginTop: '30px'}}>
          { children }
        </div>
      </main>
    </div>
  )
}