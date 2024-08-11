// import React from 'react'
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import { Paper } from '@mui/material';
// import { useState } from 'react';
// import Log from './Log';
// import Sign from './Sign';

// const paperstyle={ width: 320 ,margin:"20px auto"};
// const SignUp = () => {
//     const [value, setValue] = React.useState('1');

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
  
//   return (
//     <>
//     <Paper style={paperstyle}>
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//     <TabContext value={value}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <TabList onChange={handleChange} aria-label="lab API tabs example">
//           <Tab label="Log In" value="1" />
//           <Tab label="Sign Up" value="2" />
      
//         </TabList>
//       </Box>
//       <TabPanel value="1"><Log/></TabPanel>
//       <TabPanel value="2"><Sign/></TabPanel>

//     </TabContext>
//   </Box>
//   </Paper>
//   </>
//   )
// }

// export default SignUp
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Paper } from '@mui/material';
import { useState } from 'react';
import Log from './Log';
import Sign from './Sign';

const paperstyle={ width: 320 ,margin:"20px auto"};
const SignUp = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <>
    <Paper style={paperstyle}>
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Log In" value="1" />
          <Tab label="Sign Up" value="2" />
      
        </TabList>
      </Box>
      <TabPanel value="1"><Log/></TabPanel>
      <TabPanel value="2"><Sign/></TabPanel>

    </TabContext>
  </Box>
  </Paper>
  </>
  )
}

export default SignUp;