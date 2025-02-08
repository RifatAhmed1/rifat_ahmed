"use client";
import Image from "next/image";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, Link, List, ListItem, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link as NextLink } from "next/link";
import { useState, useEffect } from 'react';

import {SiFacebook, SiLinkedin, SiGithub, SiHtml5, SiCss3, SiJavascript, SiMui, SiTailwindcss, SiReact, SiNextdotjs, SiPython, SiNodedotjs, SiDjango, SiFastapi, SiMongodb, SiSqlite, SiMysql, SiPostgresql, SiJupyter, SiPytorch, SiTensorflow, SiDocker, SiGit, SiAmazonwebservices} from "react-icons/si"

const baseUrl = process.env.NODE_ENV === "production" ? "" : "/"

const StyledRoot = (props) => {
  const {children, ...rest} = props;
  const rootStyle = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
  }
  return(
    <Box sx={{...rootStyle}} {...rest}>
      {children}
    </Box>
  )
}

const StyledSidebar = (props) => {
  const { children, ...rest } = props;
  const listStyle = {
    display: {xs: 'none', md: 'flex'},
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#010101',
    height: '100vh',
    color: 'white',
    minWidth: {md: 240},
    position: 'fixed',
  }
  return(
    <List sx={{...listStyle}} {...rest}>
      {children}
    </List>
  )
}

const StyledListItem = (props) => {
  const { children } = props;
  const listItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    //marginTop: 1,
    marginBottom: 1, 
  }
  
  return(
  <ListItem sx={listItemStyle}>
    {children}
  </ListItem>
)}

const StyledLink = (props) => {
  const { children, href, fullUrl, ...rest } = props;
  let isActive = fullUrl.includes(href);

  return(
    <Link component={NextLink}
      sx={{color: isActive ? 'white' : 'grey'}}
      underline="none"
      href={href}
      {...rest}
    >
      <Typography fontFamily={'var(--font-roboto)'} fontWeight={'bold'}>
        {children}
      </Typography>
    </Link>
  )
}

const StyledAvatar = (props) => {
  const { children } = props;
  return (
    <Link component={NextLink}
      sx={{color: 'white'}}
      underline="none"
      {...props}
    >
      {children}
    </Link>
  )
}

const StyledSocialLink = (props) => {
  const { children, ...rest } = props;
  const style = {
    color: 'black',
  }
  return (
    <Link component={NextLink} sx={style} {...rest}>
      {children}
    </Link>
  )
}

const StyledSectionContainer = (props) => {
  const { children, ...rest } = props;
  const sectionBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
    height: {md: "100vh"},
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    marginLeft: {md: "240px"}
  };
  return(
    <Box sx={sectionBoxStyle} {...rest}>
      {children}
    </Box>
  )
}

const StyledSection = (props) => {
  const {children, ...rest} = props;
  const sectionStyle = {
    backgroundColor: 'grey',
    minHeight: '100vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    p: 8
  }
  return(
    <Box component={"section"} sx={sectionStyle} {...rest}>
      {children}
    </Box>
  )
}

const StyledLinkButton = (props) => {
  const { children, href, ...rest } = props;

  const buttonStyle = {
    border: "2px solid black", 
    color: 'black', 
    "&:hover":{
      color: 'white', 
      backgroundColor: 'black'
    }
  }

  return (
    <Button {...rest} sx={buttonStyle}>
      <Link component={NextLink} href={href} underline="none" sx={{color: 'inherit'}}>
        <Typography variant="h6">
          { children }
        </Typography>
      </Link>
    </Button>
  )
}

export default function Home() {
  const [fullUrl, setFullUrl] = useState('');
  const sections = ["welcome", "about", "projects", "education", "skills", "interests"]
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          window.history.replaceState(null, "", `#${sectionId}`);
          //console.log(window.location.href)
          setFullUrl(window.location.href)
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  },[])
  
  return (
    <StyledRoot>
      <StyledSidebar>
        <StyledListItem>
          <StyledAvatar href="#welcome">
            <Box sx={{position: 'relative', height: 160, width: 160, borderRadius: 999, overflow: "hidden"}}>
              <Image src={`${baseUrl}1723724803350.jpg`} alt="rifat_ahmed" fill style={{objectFit:"cover", objectPosition:"top"}} quality={100}/>
            </Box>
          </StyledAvatar>
        </StyledListItem>
        <StyledListItem><StyledLink fullUrl={fullUrl} href="#about">ABOUT</StyledLink></StyledListItem>
        <StyledListItem><StyledLink fullUrl={fullUrl} href="#projects">PROJECTS</StyledLink></StyledListItem>
        <StyledListItem><StyledLink fullUrl={fullUrl} href="#skills">SKILLS</StyledLink></StyledListItem>
        <StyledListItem><StyledLink fullUrl={fullUrl} href="#education">EDUCATION</StyledLink></StyledListItem>
        <StyledListItem><StyledLink fullUrl={fullUrl} href="#interests">INTERESTS</StyledLink></StyledListItem>
        <StyledListItem>
          <Button variant="contained" 
            sx={{color: 'white', backgroundColor: 'green'}} 
            href={"https://drive.google.com/file/d/115fscZJO9S9T0MohOhECw-_--gfTvI3j/view?usp=drive_link"}
          >
            <Typography fontFamily={'var(--font-roboto)'} fontWeight={'bold'}>
              RESUME
            </Typography>
          </Button>
        </StyledListItem>
      </StyledSidebar>
      <StyledSectionContainer>
        <StyledSection id={"welcome"}>
          <Box sx={{marginTop: 2, marginBottom: 2}}>
            <Typography sx={{fontWeight: "bold"}} variant="h1">RIFAT <span style={{color: 'white'}}>AHMED</span></Typography>
            <Typography sx={{fontWeight: "bold"}} variant="h5">NARSINGDI, DHAKA, BANGLADESH &#x2022; +880-1754-120543 &#x2022; <span style={{color: 'white'}}>RIFAT4318@GMAIL.COM</span></Typography>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2}}>
          <Typography variant="h5">Self-driven web developer specializing in building user-friendly web applications integrating the power of modern AI solutions.</Typography>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2}}>
          <Stack direction={'row'} spacing={4} marginTop={4}>
            <StyledSocialLink href={'https://www.facebook.com/Vergil.01'}><SiFacebook size={40}/></StyledSocialLink>
            <StyledSocialLink href={'https://www.linkedin.com/in/rifat4318'}><SiLinkedin size={40}/></StyledSocialLink>
            <StyledSocialLink href={'https://www.github.com/rifatahmed1'}><SiGithub size={40}/></StyledSocialLink>
          </Stack>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2,}}>
          <Stack direction={"row"} spacing={1}>
            <StyledLinkButton href={"#about"}>Read More</StyledLinkButton>
            <StyledLinkButton href={"#contact"}>Contact Me</StyledLinkButton>
          </Stack>
          </Box> 
        </StyledSection>
        <Divider sx={{backgroundColor: 'black'}}/>
        
        <StyledSection id={"about"}>
          <Box>
            <Typography sx={{fontWeight: "bold"}} variant="h1">ABOUT</Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              apart from being a student of Electrical and Electronic Engineering, my passion for programming and 
              creativity has led me on the path of web development. In my free time during academic years, I have 
              taught myself various web development technologies and tools. For research work, I have learned and 
              implemented AI/ML tools which enabled me to develop websites that leverages the power of modern AI.
            </Typography>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2}}/>
          <Box>
            <Typography variant="h5">
              I am currently looking for an opportunity to work in a challenging position leveraging my skills as 
              a web developer which provides professional development, valuable experience, and personal growth.
            </Typography>
          </Box>
        </StyledSection>
        <Divider sx={{backgroundColor: 'black'}}/>

        <StyledSection id={"projects"}>
          <Box><Typography sx={{fontWeight: "bold"}} variant="h1">PROJECTS</Typography></Box>

          <Box sx={{marginTop: 2, marginBottom: 2}}/>

          <Box sx={{display: "flex", flexDirection: "row"}}>
            <Grid container spacing={2} sx={{display: 'flex', flexDirection: {xs: "column", md: "row"}, flexGrow: 1}}>
              <Grid size={{xs:12, md: 4}} sx={{display: "flex", flexDirection: {xs: 'row', md:'column'}, flexGrow: 1,}}>
                <Card sx={{display: "flex", flexDirection: 'column', flexGrow: 1, minHeight: 400, padding:1, backgroundColor: '#010101',}}>
                  <CardMedia component={"div"} sx={{position: 'relative', width: '100%', display: "inherit", flexGrow: 1}}>
                    <Image src={"leaflens.png"} fill style={{objectFit: "cover"}} alt="leaflens" quality={100}/>
                  </CardMedia>
                  <CardContent sx={{backgroundColor: 'grey', color: "black"}}>
                    <Typography variant="h4" fontWeight={"bold"}>
                    LeafLens</Typography>
                  </CardContent>
                  <CardActions sx={{backgroundColor: 'grey'}}>
                    <Button fullWidth sx={{color: "black", "&:hover": {color: "white", backgroundColor: '#010101'}, fontFamily: 'var(--font-roboto)'}}>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={{xs:12, md: 4}} sx={{display: "flex", flexDirection: 'row', flexGrow: 1,}}>
                <Card sx={{display: "flex", flexDirection: 'column', flex: 1, minHeight: 360, padding:1, backgroundColor: '#010101' }}>
                  <CardMedia component={"div"} sx={{position: 'relative', width: '100%', display: "inherit", flexGrow: 1}}>
                    <Image src={"no-image.jpg"} fill style={{objectFit: "cover"}} alt="no-image.jpg" quality={100}/>
                  </CardMedia>
                  <CardContent sx={{backgroundColor: 'grey', color: "black"}}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    [To be added]</Typography>
                  </CardContent>
                  <CardActions sx={{backgroundColor: 'grey'}}>
                    <Button fullWidth sx={{color: "black", "&:hover": {color: "white", backgroundColor: '#010101'}, fontFamily: 'var(--font-roboto)'}}>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={{xs:12, md: 4}} sx={{display: "flex", flexDirection: 'row', flexGrow: 1,}}>
                <Card sx={{display: "flex", flexDirection: 'column', flex: 1, minHeight: 360, padding:1, backgroundColor: '#010101' }}>
                  <CardMedia component={"div"} sx={{position: 'relative', width: '100%', display: "inherit", flexGrow: 1}}>
                    <Image src={"no-image.jpg"} fill style={{objectFit: "cover"}} alt="no-image.jpg" quality={100}/>
                  </CardMedia>
                  <CardContent sx={{backgroundColor: 'grey', color: "black"}}>
                  <Typography variant="h4" fontWeight={"bold"}>
                  [To be added]</Typography>
                  </CardContent>
                  <CardActions sx={{backgroundColor: 'grey'}}>
                    <Button fullWidth sx={{color: "black", "&:hover": {color: "white", backgroundColor: '#010101'}, fontFamily: 'var(--font-roboto)'}}>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </StyledSection>
        <Divider sx={{backgroundColor: 'black'}}/>

        <StyledSection id={"skills"}>
          <Box><Typography sx={{fontWeight: "bold"}} variant="h1">SKILLS</Typography></Box>
          <Box><Typography variant="h4">programming Languages and Tools</Typography></Box>
          <Box sx={{marginTop: 2, marginBottom: 2}}/>
          <Grid container spacing={2}>
            <Grid><SiHtml5 size={40}/></Grid>
            <Grid><SiCss3 size={40}/></Grid>
            <Grid><SiMui size={40}/></Grid>
            <Grid><SiTailwindcss size={40}/></Grid>
            <Grid><SiReact size={40}/></Grid>
            <Grid><SiNextdotjs size={40}/></Grid>
            <Grid><SiJavascript size={40}/></Grid>
            <Grid><SiPython size={40}/></Grid>
            <Grid><SiNodedotjs size={40}/></Grid>
            <Grid><SiDjango size={40}/></Grid>
            <Grid><SiFastapi size={40}/></Grid>
            <Grid><SiMongodb size={40}/></Grid>
            <Grid><SiSqlite size={40}/></Grid>
            <Grid><SiMysql size={40}/></Grid>
            <Grid><SiPostgresql size={40}/></Grid>
            <Grid><SiJupyter size={40}/></Grid>
            <Grid><SiPytorch size={40}/></Grid>
            <Grid><SiTensorflow size={40}/></Grid>
            <Grid><SiDocker size={40}/></Grid>
            <Grid><SiGit size={40}/></Grid>
            <Grid><SiGithub size={40}/></Grid>
            <Grid><SiAmazonwebservices size={40}/></Grid>
          </Grid>
        </StyledSection>
        <Divider sx={{backgroundColor: 'black'}}/>

        <StyledSection id={"education"}>
          <Box>
            <Typography sx={{fontWeight: "bold"}} variant="h1">EDUCATION</Typography>
          </Box>
          <Box>
            <Typography variant="h4">HAJEE MOHAMMAD DANESH SCIENCE AND TECHNOLOGY UNIVERSITY</Typography>
            <Typography variant="h5">BSC. IN ENGINEERING</Typography>
            <Typography variant="h6">ELECTRICAL AND ELECTRONIC ENGINEERING</Typography>
            <Typography variant="h6">GPA: 3.14</Typography>
            <Typography variant="h6">2018 - 2023</Typography>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2}}/>
          <Box>
            <Typography variant="h4">NARSINGDI SCIENCE COLLEGE</Typography>
            <Typography variant="h5">HIGHER SECONDARY CERTIFICATE</Typography>
            <Typography variant="h6">SCIENCE</Typography>
            <Typography variant="h6">GPA: 5.00</Typography>
            <Typography variant="h6">2015 - 2017</Typography>
          </Box>
        </StyledSection>
        <Divider sx={{backgroundColor: 'black'}}/>

        <StyledSection id={"interests"}>
          <Box>
            <Typography sx={{fontWeight: "bold"}} variant="h1">INTERESTS</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Beside programming, I love long walks, small tours to rural areas and learn new things everyday.</Typography>
          </Box>
        </StyledSection>
      </StyledSectionContainer>
    </StyledRoot>
  );
}
