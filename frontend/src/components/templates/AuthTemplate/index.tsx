import { Grid, styled } from '@mui/material'
import React from 'react'
import ImageComponent from '@Components/atoms/Image'
import theme from '@/theme'
import { IMAGE } from '@/strings/constant'

interface AuthTemplateProps {
  image: string
  data: React.ReactNode
}

const MainContainer = styled(Grid)({
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
})

const RightContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const LeftContainer = styled(Grid)({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})

const AuthTemplate = ({ image, data }: AuthTemplateProps) => {
  return (
    <MainContainer container>
      <LeftContainer item xs={6} md={6}>
        <ImageComponent
          src={image}
          alt={IMAGE}
          imageProps={{ width: '100%' }}
        />
      </LeftContainer>
      <RightContainer item xs={12} md={6}>
        {data}
      </RightContainer>
    </MainContainer>
  )
}

export default AuthTemplate
