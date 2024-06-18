import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routes'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'




export default memo(function APP() {
  return (
    <div>
      <div className="app">
        <AppHeader/>
        <div className="page">
          {useRoutes(routes)}
        </div>
        
        <AppFooter/>

      </div>
    </div>
  )
})
