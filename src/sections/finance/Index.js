import * as React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Issued from "./Issued";
import Received from "./Received";
import Acts from "./Acts";
import Payments from "./Payments";
import Made from "./Made";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            variant="scrollable"
            aria-label="basic tabs example"
            style={{ backgroundColor: "#7de9e2" }}
          >
            <Tab
              icon={<span className="orders" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Issued</span>
                </Box>
              }
              {...a11yProps(0)}
            />
            <Tab
              icon={<span className="cargos" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Received</span>
                </Box>
              }
              {...a11yProps(1)}
            />
            <Tab
              icon={<span className="trips" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Acts</span>
                </Box>
              }
              {...a11yProps(2)}
            />
            <Tab
              icon={<span className="trips" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Payments</span>
                </Box>
              }
              {...a11yProps(3)}
            />
            <Tab
              icon={<span className="trips" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Payments made</span>
                </Box>
              }
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Issued />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Received />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Acts />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Payments />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Made />
        </TabPanel>
      </Box>
    </>
  );
}
