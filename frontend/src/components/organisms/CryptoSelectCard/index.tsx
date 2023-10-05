import React, { useState } from 'react'
import { Box, SxProps, Typography } from '@mui/material'
import MyPortfolioCard, {
  MyPortfolioCardProps,
} from '@/components/molecules/MyPortfolioCard'
import theme from '@/theme'
export interface CryptoSelectCardProps {
  cards: MyPortfolioCardProps[]
  onClick?: (index: number) => void
  sx?: SxProps
}
const CryptoSelectCard = ({ cards, onClick, sx }: CryptoSelectCardProps) => {
  const [selectedCard, setSelectedCard] = useState<number>(0)

  const handleCardClick = (index: number) => {
    onClick?.(index)
    setSelectedCard(index)
  }

  return (
    <Box
      display={'flex'}
      flexDirection="column"
      gap={4}
      padding={theme.spacing(6)}
      borderRadius={theme.spacing(1)}
      border={`1px solid ${theme.palette.grey[100]}`}
      sx={{ ...sx, backgroundColor: theme.palette.gamma.GREY_WHITE }}
    >
      <Typography variant="body1">Choose crypto</Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 159px)"
        rowGap={4}
        alignItems={'center'}
      >
        {cards.map((card, index) => (
          <MyPortfolioCard
            key={card.label}
            icon={card.icon}
            label={card.label}
            sx={{
              height: theme.spacing(39),
              width: theme.spacing(39.75),
            }}
            subLabel={card.subLabel}
            selected={selectedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </Box>
    </Box>
  )
}

export default CryptoSelectCard
