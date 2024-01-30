import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Button, Card, CardActions, CardContent, Container, CssBaseline, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function BasicCard() {
  const navigate = useNavigate();
 function refreshPage() {
    window.location.reload(false);
  }
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[200]),
    backgroundColor: pink[200],
    '&:hover': {
      backgroundColor: pink[500],
    },
  }));
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{}} > 
    
     <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
          
     <Card sx={{ }} elevation={10}>
     <CardContent>
     <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Hi Love! Just click the button below:
      </Typography>
    
     
    </CardContent>
     <CardActions >
     <ColorButton variant="contained" onClick={() => navigate('/second')}to="/second" sx={{ml:15}}>Proceed</ColorButton>
     </CardActions>
   </Card>
     </Box>
        
      </Container>
    </React.Fragment>
    
  );
}