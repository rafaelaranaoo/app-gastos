import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'

/**
 * Componente: StatCard
 * Descrição: Mostra um card de estatística com título, valor e ícone.
 */
function StatCard({ title, value, icon, color = 'primary.main', helper }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.25,
        border: '1px solid',
        borderColor: 'divider',
        height: '100%'
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          sx={{
            bgcolor: color,
            color: '#ffffff',
            width: 46,
            height: 46
          }}
        >
          {icon}
        </Avatar>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5" sx={{ mt: 0.3 }}>
            {value}
          </Typography>
          {helper ? (
            <Typography variant="caption" color="text.secondary">
              {helper}
            </Typography>
          ) : null}
        </Box>
      </Stack>
    </Paper>
  )
}

export default StatCard
