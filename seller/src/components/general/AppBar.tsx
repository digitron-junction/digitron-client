import { useContext } from 'react';
import { Grid, Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Greeting, SearchBox, UserProfile } from 'src/components';
import { ReactComponent as MenuIcon } from 'src/assets/icons/menu.svg';

import { UserContext } from 'src/contexts/User';
import { NoProvider, NoAuthentication } from 'src/utils/errors';

import * as admin from 'src/dummy';

interface AppBarProps {
    toggleSidebar: () => void;
}

export default function AppBar(props: AppBarProps) {
    // Get User's Data
    const user = useContext(UserContext);
    if (!user) throw NoProvider('User Context');
    if (!user.isAuthenticated) throw NoAuthentication;

    // Get Artist's Profile
    // This can become an API call
    const userProfile = admin.userProfile;

    const theme = useTheme();
    const isScreenSmallUp = useMediaQuery(theme.breakpoints.up('sm'));
    const isScreenMediumUp = useMediaQuery(theme.breakpoints.up('md'));
    const isScreenLargeUp = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Grid container spacing={{ xs: 5, xl: 7 }} alignItems="center">
            <Grid item xs>
                <Stack
                    direction={isScreenSmallUp ? 'row' : 'column'}
                    justifyContent="space-between"
                    alignItems={isScreenSmallUp ? 'center' : 'stretch'}
                    gap={2}
                >
                    <Stack direction="row" justifyContent="space-between" gap={2}>
                        {
                            // Menu Icon
                            !isScreenLargeUp && (
                                <IconButton color="primary" onClick={props.toggleSidebar}>
                                    <MenuIcon width={24} height={24} />
                                </IconButton>
                            )
                        }
                        <Greeting photo={userProfile.photo} />
                        {
                            // Dummy, hidden icon that is used to fill up space to the right of Greeting
                            !isScreenSmallUp && (
                                <Box sx={{ visibility: 'hidden' }}>
                                    <MenuIcon width={24} height={24} />
                                </Box>
                            )
                        }
                    </Stack>
                    <SearchBox />
                </Stack>
            </Grid>

            {isScreenMediumUp && (
                <Grid item xs={4} xl={3}>
                    <UserProfile name={userProfile.name} type={userProfile.type} photo={userProfile.photo} />
                </Grid>
            )}
        </Grid>
    );
}
