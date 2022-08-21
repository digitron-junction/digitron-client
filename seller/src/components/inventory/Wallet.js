import { SectionCard } from 'src/components';
import { ReactComponent as WalletBg } from 'src/assets/wallet.svg';
import { Box, Stack, Chip, Typography, IconButton } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { providers, Contract } from 'ethers';

// const provider = new providers.Web3Provider(window.ethereum);
// get the end user
// const signer = provider.getSigner();

export default function Wallet(props) {
    const [waletAddress, setWalletAddress] = useState('loading...');

    useEffect(() => {
        async function name() {
            const add = await signer.getAddress();
            setWalletAddress(add);
        }
        name();
    }, [signer]);

    return (
        <SectionCard title="Wallet">
            <Box sx={{ position: 'relative' }}>
                <WalletBg width="100%" height="100%" />
                <Stack
                    gap={1}
                    sx={{
                        position: 'absolute',
                        top: '15%',
                        left: '15%'
                    }}
                >
                    <Stack direction="row" gap={1} mb={{ xs: '70%', md: '10%', xl: '20%' }}>
                        {/* <Stack direction="row" gap={1} mb={2}> */}
                        <Typography variant="h4" color="white">
                            3Commerce
                        </Typography>
                    </Stack>
                    <Stack direction="row" gap={1} alignItems="center">
                        <Chip
                            label={<>{waletAddress}</>}
                            size="small"
                            sx={{ backgroundColor: 'white', width: 100, fontSize: 8 }}
                        />
                        <IconButton>
                            <ContentCopy fontSize="small" />
                        </IconButton>
                    </Stack>
                    <Stack direction="row" gap={2}>
                        <Typography variant="caption">Username</Typography>
                        <Typography variant="caption">Date Joined</Typography>
                    </Stack>
                </Stack>
            </Box>
        </SectionCard>
    );
}
