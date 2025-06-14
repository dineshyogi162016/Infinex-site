import React from 'react'
import Header from '../user/Component/Header'
import Footer from '../user/Component/Footer'

const UserRoute = (props) => {
  const {Component} = props;

  return (
    <>  
      <Header />
      <Component />
      <Footer />
    </>
  )
}

export default UserRoute
