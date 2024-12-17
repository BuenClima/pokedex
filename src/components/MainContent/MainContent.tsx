import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded'
import { Search } from '../Search/Search'
import { useState } from 'react'
import { Filters } from '../Filters/Filters'
import { PokemonList } from '../PokemonList/PokemonList'

export default function MainContent() {
  const [filters, setFilters] = useState<Record<string, boolean>>({
    all: true,
    fire: false,
    water: false,
    grass: false,
    electric: false,
    psychic: false,
    normal: false,
    fighting: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    poison: false,
    flying: false
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Pokemons
        </Typography>
        <Typography>Check out Pokemons info</Typography>
      </div>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto'
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto'
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 3,
            overflow: 'auto'
          }}
        >
          <Filters filters={filters} setFilters={setFilters} />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto'
          }}
        >
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <PokemonList />
    </Box>
  )
}
