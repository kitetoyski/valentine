import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Slider from "react-slick";
import { Button, Card, CardContent, CardMedia, Container, Grid, Modal, TextField, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpg'
import img14 from '../images/img14.jpg'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
export default function MasonryImageList() {
    const form = useRef();
    const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
      }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v20p8ja', 'template_26ghyer', form.current, 'YqqhLLTVtIICrN1bo')
          .then((result) => {
              console.log(result.text);
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Yayyyy! Check mo email mo'
              });
              navigate('/firststep');

          }, (error) => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'AWWW SAKIT!'
              });
              console.log(error.text);
          });
      }
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 3000,
          cssEase: "linear"
        };
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
        const ColorButton = styled(Button)(({ theme }) => ({
            color: theme.palette.getContrastText(pink[200]),
            backgroundColor: pink[200],
            '&:hover': {
              backgroundColor: pink[500],
            },
          }));
        return (
          <>
            
            <Slider {...settings}>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img1}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img2}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img3}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img4}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img5}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img6}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img7}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img8}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img9}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img10}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img11}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img12}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img13}
                />
                </Card>
              </div>
              <div>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={img14}
                />
                </Card>
              </div>

            </Slider>
            <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
           <ColorButton variant="contained" onClick={handleOpen}>Click Me!</ColorButton>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
            <form ref={form} onSubmit={sendEmail}>
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Will you be my valentine? </h2>
         
      
          <Button type="submit" value="Send" onSubmit={refreshPage} variant="outlined">YES</Button>
          <Button onClick={handleClose} disabled variant="contained">NO</Button>
          <Button onClick={handleClose}>x</Button>
        </Box>
        </form>
      </Modal>
            </Box>

       
          </>
          
       );
 
}

