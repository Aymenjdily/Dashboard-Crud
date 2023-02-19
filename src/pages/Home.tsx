import React from 'react'
import { useList } from '@pankod/refine-core/dist/hooks/data/useList'

import {
  PieChart,
  PropertyReferrance,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'

import { 
  Box,
  Typography,
  Stack
} from '@pankod/refine-mui'

const Home = () => {
  return (
    <Box>
      <Typography
        fontSize={25}
        fontWeight={700}
        color="#11142D"
      >
        Dashboard
      </Typography>
      <Box
        mt="20px"
        display="flex"
        flexWrap="wrap"
        gap={4}
      >
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={[
            '#475be8',
            "#e4e8ef"
          ]}
        />
        <PieChart
          title="Properties for rent"
          value={684}
          series={[40, 12]}
          colors={[
            '#475ae8',
            "#e4e8ef"
          ]}
        />
        <PieChart
          title="Total Customers"
          value={684}
          series={[10, 55]}
          colors={[
            '#275be8',
            "#e4e8ef"
          ]}
        />
        <PieChart
          title="Properties for Cities"
          value={500}
          series={[95, 10]}
          colors={[
            '#475be8',
            "#e4e8ef"
          ]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: 'column', lg: 'row' }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrance />
      </Stack>
    </Box>
  )
}

export default Home