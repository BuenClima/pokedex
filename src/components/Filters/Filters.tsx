import { Chip, Typography } from '@mui/material'

export type FiltersProps = {
  filters: Record<string, boolean>
  setFilters: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
}

export const Filters = ({ filters, setFilters }: FiltersProps) => {
  return Object.keys(filters).map((filter) => (
    <Chip
      clickable
      onClick={() => {
        setFilters((prev) => ({
          ...Object.keys(prev).reduce((acc, key) => {
            acc[key] = key === filter
            return acc
          }, {} as Record<string, boolean>)
        }))
      }}
      size="medium"
      label={
        <Typography
          variant="body2"
          sx={{
            color: filters[filter] ? 'black !important' : 'text.primary',
            textTransform: 'capitalize'
          }}
        >
          {filter}
        </Typography>
      }
      sx={{
        backgroundColor: filters[filter] ? 'white !important' : 'transparent'
      }}
    />
  ))
}
