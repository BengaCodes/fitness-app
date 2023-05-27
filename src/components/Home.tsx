import { Box } from '@mui/material'
import { useState } from 'react'
import HeroBanner from './HeroBanner'
import SearchExercises from './SearchExercises'
import Exercises from './Exercises'

const Home = () => {
  // const [first, setfirst] = useState('')

  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
