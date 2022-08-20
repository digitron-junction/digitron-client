import { useRef, useState } from 'react';

import { formatDistance, subDays } from 'date-fns';
import { alpha, Badge, Box, Divider, IconButton, List, ListItem, Popover, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const MessageBadge = styled(Badge)(
    ({ theme }) => `
    
    .MuiBadge-badge {
        background-color: ${theme.palette.notification.main};
        color: ${theme.palette.notification.contrastText};
        min-width: 16px; 
        height: 16px;
        padding: 0;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px ${alpha(theme.palette.error.main, 0.3)};
            content: "";
        }
    }
`
);

function HeaderMessage() {
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip arrow title="Message">
                <IconButton
                    ref={ref}
                    onClick={handleOpen}
                    sx={{
                        color: (theme) => theme.textColors.primary.dark,
                        background: (theme) => theme.palette.bg.light
                    }}
                >
                    <MessageBadge
                        badgeContent={1}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                    >
                        <ChatBubbleOutlineIcon fontSize="small" />
                    </MessageBadge>
                </IconButton>
            </Tooltip>
            <Popover
                anchorEl={ref.current}
                onClose={handleClose}
                open={isOpen}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <Box sx={{ p: 2 }} display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">Message</Typography>
                </Box>
                <Divider />
                <List sx={{ p: 0 }}>
                    <ListItem sx={{ p: 2, minWidth: 350, display: { xs: 'block', sm: 'flex' } }}>
                        <Box flex="1">
                            <Box display="flex" justifyContent="space-between">
                                <Typography sx={{ fontWeight: 'bold' }}>Messaging Platform</Typography>
                                <Typography variant="caption" sx={{ textTransform: 'none' }}>
                                    {formatDistance(subDays(new Date(), 3), new Date(), {
                                        addSuffix: true
                                    })}
                                </Typography>
                            </Box>
                            <Typography component="span" variant="body2" color="text.secondary">
                                {' '}
                                new messages in your inbox
                            </Typography>
                        </Box>
                    </ListItem>
                </List>
            </Popover>
        </>
    );
}

export default HeaderMessage;
