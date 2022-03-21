import React from 'react'
import { ChakraProvider, Button } from '@chakra-ui/react'

export const App = () => (
    <ChakraProvider>
        <div style={{ textAlign: 'center' }}>
            <h1>Youtube Ranking Viewer</h1>
            <Button colorScheme="blue">Button</Button>
        </div>
    </ChakraProvider>
)

export default App
