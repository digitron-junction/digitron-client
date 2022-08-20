import { Button, TextField, Typography, Stack, Box, Container, InputAdornment, IconButton, Avatar } from '@mui/material';

import { ReactComponent as AvatarSVG } from "../assets/avatar_female.svg";

export default function UserProfileButton() {
  return <Stack direction="row" alignItems="center" gap={2}>
    <AvatarSVG width={55} height={55} />
    <Stack gap={0.5}>
      <Typography variant="h4">Hello Consumer</Typography>
      <Typography variant="caption">Welcome to 3Commerce</Typography>
    </Stack>
  </Stack>
}