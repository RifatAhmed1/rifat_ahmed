"use client";
import Image from "next/image";
import { Box, Button, Divider, Grid2, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { Link as NextLink } from "next/link";
import { useState, useEffect} from 'react';

import {SiFacebook, SiLinkedin, SiGithub, SiHtml5, SiCss3, SiJavascript, SiMui, SiTailwindcss, SiReact, SiNextdotjs, SiPython, SiNodedotjs, SiDjango, SiFastapi, SiMongodb, SiSqlite, SiMysql, SiPostgresql, SiJupyter, SiPytorch, SiTensorflow, SiDocker, SiGit, SiAmazonwebservices} from "react-icons/si"

const baseUrl = process.env.NODE_ENV === "production" ? "" : "/"

const StyledRoot = (props) => {
  const {children} = props;
  const rootStyle = {
    display: 'flex',
    flexDirection: 'row',
    Height: '100vh',
  }
  return(
    <Box sx={{...rootStyle}} {...props}>
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
    Height: '100vh',
    color: 'white',
    minWidth: {md: 240},
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
  const { children } = props;
  const sectionBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100vh',
    overflowY: 'scroll',
    scrollBehavior: 'smooth'
  };
  return(
    <Box sx={sectionBoxStyle} {...props}>
      {children}
    </Box>
  )
}

const StyledSection = (props) => {
  const {children} = props;
  const sectionStyle = {
    backgroundColor: 'grey',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    p: 8
  }
  return(
    <Box component={"section"} sx={sectionStyle} {...props}>
      {children}
    </Box>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
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
          setActiveSection(sectionId);
          window.history.replaceState(null, "", `#${sectionId}`);
          //console.log("active section: ", sectionId)
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
      </StyledSidebar>
      <StyledSectionContainer>
        <StyledSection id={"welcome"}>
          <Box sx={{marginTop: 2, marginBottom: 2}}>
            <Typography sx={{fontWeight: "bold"}} variant="h1">RIFAT <span style={{color: 'white'}}>AHMED</span></Typography>
            <Typography sx={{fontWeight: "bold"}} variant="h5">NARSINGDI, DHAKA, BANGLADESH &#x2022; +880-1754-120543 &#x2022; <span style={{color: 'white'}}>RIFAT4318@GMAIL.COM</span></Typography>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2}}>
          <Typography variant="h6">Self-driven web developer specializing in building user-friendly web applications integrating the power of modern AI solutions.</Typography>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2}}>
          <Stack direction={'row'} spacing={4} marginTop={4}>
            <StyledSocialLink href={'https://www.facebook.com/Vergil.01'}><SiFacebook size={40}/></StyledSocialLink>
            <StyledSocialLink href={'https://www.linkedin.com/in/rifat4318'}><SiLinkedin size={40}/></StyledSocialLink>
            <StyledSocialLink href={'https://www.github.com/rifatahmed1'}><SiGithub size={40}/></StyledSocialLink>
          </Stack>
          </Box>
          <Box sx={{marginTop: 2, marginBottom: 2, }}>
          <Stack direction={"row"} spacing={1}>
            <Button variant="outlined" sx={{border: "2px solid black", color: 'black', "&:hover":{color: 'white', backgroundColor: 'black'}}}><a href="#about">Read More</a></Button>
            <Button variant="outlined" sx={{border: "2px solid black", color: 'black', "&:hover":{color: 'white', backgroundColor: 'black'}}}>Contact Me</Button>
          </Stack>
          </Box> 
        </StyledSection>
        <Divider/>
        
        <StyledSection id={"about"}>
          <Box>
            <Typography variant="h1">ABOUT</Typography>
          </Box>
          <Box>
            <Typography>
              apart from being a student of Electrical and Electronic Engineering, my passion for programming and 
              creativity has led me on the path of web development. In my free time during academic years, I have 
              taught myself various web development technologies and tools. For research work, I have learned and 
              implemented AI/ML tools which enabled me to develop websites that leverages the power of modern AI.
            </Typography>
          </Box>
          <Box>
            <Typography>
              I am currently looking for an opportunity to work in a challenging position leveraging my skills as 
              a web developer which provides professional development, valuable experience, and personal growth.
            </Typography>
          </Box>
        </StyledSection>

        <Divider/>

        <StyledSection id={"projects"}>
          <Box>
            <Typography variant="h1">PROJECTS</Typography>
          </Box>
        </StyledSection>

        <Divider/>

        <StyledSection id={"skills"}>
          <Box>
            <Typography variant="h1">SKILLS</Typography>
          </Box>
          <Box>
            <Typography>programming Languages and Tools</Typography>
          </Box>
          <Grid2 container spacing={2}>
            <Grid2><SiHtml5 size={40}/></Grid2>
            <Grid2><SiCss3 size={40}/></Grid2>
            <Grid2><SiMui size={40}/></Grid2>
            <Grid2><SiTailwindcss size={40}/></Grid2>
            <Grid2><SiReact size={40}/></Grid2>
            <Grid2><SiNextdotjs size={40}/></Grid2>
            <Grid2><SiJavascript size={40}/></Grid2>
            <Grid2><SiPython size={40}/></Grid2>
            <Grid2><SiNodedotjs size={40}/></Grid2>
            <Grid2><SiDjango size={40}/></Grid2>
            <Grid2><SiFastapi size={40}/></Grid2>
            <Grid2><SiMongodb size={40}/></Grid2>
            <Grid2><SiSqlite size={40}/></Grid2>
            <Grid2><SiMysql size={40}/></Grid2>
            <Grid2><SiPostgresql size={40}/></Grid2>
            <Grid2><SiJupyter size={40}/></Grid2>
            <Grid2><SiPytorch size={40}/></Grid2>
            <Grid2><SiTensorflow size={40}/></Grid2>
            <Grid2><SiDocker size={40}/></Grid2>
            <Grid2><SiGit size={40}/></Grid2>
            <Grid2><SiGithub size={40}/></Grid2>
            <Grid2><SiAmazonwebservices size={40}/></Grid2>
          </Grid2>
        </StyledSection>

        <Divider/>

        <StyledSection id={"education"}>
          <Box>
            <Typography variant="h1">EDUCATION</Typography>
          </Box>
          <Box>
            <Typography variant="h5">HAJEE MOHAMMAD DANESH SCIENCE AND TECHNOLOGY UNIVERSITY</Typography>
            <Typography variant="h5">BSC. IN ENGINEERING</Typography>
            <Typography>ELECTRICAL AND ELECTRONIC ENGINEERING</Typography>
            <Typography>GPA: 3.14</Typography>
            <Typography>JANUARY 2018 - DECEMBER 2023</Typography>
          </Box>
        </StyledSection>

        <Divider/>

        <StyledSection id={"interests"}>
          <Box>
            <Typography variant="h1">INTERESTS</Typography>
          </Box>
        </StyledSection>
      </StyledSectionContainer>
    </StyledRoot>
  );
}
