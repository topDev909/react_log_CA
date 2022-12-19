import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import Basic from "./Basic";

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
const columns = [
  { field: "id", headerName: "Order Number", width: 120 },
  { field: "date", headerName: "Order Date" },
  { field: "status", headerName: "Order Status", width: 150 },
  { field: "cient", headerName: "Client" },
  { field: "carriers", headerName: "Carriers", width: 120 },
  { field: "trip", headerName: "Trip Number", width: 150 },
  { field: "routes", headerName: "Routes", width: 100 },
  { field: "cargo", headerName: "Cargo parameters", width: 150 },
  { field: "freight", headerName: "Freight", width: 100 },
  { field: "additional", headerName: "Additional expenses", width: 150 },
  { field: "profit", headerName: "Profit" },
  { field: "document", headerName: "Documents" },
];

const rows = [
  {
    id: 1,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
  {
    id: 2,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
  {
    id: 3,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
];
const label = { inputProps: { "aria-label": "Size switch demo" } };
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const style = {
  position: "absolute",
  top: "5%",
  left: "3%",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
export default function Orders() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [orderValue, setOrderValue] = React.useState([null, null]);
  const [creationValue, setCreationValue] = React.useState([null, null]);
  const [actValue, setActValue] = React.useState([null, null]);
  const [cmrValue, setCmrValue] = React.useState([null, null]);
  const [invoiceValue, setInvoiceValue] = React.useState([null, null]);
  const [orderStatusValue, setOrderStatusValue] = React.useState([null, null]);
  const [client, setClient] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [cargoLoadingCountry, setCargoLoadingCountry] = React.useState("");
  const [cargoUnloadingCountry, setCargoUnloadingCountry] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [unregion, setUnregion] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [tripLoadingCountry, setTripLoadingCountry] = React.useState("");
  const [tripUnloadingCountry, setTripUnloadingCountry] = React.useState("");
  const [tripregion, setTripRegion] = React.useState("");
  const [tripunregion, setTripUnregion] = React.useState("");
  const [cargosLoadingValue, setCargosLoadingValue] = React.useState([
    null,
    null,
  ]);
  const [cargosUnloadingValue, setCargosUnloadingValue] = React.useState([
    null,
    null,
  ]);
  const [tripLoadingValue, setTripLoadingValue] = React.useState([null, null]);
  const [tripUnloadingValue, setTripUnloadingValue] = React.useState([
    null,
    null,
  ]);
  const [manager, setManager] = React.useState("");
  const [partial, setPartial] = React.useState("");
  const [forwarder, setForwarder] = React.useState("");
  const [additional, setAdditional] = React.useState("");
  const [outgoing, setOutgoing] = React.useState("");
  const [act, setAct] = React.useState("");
  const [transport, setTransport] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [id, setId] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [trip, setTrip] = React.useState("");
  const [received, setReceived] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [filterID, setFilterID] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(true);
  const [filterClients, setFilterClients] = React.useState(true);
  const [filterTransport, setFilterTransport] = React.useState(true);
  const [filterCargos, setFilterCargos] = React.useState(true);
  const [filterUsers, setFilterUsers] = React.useState(true);
  const [filterOther, setFilterOther] = React.useState(true);
  const [filterTrips, setFilterTrips] = React.useState(true);
  const [filterDocuments, setFilterDocuments] = React.useState(true);
  const [filterSort, setFilterSort] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setClient(event.target.value);
  };
  const handleTripChange = (event) => {
    setTrip(event.target.value);
  };
  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };
  const handleCargoLoadingCountryChange = (event) => {
    setCargoLoadingCountry(event.target.value);
  };
  const handleTripLoadingCountryChange = (event) => {
    setTripLoadingCountry(event.target.value);
  };
  const handlePartialChange = (event) => {
    setPartial(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };
  const handleCargoUnloadingCountryChange = (event) => {
    setCargoUnloadingCountry(event.target.value);
  };
  const handleTripUnloadingCountryChange = (event) => {
    setTripUnloadingCountry(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleUnregionChange = (event) => {
    setUnregion(event.target.value);
  };
  const handleTripRegionChange = (event) => {
    setTripRegion(event.target.value);
  };
  const handleTripUnregionChange = (event) => {
    setTripUnregion(event.target.value);
  };
  const handleOutgoingChange = (event) => {
    setOutgoing(event.target.value);
  };
  const handleActChange = (event) => {
    setAct(event.target.value);
  };
  const handleTransportChange = (event) => {
    setTransport(event.target.value);
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleReceivedChange = (event) => {
    setReceived(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleManagerChange = (event) => {
    setManager(event.target.value);
  };
  const handleForwarderChange = (event) => {
    setForwarder(event.target.value);
  };
  const handleAdditionalChange = (event) => {
    setAdditional(event.target.value);
  };
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterID(false);
        break;
      case 2:
        setFilterDate(false);
        break;
      case 3:
        setFilterClients(false);
        break;
      case 4:
        setFilterCargos(false);
        break;
      case 5:
        setFilterTrips(false);
        break;
      case 6:
        setFilterUsers(false);
        break;
      case 7:
        setFilterDocuments(false);
        break;
      case 8:
        setFilterTransport(false);
        break;
      case 9:
        setFilterOther(false);
        break;
      case 10:
        setFilterSort(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterID(true);
        break;
      case 2:
        setFilterDate(true);
        break;
      case 3:
        setFilterClients(true);
        break;
      case 4:
        setFilterCargos(true);
        break;
      case 5:
        setFilterTrips(true);
        break;
      case 6:
        setFilterUsers(true);
        break;
      case 7:
        setFilterDocuments(true);
        break;
      case 8:
        setFilterTransport(true);
        break;
      case 9:
        setFilterOther(true);
        break;
      case 10:
        setFilterSort(true);
        break;
    }
  };
  return (
    <>
      <div>
        <Box p={1}>
          <Box className="filterBox" gap={3}>
            <Typography sx={{ position: "absolute" }}>
              Show Filters:{" "}
            </Typography>
            <Button
              variant={filterID === false ? "outlined" : "contained"}
              sx={{ ml: "180px" }}
              onClick={() => Display(1)}
            >
              ID
            </Button>
            <Button
              variant={filterDate === false ? "outlined" : "contained"}
              onClick={() => Display(2)}
            >
              Date
            </Button>
            <Button
              variant={filterClients === false ? "outlined" : "contained"}
              onClick={() => Display(3)}
            >
              Clients
            </Button>
            <Button
              variant={filterCargos === false ? "outlined" : "contained"}
              onClick={() => Display(4)}
            >
              Cargos
            </Button>
            <Button
              variant={filterTrips === false ? "outlined" : "contained"}
              onClick={() => Display(5)}
            >
              Trips
            </Button>
            <Button
              variant={filterUsers === false ? "outlined" : "contained"}
              onClick={() => Display(6)}
            >
              Users
            </Button>
            <Button
              variant={filterDocuments === false ? "outlined" : "contained"}
              onClick={() => Display(7)}
            >
              Documents
            </Button>
            <Button
              variant={filterTransport === false ? "outlined" : "contained"}
              onClick={() => Display(8)}
            >
              Transport
            </Button>
            <Button
              variant={filterOther === false ? "outlined" : "contained"}
              onClick={() => Display(9)}
            >
              Other
            </Button>
            <Button
              variant={filterSort === false ? "outlined" : "contained"}
              onClick={() => Display(10)}
            >
              Sort
            </Button>
          </Box>

          <Box
            className="filterBox"
            gap={3}
            mt="30px"
            display={
              desktop
                ? filterID == true
                  ? "flex"
                  : "none"
                : filterID == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>ID: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(1)}
            >
              Del
            </Button>
            <TextField
              id="outlined-basic"
              label="Order Number"
              variant="outlined"
              sx={{
                ml: desktop ? "60px" : "0px",
                width: desktop ? "200" : 320,
                mt: desktop ? "0px" : 2,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Status"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Client's order Number"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Tags"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterID === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterDate == true
                  ? "flex"
                  : "none"
                : filterDate == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Date: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(2)}
            >
              Del
            </Button>
            <Box>
              <Box display={desktop ? "flex" : "block"} gap={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box sx={{ ml: desktop ? "60px" : "0px" }}>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Order date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={orderValue}
                      onChange={(newValue) => {
                        setOrderValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Act Creation date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={creationValue}
                      onChange={(newValue) => {
                        setCreationValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Act date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={actValue}
                      onChange={(newValue) => {
                        setActValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>
              <Box
                display={desktop ? "flex" : "block"}
                gap={3}
                ml={desktop ? "60px" : "0px"}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      CMR unloading date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={cmrValue}
                      onChange={(newValue) => {
                        setCmrValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Invoice issued From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={invoiceValue}
                      onChange={(newValue) => {
                        setInvoiceValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>
              <Box
                display={desktop ? "flex" : "block"}
                gap={3}
                ml={desktop ? "60px" : "0px"}
              >
                <Box>
                  <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                    Week:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Week"
                    variant="outlined"
                    sx={{ width: desktop ? "200" : 320 }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                    Year:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Year"
                    variant="outlined"
                    sx={{ width: desktop ? "200" : 320 }}
                  />
                </Box>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Order Status date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={orderStatusValue}
                      onChange={(newValue) => {
                        setOrderStatusValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterDate === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterClients == true
                  ? "flex"
                  : "none"
                : filterClients == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Clients: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(3)}
            >
              Del
            </Button>
            <FormControl
              sx={{ m: 1, minWidth: 320, ml: desktop ? "60px" : "0px" }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Client Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={client}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Client"
              variant="outlined"
              sx={{
                ml: desktop ? "60px" : "0px",
                width: desktop ? "200" : 320,
              }}
            />
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label="Show duplicated orders"
            />
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Activity Area
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={activity}
                label="Age"
                onChange={handleActivityChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterClients === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterCargos == true
                  ? "flex"
                  : "none"
                : filterCargos == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Cargos: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(4)}
            >
              Del
            </Button>
            <Box>
              <Box display={desktop ? "flex" : "block"} gap={3}>
                <Button
                  variant="contained"
                  sx={{ ml: "60px", mt: desktop ? "0px" : 2 }}
                >
                  Loading place
                </Button>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={cargoLoadingCountry}
                      label="Age"
                      onChange={handleCargoLoadingCountryChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{
                    wwidth: desktop ? "200" : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={region}
                      label="Age"
                      onChange={handleRegionChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display="flex" gap={3} ml={desktop ? "60px" : "0px"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Loading date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={cargosLoadingValue}
                      onChange={(newValue) => {
                        setCargosLoadingValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>
              <Divider sx={{ mt: 1 }} />
              <Box display={desktop ? "flex" : "block"} gap={3} mt={1}>
                <Button
                  variant="contained"
                  sx={{ ml: "60px", mt: desktop ? "0px" : 2 }}
                >
                  Unloading place
                </Button>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={cargoUnloadingCountry}
                      label="Age"
                      onChange={handleCargoUnloadingCountryChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={unregion}
                      label="Age"
                      onChange={handleUnregionChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display="flex" gap={3} ml={desktop ? "60px" : "0px"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Unloading date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={cargosUnloadingValue}
                      onChange={(newValue) => {
                        setCargosUnloadingValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>

              <Box display={desktop ? "flex" : "block"} gap={3} mt={1}>
                <FormControl
                  sx={{ minWidth: 320, ml: desktop ? "60px" : "0px" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Partial Cargo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={partial}
                    label="Age"
                    onChange={handlePartialChange}
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Cargo Name"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Container Number"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterCargos === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterTrips == true
                  ? "flex"
                  : "none"
                : filterTrips == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Trips: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(5)}
            >
              Del
            </Button>
            <Box>
              <Box display={desktop ? "flex" : "block"} gap={3}>
                <Button
                  variant="contained"
                  sx={{ ml: "60px", mt: desktop ? "0px" : 2 }}
                >
                  Loading place
                </Button>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={cargoLoadingCountry}
                      label="Age"
                      onChange={handleCargoLoadingCountryChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={region}
                      label="Age"
                      onChange={handleRegionChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display="flex" gap={3} ml={desktop ? "60px" : "0px"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Loading date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={cargosLoadingValue}
                      onChange={(newValue) => {
                        setCargosLoadingValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>
              <Divider sx={{ mt: 1 }} />
              <Box display={desktop ? "flex" : "block"} gap={3} mt={1}>
                <Button
                  variant="contained"
                  sx={{ ml: "60px", mt: desktop ? "0px" : 2 }}
                >
                  Unloading place
                </Button>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={cargoUnloadingCountry}
                      label="Age"
                      onChange={handleCargoUnloadingCountryChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <Box>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={unregion}
                      label="Age"
                      onChange={handleUnregionChange}
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display="flex" gap={3} ml={desktop ? "60px" : "0px"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Unloading date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={cargosUnloadingValue}
                      onChange={(newValue) => {
                        setCargosUnloadingValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>

              <Box display={desktop ? "flex" : "block"} gap={3} mt={1}>
                <FormControl
                  sx={{ minWidth: 320, ml: desktop ? "60px" : "0px" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Partial Cargo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={partial}
                    label="Age"
                    onChange={handlePartialChange}
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Cargo Name"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Container Number"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterTrips === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterUsers == true
                  ? "flex"
                  : "none"
                : filterUsers == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Users: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(6)}
            >
              Del
            </Button>
            <FormControl
              sx={{
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "0px" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Manager
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={manager}
                label="Age"
                onChange={handleManagerChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Department
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={department}
                label="Age"
                onChange={handleDepartmentChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Forwarder
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={forwarder}
                label="Age"
                onChange={handleForwarderChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Additional managers
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={additional}
                label="Age"
                onChange={handleAdditionalChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterUsers === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterDocuments == true
                  ? "flex"
                  : "none"
                : filterDocuments == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Documents: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(7)}
            >
              Del
            </Button>
            <Box>
              <Box
                display={desktop ? "flex" : "block"}
                gap={3}
                ml={desktop ? "60px" : "0px"}
              >
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="Without received trip invoices"
                />
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="No invoices"
                />
                <FormControl
                  sx={{
                    minWidth: 320,
                    ml: desktop ? "60px" : "0px",
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Outgoing invoices are paid
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={outgoing}
                    label="Age"
                    onChange={handleOutgoingChange}
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  sx={{
                    minWidth: 320,
                    ml: desktop ? "60px" : "0px",
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Received invoices are paid
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={received}
                    label="Age"
                    onChange={handleReceivedChange}
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                display={desktop ? "flex" : "block"}
                gap={3}
                ml={desktop ? "60px" : "0px"}
                mt={1}
              >
                <TextField
                  id="outlined-basic"
                  label="Invoice number"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Contract number"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    There is an act
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={act}
                    label="Age"
                    onChange={handleActChange}
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="CMR number"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterDocuments === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterTransport == true
                  ? "flex"
                  : "none"
                : filterTransport == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Tranport: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(8)}
            >
              Del
            </Button>
            <TextField
              id="outlined-basic"
              label="Carrier"
              variant="outlined"
              sx={{
                width: desktop ? "200" : 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "0px" : 2,
              }}
            />
            <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Transport Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={transport}
                label="Age"
                onChange={handleTransportChange}
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Vehicle Number"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Driver"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterTransport === true ? "flex" : "none" }}
          />

          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterOther == true
                  ? "flex"
                  : "none"
                : filterOther == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Other: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(9)}
            >
              Del
            </Button>
            <FormControl
              sx={{
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "0px" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Currency
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={currency}
                label="Age"
                onChange={handleCurrencyChange}
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Comments"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Costs per order"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterOther === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterSort == true
                  ? "flex"
                  : "none"
                : filterSort == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Sort: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(10)}
            >
              Del
            </Button>
            <FormControl
              sx={{
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "0px" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">By</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={id}
                label="Age"
                onChange={handleIdChange}
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "0px" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Order
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={order}
                label="Age"
                onChange={handleOrderChange}
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterSort === true ? "flex" : "none" }}
          />
        </Box>
        <Box
          display={desktop ? "flex" : "block"}
          justifyContent="space-between"
          mt={2}
        >
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
            <Button
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
              onClick={handleOpen}
            >
              New Order
            </Button>
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<FilterAltIcon />}
              sx={{ borderRadius: "20px" }}
            >
              To Filter
            </Button>
          </Box>
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
            <FormControl sx={{ minWidth: 320 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={status}
                label="Age"
                onChange={handleStatusChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Change Status
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              XML Unloading
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Excel
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          gap={2}
          mt={2}
        >
          <Typography>Orders:</Typography>
          <span
            style={{
              backgroundColor: "#e0dddd",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            1
          </span>
          <Typography>Cargos:</Typography>
          <span
            style={{
              backgroundColor: "#e0dddd",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            1
          </span>
          <Typography>Trips:</Typography>
          <span
            style={{
              backgroundColor: "#e0dddd",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "red",
            }}
          >
            1
          </span>
          <Typography>Weight:</Typography>
          <span
            style={{
              backgroundColor: "#e0dddd",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "green",
            }}
          >
            12000
          </span>
          <Typography>Volume:</Typography>
          <span
            style={{
              backgroundColor: "#e0dddd",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "green",
            }}
          >
            0
          </span>
          <Typography>Total Freight:</Typography>
          <span
            style={{
              backgroundColor: "#e0dddd",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "green",
            }}
          >
            1000
          </span>
          <Typography>USD</Typography>
          <Typography>Total Profit:</Typography>
          <span
            style={{
              backgroundColor: "#e0dddd",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "green",
            }}
          >
            500
          </span>
          <Typography>USD</Typography>
        </Box>
        <Box mt={2}>
          <div style={{ height: 400, width: "auto" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            display: "flex",
            height: desktop ? "" : "100%",
            overflow: desktop ? "hidden" : "scroll",
          }}
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              fontWeight="700"
              component="h2"
            >
              New Order
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleTabChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    icon={<span className="active" />}
                    label={
                      <Box className="tabBtn">
                        <span style={{ color: "white" }}>
                          Basic Information
                        </span>
                      </Box>
                    }
                    {...a11yProps(0)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Basic />
              </TabPanel>
            </Box>

            <Box display="flex" justifyContent="end" m={2}>
              <Button variant="contained" color="success" onClick={handleClose}>
                Save
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}
