import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";
import Basic from "./Basic";
import Cargo from "./Cargo";
const style = {
  position: "absolute",
  top: "5%",
  left: "5%",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const columns = [
  { field: "id", headerName: "Request Number", width: 120 },
  { field: "status", headerName: "Status" },
  { field: "purpose", headerName: "Request Purpose", width: 150 },
  { field: "created", headerName: "Created" },
  { field: "transport", headerName: "Transport Type", width: 120 },
  { field: "cargo", headerName: "Cargo Information", width: 150 },
  { field: "loading", headerName: "Loading Place", width: 150 },
  { field: "unloading", headerName: "Unloading Place", width: 150 },
  { field: "ldate", headerName: "Loading Date", width: 150 },
  { field: "udate", headerName: "Unloading Date", width: 150 },
  { field: "status", headerName: "Status" },
  { field: "client", headerName: "Client" },
  { field: "seller", headerName: "Seller" },
  { field: "price", headerName: "Price propoals", width: 150 },
];

const rows = [
  {
    id: 1,
    status: "Snow",
    purpose: "Jon",
    created: "",
    transport: "",
    cargo: "",
    loading: "IE",
    unloading: "AM",
    ldate: "",
    udate: "",
    client: "UAB",
    seller: "Darius",
    price: "",
  },
  {
    id: 2,
    status: "Snow",
    purpose: "Jon",
    created: "",
    transport: "",
    cargo: "",
    loading: "IE",
    unloading: "AM",
    ldate: "",
    udate: "",
    client: "UAB",
    seller: "Darius",
    price: "",
  },
  {
    id: 3,
    status: "Snow",
    purpose: "Jon",
    created: "",
    transport: "",
    cargo: "",
    loading: "IE",
    unloading: "AM",
    ldate: "",
    udate: "",
    client: "UAB",
    seller: "Darius",
    price: "",
  },
];

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

export default function Archive() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [requestValue, setRequestValue] = React.useState([null, null]);
  const [loadingValue, setLoadingValue] = React.useState([null, null]);
  const [unloadingValue, setUnloadingValue] = React.useState([null, null]);
  const [client, setClient] = React.useState("");
  const [fromCountry, setFromCountry] = React.useState("");
  const [toCountry, setToCountry] = React.useState("");
  const [transport, setTransport] = React.useState("");
  const [carrier, setCarrier] = React.useState("");
  const [cargos, setCargos] = React.useState("");
  const [seller, setSeller] = React.useState("");
  const [logistician, setLogistician] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [tag, setTags] = React.useState("");
  const [received, setReceived] = React.useState("");
  const [expired, setExpired] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [filterID, setFilterID] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(false);
  const [filterClients, setFilterClients] = React.useState(false);
  const [filterDirections, setFilterDirections] = React.useState(false);
  const [filterTransport, setFilterTransport] = React.useState(false);
  const [filterCargos, setFilterCargos] = React.useState(false);
  const [filterUsers, setFilterUsers] = React.useState(false);
  const [filterOther, setFilterOther] = React.useState(false);
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
  const handleCountryFromChange = (event) => {
    setFromCountry(event.target.value);
  };
  const handleCountryToChange = (event) => {
    setToCountry(event.target.value);
  };
  const handleTransportChange = (event) => {
    setTransport(event.target.value);
  };
  const handleCarrierChange = (event) => {
    setCarrier(event.target.value);
  };
  const handleCargosChange = (event) => {
    setCargos(event.target.value);
  };
  const handleSellerChange = (event) => {
    setSeller(event.target.value);
  };
  const handleLogisticianChange = (event) => {
    setLogistician(event.target.value);
  };
  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };
  const handleReceivedChange = (event) => {
    setReceived(event.target.value);
  };
  const handleExpiredChange = (event) => {
    setExpired(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
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
        setFilterDirections(false);
        break;
      case 5:
        setFilterTransport(false);
        break;
      case 6:
        setFilterCargos(false);
        break;
      case 7:
        setFilterUsers(false);
        break;
      case 8:
        setFilterOther(false);
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
        setFilterDirections(true);
        break;
      case 5:
        setFilterTransport(true);
        break;
      case 6:
        setFilterCargos(true);
        break;
      case 7:
        setFilterUsers(true);
        break;
      case 8:
        setFilterOther(true);
        break;
    }
  };
  return (
    <>
      <div>
        <Box p={1}>
          <Box className="filterBox" gap={1}>
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
              variant={filterDirections === false ? "outlined" : "contained"}
              onClick={() => Display(4)}
            >
              Directions
            </Button>
            <Button
              variant={filterTransport === false ? "outlined" : "contained"}
              onClick={() => Display(5)}
            >
              Transport
            </Button>
            <Button
              variant={filterCargos === false ? "outlined" : "contained"}
              onClick={() => Display(6)}
            >
              Cargos
            </Button>
            <Button
              variant={filterUsers === false ? "outlined" : "contained"}
              onClick={() => Display(7)}
            >
              Users
            </Button>
            <Button
              variant={filterOther === false ? "outlined" : "contained"}
              onClick={() => Display(8)}
            >
              Other
            </Button>
          </Box>

          <Box
            className="filterBox"
            gap={1}
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
              label="Request Number"
              variant="outlined"
              sx={{
                ml: desktop ? "60px" : "0px",
                width: desktop ? "200" : 320,
                mt: desktop ? "" : 2,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Client's order Number"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "" : 2 }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterID === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ ml: desktop ? "60px" : "0px" }}>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Request date From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={requestValue}
                  onChange={(newValue) => {
                    setRequestValue(newValue);
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
                  Loadiing date From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={loadingValue}
                  onChange={(newValue) => {
                    setLoadingValue(newValue);
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
                  Unloading date From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={unloadingValue}
                  onChange={(newValue) => {
                    setUnloadingValue(newValue);
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
          <Divider
            sx={{ mt: 1, display: filterDate === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
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
            <TextField
              id="outlined-basic"
              label="Client"
              variant="outlined"
              sx={{
                ml: desktop ? "60px" : "0px",
                width: desktop ? "200" : 320,
              }}
            />
            <FormControl sx={{ m: 1, minWidth: 320 }}>
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
          </Box>
          <Divider
            sx={{ mt: 1, display: filterClients === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={
              desktop
                ? filterDirections == true
                  ? "flex"
                  : "none"
                : filterDirections == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Directions: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(4)}
            >
              Del
            </Button>
            <Box sx={{ ml: desktop ? "60px" : "0px" }}>
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                Country From:
              </Typography>
              <FormControl sx={{ minWidth: 320 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={fromCountry}
                  label="Age"
                  onChange={handleCountryFromChange}
                >
                  <MenuItem value={1}>VIP</MenuItem>
                  <MenuItem value={2}>SUper klientas</MenuItem>
                  <MenuItem value={3}>Paprastas klientas</MenuItem>
                  <MenuItem value={4}>NEDIRBTI</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                Country To:
              </Typography>
              <FormControl sx={{ minWidth: 320 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={toCountry}
                  label="Age"
                  onChange={handleCountryToChange}
                >
                  <MenuItem value={1}>VIP</MenuItem>
                  <MenuItem value={2}>SUper klientas</MenuItem>
                  <MenuItem value={3}>Paprastas klientas</MenuItem>
                  <MenuItem value={4}>NEDIRBTI</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                City From:
              </Typography>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                sx={{ width: desktop ? "200" : 320 }}
              />
            </Box>
            <Box>
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                City To:
              </Typography>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                sx={{ width: desktop ? "200" : 320 }}
              />
            </Box>
            <Box>
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                Post Code From:
              </Typography>
              <TextField
                id="outlined-basic"
                label="postcode"
                variant="outlined"
                sx={{ width: desktop ? "200" : 320 }}
              />
            </Box>
            <Box>
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                Post Code To:
              </Typography>
              <TextField
                id="outlined-basic"
                label="postcode"
                variant="outlined"
                sx={{ width: desktop ? "200" : 320 }}
              />
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterDirections === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
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
            <Typography sx={{ position: "absolute" }}>Transport: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(5)}
            >
              Del
            </Button>
            <FormControl
              sx={{
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "" : 2,
              }}
            >
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
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 320, mt: desktop ? "" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Carrier
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={carrier}
                label="Age"
                onChange={handleCarrierChange}
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterTransport === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
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
              onClick={() => Delete(6)}
            >
              Del
            </Button>
            <FormControl
              sx={{
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Patial Cargos
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={cargos}
                label="Age"
                onChange={handleCargosChange}
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterCargos === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
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
              onClick={() => Delete(7)}
            >
              Del
            </Button>
            <FormControl
              sx={{
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Seller
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={seller}
                label="Age"
                onChange={handleSellerChange}
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 320, mt: desktop ? "" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Logistician
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={logistician}
                label="Age"
                onChange={handleLogisticianChange}
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterUsers === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
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
              onClick={() => Delete(8)}
            >
              Del
            </Button>
            <Box>
              <Box display={desktop ? "flex" : "block"} gap={1}>
                <FormControl
                  sx={{
                    minWidth: 320,
                    ml: desktop ? "60px" : "0px",
                    mt: desktop ? "" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Request Purpose
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={purpose}
                    label="Age"
                    onChange={handlePurposeChange}
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "" : 2 }}>
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
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Tags
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={tag}
                    label="Age"
                    onChange={handleTagsChange}
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={1} mt="20px">
                <FormControl
                  sx={{ minWidth: 320, ml: desktop ? "60px" : "0px" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Request Received
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
                <FormControl sx={{ minWidth: 320, mt: desktop ? "" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Request expired
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={expired}
                    label="Age"
                    onChange={handleExpiredChange}
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "" : 2 }}>
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
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterOther === true ? "flex" : "none" }}
          />
        </Box>
        <Box
          display={desktop ? "flex" : "block"}
          justifyContent="space-between"
          mt={2}
        >
          <Box display={desktop ? "flex" : "block"} gap={1}>
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
          <Box display={desktop ? "flex" : "block"} gap={1} alignItems="center">
            <Box
              display="flex"
              gap={1}
              justifyContent={desktop ? "" : "center"}
              alignItems="center"
            >
              <Typography>Total:</Typography>
              <span
                style={{
                  backgroundColor: "#e0dddd",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
              >
                2
              </span>
            </Box>
            <Box
              display="flex"
              gap={1}
              justifyContent={desktop ? "" : "center"}
              alignItems="center"
            >
              <Typography>Confirmed:</Typography>
              <span
                style={{
                  backgroundColor: "#e0dddd",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
              >
                0
              </span>
            </Box>
            <Box
              display="flex"
              gap={1}
              justifyContent={desktop ? "" : "center"}
              alignItems="center"
            >
              <Typography>Not Confirmed:</Typography>
              <span
                style={{
                  backgroundColor: "#e0dddd",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  color: "red",
                }}
              >
                0
              </span>
            </Box>
            <Box
              display={desktop ? "flex" : "block"}
              gap={1}
              alignItems="center"
            >
              <Button
                variant="outlined"
                color="success"
                startIcon={<AddIcon />}
                sx={{ borderRadius: "20px" }}
              >
                Import From Excel
              </Button>
              <Button
                variant="outlined"
                color="success"
                startIcon={<AddIcon />}
                sx={{ borderRadius: "20px" }}
              >
                Export To Excel
              </Button>
            </Box>
          </Box>
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
              New request
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleTabChange}
                  scrollButtons="auto"
                  variant="scrollable"
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
                  <Tab
                    icon={<span className="archive" />}
                    label={
                      <Box className="tabBtn">
                        <span style={{ color: "white" }}>
                          Cargo Information
                        </span>
                      </Box>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Basic />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Cargo />
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
