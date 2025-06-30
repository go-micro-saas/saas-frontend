// import {useState} from 'react'

// layout
import PageTopBorder from './components/layouts/PageTopBorder.tsx';
import PageHeader from './components/layouts/PageHeader.tsx';

function App() {

  return (
    <>
      <PageTopBorder/>
      <div className={"container"}>
        <PageHeader/>
      </div>
    </>
  )
}

export default App
