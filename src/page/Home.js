import * as React from "react";
import Header from "../componants/Header";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Request from "../sections/request/Index";
import Orders from "../sections/orders/Index";
import Finance from "../sections/finance/Index";
import Clients from "../sections/clients/Index";
import Carriers from "../sections/carriers/Index";
import Reports from "../sections/reports/Index";
import Tasks from "../sections/tasks/Index";
import Settings from "../sections/settings/Index";
import "./style.css";
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
        <Box>
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

export default function Home() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            variant="scrollable"
            aria-label="basic tabs example"
            indicatorColor="secondary"
            style={{ backgroundColor: "#23282a" }}
          >
            <Tab
              icon={<span className="request" />}
              label={<span style={{ color: "white" }}>Request</span>}
              {...a11yProps(0)}
            />
            <Tab
              icon={<span className="order" />}
              label={<span style={{ color: "white" }}>Orders</span>}
              {...a11yProps(1)}
            />
            <Tab
              icon={<span className="finance" />}
              label={<span style={{ color: "white" }}>Finance</span>}
              {...a11yProps(2)}
            />
            <Tab
              icon={<span className="client" />}
              label={<span style={{ color: "white" }}>Clients</span>}
              {...a11yProps(3)}
            />
            <Tab
              icon={<span className="carrier" />}
              label={<span style={{ color: "white" }}>Carriers</span>}
              {...a11yProps(4)}
            />
            <Tab
              icon={<span className="report" />}
              label={<span style={{ color: "white" }}>Reports</span>}
              {...a11yProps(5)}
            />
            <Tab
              icon={<span className="task" />}
              label={<span style={{ color: "white" }}>Tasks</span>}
              {...a11yProps(6)}
            />
            <Tab
              icon={<span className="setting" />}
              label={<span style={{ color: "white" }}>Settings</span>}
              {...a11yProps(7)}
            />
          </Tabs>
        </Box>
      </Box>

      <TabPanel value={value} index={0}>
        <Request />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Orders />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Finance />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Clients />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Carriers />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Reports />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Tasks />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Settings />
      </TabPanel>
    </>
  );
}
