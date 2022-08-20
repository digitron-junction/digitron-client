import { useLocation, useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { ListItem, Button, List, Drawer, useMediaQuery, useTheme } from '@mui/material';

import { ReactComponent as Logo } from 'src/assets/logo.svg';

// ------------------------------------ Nav Items Definition --------------------------------------

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const navItems = [
    {
        name: 'Home',
        link: '/',
        icon: HomeIcon
    },
    {
        name: 'Profile',
        link: '/profile',
        icon: PersonIcon
    },
    {
        name: 'Products',
        link: '/products',
        icon: InventoryIcon
    },
    {
        name: 'Orders',
        link: '/orders',
        icon: AccountBalanceWalletIcon
    },
    
];

// ------------------------------------------------------------------------------------------------

const SidebarButton = styled(Button)(
    ({ theme }) => `
	 	color: ${theme.palette.primary.main};
		border-radius: 15px;
		font-weight: bold;
		transition: none;

		&:hover, &.active {
			background: linear-gradient(90deg, ${theme.palette.primary.main} 1.49%, ${theme.palette.primary.light} 100%);
			color: white;
		}
        &.active {
			background: linear-gradient(90deg, ${theme.palette.primary.main} 1.49%, ${theme.palette.primary.light} 100%);
			color: white;
		}
	`
);

const SidebarContents = (props: { scrollHeight: number }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <List>
            {/* Logo */}
            <ListItem>
                <Logo height={88} />
            </ListItem>

            {/* Navbar Items */}
            <Scrollbars autoHide autoHeight autoHeightMax={props.scrollHeight}>
                {navItems.map((item, i) => (
                    <ListItem key={i}>
                        <SidebarButton
                            variant="text"
                            fullWidth
                            startIcon={<item.icon />}
                            onClick={() => navigate(item.link)}
                            className={location.pathname == item.link ? 'active' : 'inactive'}
                        >
                            {item.name}
                        </SidebarButton>
                    </ListItem>
                ))}
            </Scrollbars>
        </List>
    );
};

interface SidebarProps {
    width: number;
    scrollHeight: number;
    open: boolean;
    onClose: () => void;
}

export default function Sidebar(props: SidebarProps) {
    const theme = useTheme();
    const isScreenLarge = useMediaQuery(theme.breakpoints.up('lg'));
    // const [sidebarVisible, setSidebarVisible] = useState(false);

    return isScreenLarge ? (
        // PC View
        <Drawer variant="permanent" sx={{ width: props.width }}>
            <SidebarContents scrollHeight={props.scrollHeight} />
        </Drawer>
    ) : (
        // Mobile View
        <Drawer variant="temporary" anchor="left" open={props.open} onClose={props.onClose} sx={{ width: props.width }}>
            <SidebarContents scrollHeight={props.scrollHeight} />
        </Drawer>
    );
}
