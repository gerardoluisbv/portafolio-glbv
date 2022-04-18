import React from 'react'



import {  NavLink  } from "react-router-dom";

import styled from 'styled-components';
import IconHomeSvg from '../../icons/IconHomeSvg';
import IconAbout from '../../icons/IconAbout';
import IconResume from '../../icons/IconResume';
import IconWorks from '../../icons/IconWorks';
import IconTestimonials from '../../icons/IconTestimonials';
import IconContact from '../../icons/IconContact';




const StyledLink = styled(NavLink)`

svg {
    fill:#FFF;
   
  }

    
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    
   
 
  &.active {
    color: #0093d3;
    
   
  
    svg {
        fill:#0093d3;   
        padding-bottom:5px; 
        border-bottom: 2px solid #0093d3;
       
      }
  }

  @media (min-width: 990px) {
    margin-bottom:2vh;
   
}


  
`;

const Main = styled.div`
    position:absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    bottom: 20px;

    z-index:2;
 
`;

const Content = styled.div`
   
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 90%; 
  
 
   
`;

const NavBottom = styled.div`
   
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;  

   
     
       
    @media (min-width: 990px) {
        flex-direction: column;
        justify-content: flex-end;
        align-items:end;
       
    }

   
`;



const BottomNavigation = () => {
  return (
    <Main>
        <Content>
        
            <NavBottom>
                <StyledLink to="/" >
                      
                    <IconHomeSvg color= { '#FFF' } />                               
                    
                </StyledLink>
                

                    <StyledLink to="/about" >
                        <IconAbout />
                    </StyledLink>


                    <StyledLink
                        
                        to="/works"
                    >
                    
                       <IconWorks />
                     
                    </StyledLink>


                    <StyledLink
                        
                        to="/resume"
                    >
                      <IconResume />
                    </StyledLink>


                    <StyledLink
                                           
                        to="/testimonials"
                    >
                       <IconTestimonials/>
                    </StyledLink>


                    <StyledLink
                        
                        to="/contact"
                    >
                       <IconContact/>
                    </StyledLink>
                   

                    
                </NavBottom>    
         
        </Content>   
    
    </Main>    
  )
}

export default BottomNavigation;