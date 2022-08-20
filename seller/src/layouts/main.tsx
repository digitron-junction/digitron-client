import { useState } from 'react';
import { Outlet } from 'react-router';
import { Box, Stack } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { BackgroundDecor } from 'src/theme/OrionTheme';
import { Sidebar, AppBar } from 'src/components';

export default function Main() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <BackgroundDecor />
            <Scrollbars autoHide autoHeight autoHeightMax={1000}>
                <Stack direction="row">
                    <Sidebar width={240} scrollHeight={800} open={sidebarVisible} onClose={toggleSidebar} />
                    <Stack
                        alignItems="center"
                        sx={{ width: '100%', py: { xs: 3, xl: 10 }, px: { xs: 1, md: 3, xl: 10 } }}
                    >
                        <AppBar toggleSidebar={toggleSidebar} />
                        <Box sx={{ mt: { xs: 3, xl: 8 } }}>
                            <Outlet />
                        </Box>
                    </Stack>
                </Stack>
            </Scrollbars>
        </>
    );
}
