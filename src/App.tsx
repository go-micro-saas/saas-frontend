// import {useState} from 'react'

// layout
import PageTopBorder from './components/layouts/PageTopBorder.tsx';
import PageHeader from './components/layouts/PageHeader.tsx';

function App() {

  return (
    <>
      <PageTopBorder/>
      <div className={"container-fluid"}>
        <PageHeader/>
      </div>
    </>
  )
}

export default App
