import * as React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Organization from "./Organization";
import Templates from "./Templates";
import Classifiers from "./Classifiers";
import System from "./System";
import Log from "./Log";
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
                  <span style={{ color: "white" }}>Organization</span>
                </Box>
              }
              {...a11yProps(0)}
            />
            <Tab
              icon={<span className="cargos" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Templates</span>
                </Box>
              }
              {...a11yProps(1)}
            />
            <Tab
              icon={<span className="trips" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Classifiers</span>
                </Box>
              }
              {...a11yProps(2)}
            />
            <Tab
              icon={<span className="trips" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>System</span>
                </Box>
              }
              {...a11yProps(3)}
            />
            <Tab
              icon={<span className="trips" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Log</span>
                </Box>
              }
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Organization />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Templates />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Classifiers />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <System />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Log />
        </TabPanel>
      </Box>
    </>
  );
}
