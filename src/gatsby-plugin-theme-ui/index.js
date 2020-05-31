export default {
    initialColorModeName: 'light',
  colors: {
    text: "#000",
    text1: "#363636",
    icons : "invert(0)",
    background: "#fafafa",
    primary : "#BB86FC",
    primary2 : "#3700B3",
    secondary : "#f6a5c0",
    secondary2 : "#f48fb1",
    modes: {
    	dark: {
	    	text: "#FFF",
	        text1: "#D7D7D7",
	        primary : "#3700B3",
		    primary2 : "#BB86FC",
		    secondary : "#aa647b",
		    secondary2 : "#f48fb1",
	    	background: "#121212"
     	}
    }
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  styles: {
    root: {
        color:'text1',
        transition:'all .2s ease-in-out'
    },
    h1: {
        color:'text',
        font:32
    },
    pb: {
        color:'text1',
        fontSize: 25,
        mb: 50
    },
    p: {
        fontSize: 15,
        color:'text1'
    },
    h4: {
        color:'text'
    },
    h2: {
    	color:'text'
    },
    a: {
	  borderRadius: 3,
	  py: '0.7rem',
	  px: '2.5rem',
	  border: 'none',
	  transition: "all 0.5s ease-in-out",
	  bg:'primary',
      ":hover" : { bg: 'primary2'},
      color: '#fff'
    }
  }
}