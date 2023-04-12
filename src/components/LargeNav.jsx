import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { GiExpand } from 'react-icons/gi'
import { navButtons } from '../data/data'
import { IoExitOutline } from 'react-icons/io5'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlinePlus } from 'react-icons/ai'
import { GrLogout } from 'react-icons/gr'
import { BsGearFill } from 'react-icons/bs'



const LargeNav = () => {

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
            sx={{ height: '100vh', width: expand ? '250px' : '70px', backgroundColor: '#14213d', display: {xs: 'none', md: 'flex', lg: 'flex'} }}
        >
            <Stack alignItems='center' sx={{ height: '100%', wirdth: '100%', display: expand ? 'none' : 'flex' }}>
                <Tooltip title='expand' placement='right'>
                    <IconButton onClick={handleExpand}>
                        <GiExpand color='white' />
                    </IconButton>
                </Tooltip>
                <Stack alignItems='center' spacing={3} sx={{ height: 'auto', width: '100%', p: 5 }}>
                    {
                        navButtons.map((elem) => (
                            <Tooltip placement='right' title={elem.title}>
                                <IconButton>
                                    {elem.icon}
                                </IconButton>
                            </Tooltip>
                        ))
                    }
                </Stack>
                <Stack alignItems='center' justifyContent='end' spacing={1} sx={{ height: '100%', width: '100%' }}>
                    <IconButton>
                        <Avatar>B</Avatar>
                    </IconButton>
                    <IconButton>
                        <IoExitOutline color='white' size={25} />
                    </IconButton>
                </Stack>
            </Stack>

            {/* expanded navbar content */}
            <Stack alignItems='center' spacing={2} sx={{ height: '100%', width: '100%', display: expand ? 'flex' : 'none' }}>
                <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={1} sx={{ height: '50px', width: '100%', pl: 1, pr: 1 }}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar>B</Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
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
                        <MenuItem onClick={handleClose}>
                            <Avatar><AiOutlinePlus /></Avatar>
                            Add Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <BsGearFill />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <GrLogout />
                            </ListItemIcon>
                            Log Out
                        </MenuItem>
                        
                    </Menu>
                    <Tooltip title='expand' placement='right'>
                        <IconButton onClick={handleExpand}>
                            <GiExpand color='white' />
                        </IconButton>
                    </Tooltip>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='end' spacing={0.5} sx={{ height: '40px', width: '100%' }}>
                    <input type="text" placeholder='Search...' style={{ width: '80%', borderRadius: '15px', height: '30px', border: 'none' }} />
                    <IconButton>
                        <HiOutlineMagnifyingGlass color='white' size={20} />
                    </IconButton>
                </Stack>
                <Stack alignItems='center' spacing={3} sx={{ height: 'auto', width: '100%', p: 4 }}>
                    {
                        navButtons.map((elem) => (
                            <Stack direction='row' alignItems='center' spacing={2} justifyContent='start' sx={{ height: '30px', width: '90%' }}>
                                <IconButton>
                                    {elem.icon}
                                </IconButton>
                                <Typography color='white'>{elem.title}</Typography>
                            </Stack>
                        ))
                    }
                </Stack>
                <Stack alignItems='center' sx={{ height: '200px', width: '95%', backgroundColor: '#e5e5e5', borderRadius: '20px' }}>

                </Stack>
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={2} sx={{ height: '50px', width: '100%' }}>
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
    )
}

export default LargeNav