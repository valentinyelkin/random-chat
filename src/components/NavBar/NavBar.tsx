import { AppBar, Avatar, Button, Divider, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";
import { useAuth } from "../../context/auth-context";

export default function Navbar() {
    const { user, onLogOut } = useAuth();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    console.log(user, 'useruseruseruser');

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '100%'}}>
                <AppBar
                    position='static'
                    color='default'
                    style={{
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'inherit',
                        padding: '10px 20px',
                    }}
                >
                    <div
                        style={{
                            width: 'max-content',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'inherit'
                        }}
                    >
                        <Link href={'/'}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <img
                                    style={{ height: 60, width: 60}}
                                    alt='Random Image'
                                    src='https://source.unsplash.com/random/60x60?sig=1'
                                />
                                <Typography variant='h4'>Random Image</Typography>
                            </div>
                        </Link>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        width: 'max-content'
                    }}>
                        <Button
                            id='basic-button'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Avatar alt='R' src='/'/>
                        </Button>
                        <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <Link href={'/account'}>
                                <MenuItem onClick={handleClose}>
                                    <Typography>Account</Typography>
                                </MenuItem>
                            </Link>
                            <Divider/>
                            <MenuItem onClick={() => {
                                user !== null ? onLogOut() : router.push( '/login');
                            }}>
                                <Typography>{user !== null ? 'Log out' : 'Login'}</Typography>
                            </MenuItem>
                        </Menu>
                    </div>
                </AppBar>
            </div>
        </div>
    );
}
