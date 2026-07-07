import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { LogoDesktop, LogoMovil } from '../Logo';
import { Btn } from '../Styled';
import './Header.scss';
import ItemSelector from '../ItemSelector';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import YouTube from '@mui/icons-material/YouTube';
const Tooltip = React.lazy(() => import('@mui/material/Tooltip'));

function Header({ footerRef }) {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleDownloadClick = () => {
    navigate('/descargas'); // Navigate to the Descargas page
  };
  const handleDocumentosClick = () => {
    navigate('/documentos-importantes'); // Navigate to the Descargas page
  };
  const handleMarcasClick = () => {
    window.open('https://escritos.ricardolopezreyero.com', '_blank', 'noopener,noreferrer');
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentLang, setCurrentLang] = React.useState('es');

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith('/en') ? 'en' : 'es';
    setCurrentLang(lang);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let logo = require('../../assets/img/Logo.png');
  let logoMovil = require('../../assets/img/isotipo_rlr_sin_fondo.png');

  // Función para hacer scroll hacia el footer
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar ref={footerRef} position="static" style={{ backgroundColor: '#F6F8FF', padding: '13px 0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to='/'>
              <LogoMovil src={logoMovil} alt="Logo" />
            </Link>

            <Btn
              backgcolor='#7fffd400'
              varcolor='#585DCC'
              varfontsize='16px'
              varpadding='2px'
              vardropshadow='none'
              onClick={handleDownloadClick} // Add onClick handler
              vargridgap='8px'
            >

              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.26562 15.25H15.2656" stroke="#585DCC" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M7.73529 12.7803C8.02819 13.0732 8.50306 13.0732 8.79596 12.7803L13.5689 8.00736C13.8618 7.71447 13.8618 7.23959 13.5689 6.9467C13.276 6.65381 12.8012 6.65381 12.5083 6.9467L8.26562 11.1893L4.02298 6.9467C3.73009 6.65381 3.25522 6.65381 2.96232 6.9467C2.66943 7.23959 2.66943 7.71447 2.96232 8.00736L7.73529 12.7803ZM9.01562 1.25V0.5H7.51562V1.25H9.01562ZM9.01562 12.25V1.25H7.51562V12.25H9.01562Z" fill="#585DCC" />
              </svg>
              <FormattedMessage id="header.download" />
            </Btn>
            <Btn
              backgcolor='transparent'
              varcolor='#585DCC'
              varpadding='2px'
              vardropshadow='none'
              varfontsize='16px'
              onClick={handleDocumentosClick} // Add onClick handler
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <image width="20" height="20" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACTElEQVR4nO2aTYvTcBDG/x70IOjRs1ffPoAnUREEdX2jnclmpgseevYj+L74AoqgCKufQdCLFw/CHjQz0T3sWf0Eu4fd9bW60iYBmyZtKmEzkTzwQGmadH7/eWZ6qZu5tLgLWZ8CySqyblo0kKwC60K/VpcnIH1WdaGFgVgX8kFYVuoDIiu5IFUXN61dA8K27P57kEbWhAbi0szI36q6sAYkraoLa0DSmuamQg8sQdiAcH3sGhC2ZVdGHgs9sARhA8L1sWtA2Jadc8733+4+3dWd/5zHQidTgnBMTUAi8esesLxu+e/31xIERyxrs7N6qHbRwiyTvKwVCJDcR5JPI++zrNcGBFiu9GMHcx/2pmEmgmzVjBSFSJSGAZYX9kFIrmbfIw+SbrQpOGg7WpQDQXotmhn94VF4ZvJpVDoTensSBHB4oVhbjUEA6/UEAjt6vng+DUEg6Y3oM/LdIz033aBttUnu5Az2zbEQpkByIIDlVgIBLGczIcyA5HWCdD6BQD+YyYUwAZIJsbkt+Z2I4hSv2LEgpItVQfRjkwUBpA8H10m/IoUnnTV5FFwcrM7opO+Og0CSb+jrKWdNHoeHkfVnVKTOZ8dJH8fd+oIkJ5xFAemTKE76PKcTg+tIugF+eNxZFbJ+jE+7BxzwMIQ8qgUEcLgvNeg9ZJ0bihPpBpIec5aFrJdHNhbJLyR5Ew/+msfBEWddQPJqzApeb3f0qLOuVmt5x2ALDQHIb2RZAtJ72Hl3wNVB3a5uB9JlYPnc/4NbmwIkWtpT9hf9ARNIR1oYXHVcAAAAAElFTkSuQmCC" />
              </svg>

              <FormattedMessage
                id="downloads.escritos.title"
              />
            </Btn>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#4D5FC7"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              size="large"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                padding: '20px',
              }}
            >

              <ItemSelector />
              <Btn
                backgcolor='#7fffd400'
                varcolor='#585DCC'
                varpadding='2px'
                vardropshadow='none'
                vargridgap='8px'
                varfontsize='16px'
                onClick={handleDocumentosClick} // Add onClick handler
              >

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3044_743)">
                    <path d="M12.1583 2.15833C11.8417 1.84167 11.4167 1.66667 10.975 1.66667H5C4.08333 1.66667 3.33333 2.41667 3.33333 3.33333V16.6667C3.33333 17.5833 4.075 18.3333 4.99167 18.3333H15C15.9167 18.3333 16.6667 17.5833 16.6667 16.6667V7.35833C16.6667 6.91667 16.4917 6.49167 16.175 6.18333L12.1583 2.15833ZM12.5 15H7.5C7.04167 15 6.66667 14.625 6.66667 14.1667C6.66667 13.7083 7.04167 13.3333 7.5 13.3333H12.5C12.9583 13.3333 13.3333 13.7083 13.3333 14.1667C13.3333 14.625 12.9583 15 12.5 15ZM12.5 11.6667H7.5C7.04167 11.6667 6.66667 11.2917 6.66667 10.8333C6.66667 10.375 7.04167 10 7.5 10H12.5C12.9583 10 13.3333 10.375 13.3333 10.8333C13.3333 11.2917 12.9583 11.6667 12.5 11.6667ZM10.8333 6.66667V2.91667L15.4167 7.5H11.6667C11.2083 7.5 10.8333 7.125 10.8333 6.66667Z" fill="#585DCC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3044_743">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <FormattedMessage
                  id="downloads.documentos.title"
                />
              </Btn>
              <Box sx={{ display: { xs: 'flex', md: 'flex' } }} className='redes' style={{ justifyContent: 'space-between', padding: '10px 0' }}>
                <Tooltip title='YouTube'>
                  <Link to='https://www.youtube.com/@RicardoLopezReyero'>
                    <YouTube style={{ color: '#585DCC', fontSize: '30px' }} />
                  </Link>
                </Tooltip>
                <Tooltip title='Tiktok'>
                  <Link to='https://www.tiktok.com/@ricardolopezreyero1'>
                    <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.8655 6.695C16.182 5.91462 15.8053 4.91243 15.8055 3.875H12.7155V16.275C12.6917 16.946 12.4084 17.5816 11.9253 18.0479C11.4422 18.5143 10.797 18.7749 10.1255 18.775C8.70554 18.775 7.52554 17.615 7.52554 16.175C7.52554 14.455 9.18554 13.165 10.8955 13.695V10.535C7.44554 10.075 4.42554 12.755 4.42554 16.175C4.42554 19.505 7.18554 21.875 10.1155 21.875C13.2555 21.875 15.8055 19.325 15.8055 16.175V9.885C17.0585 10.7849 18.5629 11.2676 20.1055 11.265V8.175C20.1055 8.175 18.2255 8.265 16.8655 6.695Z" fill="#585DCC" />
                    </svg>
                  </Link>
                </Tooltip>
                <Tooltip title='Linkedin'>
                  <Link to='https://www.linkedin.com/in/ricardo-lopez-reyero/'>
                    <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5156 3.75H7.01562C4.94488 3.75 3.26562 5.42925 3.26562 7.5V18C3.26562 20.0707 4.94488 21.75 7.01562 21.75H17.5156C19.5871 21.75 21.2656 20.0707 21.2656 18V7.5C21.2656 5.42925 19.5871 3.75 17.5156 3.75ZM9.26562 18H7.01562V9.75H9.26562V18ZM8.14062 8.799C7.41612 8.799 6.82812 8.2065 6.82812 7.476C6.82812 6.7455 7.41612 6.153 8.14062 6.153C8.86513 6.153 9.45312 6.7455 9.45312 7.476C9.45312 8.2065 8.86588 8.799 8.14062 8.799ZM18.2656 18H16.0156V13.797C16.0156 11.271 13.0156 11.4622 13.0156 13.797V18H10.7656V9.75H13.0156V11.0738C14.0626 9.13425 18.2656 8.991 18.2656 12.9307V18Z" fill="#585DCC" />
                    </svg>
                  </Link>
                </Tooltip>
              </Box>

              <Btn
                displaymovil='none'
                className='btn'
                varfontsize='12px'
                varpadding='10px 42px'
                onClick={scrollToFooter}
              >
                {currentLang === 'en' ? 'Contact' : 'Contacto'}
              </Btn>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to='/'>
                <LogoDesktop src={logo} alt="Logo" />
              </Link>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: { xs: 'unset', md: 'space-between' }, width: { xs: 'none', md: '33%' }, maxWidth: '400px' }}>
              <Btn
                backgcolor='#7fffd400'
                varcolor='#585DCC'
                varpadding='2px'
                vardropshadow='none'
                vargridgap='8px'
                varfontsize='16px'
                varweight='500'
                onClick={handleDownloadClick} // Add onClick handler
              >

                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.26562 15.25H15.2656" stroke="#585DCC" strokeWidth="1.5" strokeLinecap="square" />
                  <path d="M7.73529 12.7803C8.02819 13.0732 8.50306 13.0732 8.79596 12.7803L13.5689 8.00736C13.8618 7.71447 13.8618 7.23959 13.5689 6.9467C13.276 6.65381 12.8012 6.65381 12.5083 6.9467L8.26562 11.1893L4.02298 6.9467C3.73009 6.65381 3.25522 6.65381 2.96232 6.9467C2.66943 7.23959 2.66943 7.71447 2.96232 8.00736L7.73529 12.7803ZM9.01562 1.25V0.5H7.51562V1.25H9.01562ZM9.01562 12.25V1.25H7.51562V12.25H9.01562Z" fill="#585DCC" />
                </svg>
                <FormattedMessage
                  id="header.download"
                />
              </Btn>
              <Btn
                backgcolor='transparent'
                varcolor='#585DCC'
                varpadding='2px'
                vardropshadow='none'
                vargridgap='8px'
                varfontsize='16px'
                varweight='500'
                onClick={handleMarcasClick} // Add onClick handler
              >
                <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <image width="19" height="19" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACTElEQVR4nO2aTYvTcBDG/x70IOjRs1ffPoAnUREEdX2jnclmpgseevYj+L74AoqgCKufQdCLFw/CHjQz0T3sWf0Eu4fd9bW60iYBmyZtKmEzkTzwQGmadH7/eWZ6qZu5tLgLWZ8CySqyblo0kKwC60K/VpcnIH1WdaGFgVgX8kFYVuoDIiu5IFUXN61dA8K27P57kEbWhAbi0szI36q6sAYkraoLa0DSmuamQg8sQdiAcH3sGhC2ZVdGHgs9sARhA8L1sWtA2Jadc8733+4+3dWd/5zHQidTgnBMTUAi8esesLxu+e/31xIERyxrs7N6qHbRwiyTvKwVCJDcR5JPI++zrNcGBFiu9GMHcx/2pmEmgmzVjBSFSJSGAZYX9kFIrmbfIw+SbrQpOGg7WpQDQXotmhn94VF4ZvJpVDoTensSBHB4oVhbjUEA6/UEAjt6vng+DUEg6Y3oM/LdIz033aBttUnu5Az2zbEQpkByIIDlVgIBLGczIcyA5HWCdD6BQD+YyYUwAZIJsbkt+Z2I4hSv2LEgpItVQfRjkwUBpA8H10m/IoUnnTV5FFwcrM7opO+Og0CSb+jrKWdNHoeHkfVnVKTOZ8dJH8fd+oIkJ5xFAemTKE76PKcTg+tIugF+eNxZFbJ+jE+7BxzwMIQ8qgUEcLgvNeg9ZJ0bihPpBpIec5aFrJdHNhbJLyR5Ew/+msfBEWddQPJqzApeb3f0qLOuVmt5x2ALDQHIb2RZAtJ72Hl3wNVB3a5uB9JlYPnc/4NbmwIkWtpT9hf9ARNIR1oYXHVcAAAAAElFTkSuQmCC" />
                </svg>

                <FormattedMessage
                  id="downloads.escritos.title"
                />
              </Btn>
              <Btn
                backgcolor='#7fffd400'
                varcolor='#585DCC'
                varpadding='2px'
                vardropshadow='none'
                vargridgap='8px'
                varfontsize='16px'
                varweight='500'
                onClick={handleDocumentosClick} // Add onClick handler
              >

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3044_743)">
                    <path d="M12.1583 2.15833C11.8417 1.84167 11.4167 1.66667 10.975 1.66667H5C4.08333 1.66667 3.33333 2.41667 3.33333 3.33333V16.6667C3.33333 17.5833 4.075 18.3333 4.99167 18.3333H15C15.9167 18.3333 16.6667 17.5833 16.6667 16.6667V7.35833C16.6667 6.91667 16.4917 6.49167 16.175 6.18333L12.1583 2.15833ZM12.5 15H7.5C7.04167 15 6.66667 14.625 6.66667 14.1667C6.66667 13.7083 7.04167 13.3333 7.5 13.3333H12.5C12.9583 13.3333 13.3333 13.7083 13.3333 14.1667C13.3333 14.625 12.9583 15 12.5 15ZM12.5 11.6667H7.5C7.04167 11.6667 6.66667 11.2917 6.66667 10.8333C6.66667 10.375 7.04167 10 7.5 10H12.5C12.9583 10 13.3333 10.375 13.3333 10.8333C13.3333 11.2917 12.9583 11.6667 12.5 11.6667ZM10.8333 6.66667V2.91667L15.4167 7.5H11.6667C11.2083 7.5 10.8333 7.125 10.8333 6.66667Z" fill="#585DCC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3044_743">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <FormattedMessage
                  id="downloads.documentos.title"
                />
              </Btn>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ alignItems: 'center' }} className='contacto-grid'>
              <ItemSelector className='display' />

              <Box sx={{ display: { xs: 'none', md: 'flex' } }} className='redes'>
                <Tooltip title='YouTube'>
                  <Link to='https://www.youtube.com/@RicardoLopezReyero'>
                    <YouTube style={{ color: '#585DCC' }} />
                  </Link>
                </Tooltip>
                <Tooltip title='Tiktok'>
                  <Link to='https://www.tiktok.com/@ricardolopezreyero1'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.8655 6.695C16.182 5.91462 15.8053 4.91243 15.8055 3.875H12.7155V16.275C12.6917 16.946 12.4084 17.5816 11.9253 18.0479C11.4422 18.5143 10.797 18.7749 10.1255 18.775C8.70554 18.775 7.52554 17.615 7.52554 16.175C7.52554 14.455 9.18554 13.165 10.8955 13.695V10.535C7.44554 10.075 4.42554 12.755 4.42554 16.175C4.42554 19.505 7.18554 21.875 10.1155 21.875C13.2555 21.875 15.8055 19.325 15.8055 16.175V9.885C17.0585 10.7849 18.5629 11.2676 20.1055 11.265V8.175C20.1055 8.175 18.2255 8.265 16.8655 6.695Z" fill="#585DCC" />
                    </svg>
                  </Link>
                </Tooltip>
                <Tooltip title='Linkedin'>
                  <Link to='https://www.linkedin.com/in/ricardo-lopez-reyero/'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5156 3.75H7.01562C4.94488 3.75 3.26562 5.42925 3.26562 7.5V18C3.26562 20.0707 4.94488 21.75 7.01562 21.75H17.5156C19.5871 21.75 21.2656 20.0707 21.2656 18V7.5C21.2656 5.42925 19.5871 3.75 17.5156 3.75ZM9.26562 18H7.01562V9.75H9.26562V18ZM8.14062 8.799C7.41612 8.799 6.82812 8.2065 6.82812 7.476C6.82812 6.7455 7.41612 6.153 8.14062 6.153C8.86513 6.153 9.45312 6.7455 9.45312 7.476C9.45312 8.2065 8.86588 8.799 8.14062 8.799ZM18.2656 18H16.0156V13.797C16.0156 11.271 13.0156 11.4622 13.0156 13.797V18H10.7656V9.75H13.0156V11.0738C14.0626 9.13425 18.2656 8.991 18.2656 12.9307V18Z" fill="#585DCC" />
                    </svg>
                  </Link>
                </Tooltip>
              </Box>

              <Btn
                displaymovil='none'
                className='btn'
                onClick={scrollToFooter}
              >
                {currentLang === 'en' ? 'Contact' : 'Contacto'}
              </Btn>

            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;