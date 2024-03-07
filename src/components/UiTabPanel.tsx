import Box from "@mui/material/Box";

const MyTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ display: value === index ? 'block' : 'none' }}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>
        {children}
      </Box>
    </div>
  );
}

export default MyTabPanel