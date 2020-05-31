import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;

export const BackToTop = styled.a`
    

    position: fixed; /* Fixed/sticky position */
    bottom: 30px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 5px 15px; /* Some padding */
    margin:auto;
    filter:none;

`;

export const ChangeMode = styled.a`
    

    position: fixed; /* Fixed/sticky position */
    bottom: 100px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 5px 15px; /* Some padding */
    margin:auto;
    filter:none;

`;

export const IconButton = styled.img`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    max-height:25vh;
    
`;
