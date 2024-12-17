import React from 'react'
import { Modal, IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Card, CardProps } from '../Card'

export type DetailModalProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  data: CardProps
}

export default function DetailModal({ open, setOpen, data }: DetailModalProps) {
  const handleClose = () => setOpen(false)

  return (
    <Modal
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)' // Full black backdrop
          }
        }
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '70vw',
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 24,
          p: 2,
          borderColor: 'white'
        }}
      >
        {/* Close Button */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>

        <Card {...data} />
      </Box>
    </Modal>
  )
}
