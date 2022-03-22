import React from 'react'
import { Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box
      as='h3'
      bg='teal.300'
      fontWeight='bold'
      fontSize='large'
      w='100%'
      p={4}
      color='white'>
        Youtube Ranking Viewer
    </Box>
  )
}

export default Header