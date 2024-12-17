import { styled } from '@mui/material'
import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material'
import { Author } from './components/Author'

const SyledCard = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: ((theme as any).vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px'
  }
}))

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16
  }
})

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export type CardProps = {
  img: string
  tag: string
  title: string
  description: string
  authors: { name: string; avatar: string }[]
  onClick?: () => void
}

export const Card = (props: CardProps) => {
  return (
    <SyledCard variant="outlined" onClick={props.onClick}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={props.img}
        sx={{
          aspectRatio: '16 / 9',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      />
      <SyledCardContent>
        <Typography gutterBottom variant="caption" component="div">
          {props.tag}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
          {props.description}
        </StyledTypography>
      </SyledCardContent>
      <Author authors={props.authors} />
    </SyledCard>
  )
}
