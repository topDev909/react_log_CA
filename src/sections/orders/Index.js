import * as React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Orders from "./Orders";
import Cargos from "./Cargos";
import Trips from "./Trips";
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
                  <span style={{ color: "white" }}>Orders</span>
                </Box>
              }
              {...a11yProps(0)}
            />
            <Tab
              icon={<span className="cargos" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Cargos</span>
                </Box>
              }
              {...a11yProps(1)}
            />
            <Tab
              icon={<span className="trips" />}
              label={
                <Box className="tabBtn">
                  <span style={{ color: "white" }}>Trips</span>
                </Box>
              }
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Orders />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Cargos />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Trips />
        </TabPanel>
      </Box>
    </>
  );
}
