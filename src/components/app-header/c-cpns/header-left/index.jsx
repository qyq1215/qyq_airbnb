import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

export default memo(function HeaderLeft() {
  const navigate = useNavigate()
  
  function logoClickHandle() {
    navigate("/home")
  }


  return (
    <LeftWrapper>
      <span className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </span>
    </LeftWrapper>
  )
})
