import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { navButtons } from '../data/data'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { GrLogout } from 'react-icons/gr'
import { BsGearFill } from 'react-icons/bs'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlinePlus } from 'react-icons/ai'


const AvatarNav = ({open, anchor, onclick0, onClick1, onClick2, onClick3, onClick4}) => {
    return (
        <Menu
            anchorEl={anchor}
            id="account-menu"
            open={open}
            onClose={onclick0}
            onClick={onClick1}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={onClick2}>
                <Avatar><AiOutlinePlus /></Avatar>
                Add Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={onClick3}>
                <ListItemIcon>
                    <BsGearFill />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={onClick4}>
                <ListItemIcon>
                    <GrLogout />
                </ListItemIcon>
                Log Out
            </MenuItem>

        </Menu>
    )
}


const SmDeviceNav = () => {
    const [expand, setExpand] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <Stack alignItems='center' spacing={2}
            sx={{ height: expand ? '100vh' : '55px', width: '100vw', backgroundColor: '#14213d', display: { xs: 'flex', md: 'none', lg: 'none' } }}
        >
            <Stack direction='row' alignItems='center' justifyContent='space-between'
                sx={{ height: '100%', width: '100%', display: expand ? 'none' : 'flex' }}
            >
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar>H</Avatar>
                </IconButton>
                <AvatarNav anchor={anchorEl} open={open} onclick0={handleClose} onClick1={handleClose} onClick2={handleClose} onClick3={handleClose} onClick4={handleClose} />
                <IconButton onClick={handleExpand} sx={{ mr: 2 }}>
                    <GiHamburgerMenu size={30} color='white' />
                </IconButton>
            </Stack>

            {/* expanded nav */}
            <Stack direction='column' alignItems='center' spacing={1}
                sx={{ height: '100%', width: '100%', display: expand ? 'flex' : 'none' }}
            >
                <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ width: '100%' }}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar>H</Avatar>
                    </IconButton>
                    <AvatarNav anchor={anchorEl} open={open} onclick0={handleClose} onClick1={handleClose} onClick2={handleClose} onClick3={handleClose} onClick4={handleClose} />
                    <Stack direction='row' alignItems='center' justifyContent='center' spacing={2} sx={{ height: '40px', width: '60%' }}>
                        <input type="text" placeholder='Search...' style={{ height: '30px', width: '90%', borderRadius: '15px', border: 'none' }} />
                        <IconButton>
                            <HiOutlineMagnifyingGlass color='white' size={30} />
                        </IconButton>
                    </Stack>
                    <IconButton onClick={handleExpand} sx={{ mr: 2 }}>
                        <RxCross1 color='white' size={30} />
                    </IconButton>
                </Stack>
                <Divider sx={{ width: '90%' }} />

                <Stack alignItems='center' spacing={3} sx={{ width: '100%', height: 'auto', p: 2 }}>
                    {
                        navButtons.map((elem) => (
                            <Stack direction='row' justifyContent='start' alignItems='center' spacing={1} sx={{ height: 'auto', width: '70%', cursor: 'pointer', borderBottom: '1px solid #d9d9d9', p: 1 }}>
                                {elem.icon}
                                <Typography color='white'>{elem.title}</Typography>
                            </Stack>
                        ))
                    }
                </Stack>

                <Stack justifyContent='end' sx={{ width: '100%', height: '100%' }}>
                    <Stack direction='row' spacing={2} alignItems='center' justifyContent='center' sx={{ height: 'auto', width: '100%' }}>
                    <IconButton>
                        <AiFillGithub size={30} color='white' />
                    </IconButton>
                    <IconButton>
                        <AiFillInstagram size={30} color='white' />
                    </IconButton>
                    <IconButton>
                        <AiFillFacebook size={30} color='white' />
                    </IconButton>
                    </Stack>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default SmDeviceNav