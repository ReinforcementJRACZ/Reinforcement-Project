import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const settings = ['Profile', 'Logout'];
const pages = ['Browse', 'My Books'];

function MenuAppBar() {
	const [anchorElUser, setAnchorElUser] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);
	const navigate = useNavigate();

  const toggleSidebar = (newOpen) => () => {
    setOpenSidebar(newOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

	const handleNavigation = (route) => {
    navigate(route);
  };

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleSidebar(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                flexGrow: 1,
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Arial',
                fontWeight: 700,
								fontSize: '1.75rem',
                letterSpacing: '.15rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BetterReads
            </Typography>

						<Button
                color="inherit"
                onClick={() => handleNavigation('/')}
                sx={{ textTransform: 'none' }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigation('/catalogue')}
                sx={{ textTransform: 'none' }}
              >
                Catalogue
              </Button>
							{/* <Button
                color="inherit"
                onClick={() => handleNavigation('/my-books')}
                sx={{ textTransform: 'none' }}
              >
                My Books
              </Button> */}

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>				
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/pro1.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
		</Box>
	)
}

export default MenuAppBar;