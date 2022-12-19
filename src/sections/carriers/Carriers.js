import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Basic from "./Basic";
import Contact from "./Contact";
import Payment from "./Payment";
import Banks from "./Banks";

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

export default function Carriers() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [creationCarrierValue, setCreationCarrierValue] = React.useState([
    null,
    null,
  ]);
  const [creationValue, setCreationValue] = React.useState([null, null]);
  const [contactValue, setContactValue] = React.useState([null, null]);
  const [filterCarriers, setFilterCarriers] = React.useState(true);
  const [filterDirections, setFilterDirections] = React.useState(false);
  const [filterUsers, setFilterUsers] = React.useState(false);
  const [filterDate, setFilterDate] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterCarriers(false);
        break;
      case 2:
        setFilterDirections(false);
        break;
      case 3:
        setFilterUsers(false);
        break;
      case 4:
        setFilterDate(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterCarriers(true);
        break;
      case 2:
        setFilterDirections(true);
        break;
      case 3:
        setFilterUsers(true);
        break;
      case 4:
        setFilterDate(true);
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
              variant={filterCarriers === false ? "outlined" : "contained"}
              sx={{ ml: "180px" }}
              onClick={() => Display(1)}
            >
              Carriers
            </Button>
            <Button
              variant={filterDirections === false ? "outlined" : "contained"}
              onClick={() => Display(2)}
            >
              Directions
            </Button>
            <Button
              variant={filterUsers === false ? "outlined" : "contained"}
              onClick={() => Display(3)}
            >
              Users
            </Button>
            <Button
              variant={filterDate === false ? "outlined" : "contained"}
              onClick={() => Display(4)}
            >
              Date
            </Button>
          </Box>

          <Box
            className="filterBox"
            gap={3}
            mt="30px"
            display={
              desktop
                ? filterCarriers == true
                  ? "flex"
                  : "none"
                : filterCarriers == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Carriers: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(1)}
            >
              Del
            </Button>
            <Box sx={{ ml: desktop ? "60px" : "0px" }}>
              <Box display={desktop ? "flex" : "block"} gap={1}>
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                  sx={{
                    width: desktop ? "200" : 320,
                    mt: desktop ? "50px" : 2,
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Company code(INN, EGRPOU, VAT, BIN, UNN)"
                  variant="outlined"
                  sx={{
                    width: desktop ? "200" : 320,
                    mt: desktop ? "50px" : 2,
                  }}
                />
                <FormControl sx={{ minWidth: 320, mt: desktop ? "50px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Activity Area
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Creation date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={creationCarrierValue}
                      onChange={(newValue) => {
                        setCreationCarrierValue(newValue);
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
              <Box display={desktop ? "flex" : "block"} gap={1} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Transport Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Type of Carrier
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterCarriers === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
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
              onClick={() => Delete(2)}
            >
              Del
            </Button>
            <Box>
              <Box display={desktop ? "flex" : "block"} gap={1}>
                <Box sx={{ ml: desktop ? "60px" : "0px" }}>
                  <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                    Direction From:
                  </Typography>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Age"
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
                    To:
                  </Typography>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Age"
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
                    Licences
                  </Typography>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Licences
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Age"
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
                    Departure region
                  </Typography>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Age"
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
                    Region of arrival
                  </Typography>
                  <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Age"
                    >
                      <MenuItem value={1}>VIP</MenuItem>
                      <MenuItem value={2}>SUper klientas</MenuItem>
                      <MenuItem value={3}>Paprastas klientas</MenuItem>
                      <MenuItem value={4}>NEDIRBTI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={1} mt={1}>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="Exact routes only"
                  sx={{ ml: desktop ? "60px" : "0px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Departure City"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Destination City"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Box>
          </Box>

          <Divider
            sx={{ mt: 1, display: filterDirections === true ? "flex" : "none" }}
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
              onClick={() => Delete(3)}
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
                label="Age"
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Contact person"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
            />
          </Box>

          <Divider
            sx={{ mt: 1, display: filterUsers === true ? "flex" : "none" }}
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
              onClick={() => Delete(4)}
            >
              Del
            </Button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box ml={desktop ? "60px" : "0px"}>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Contact date From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={contactValue}
                  onChange={(newValue) => {
                    setContactValue(newValue);
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
              <Box ml={desktop ? "60px" : "0px"}>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Date of Creation From:
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
            <TextField
              id="outlined-basic"
              label="Carrier contract number with carrier"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "50px" : 2 }}
            />
            <FormControl sx={{ minWidth: 320, mt: desktop ? "50px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Has Contract
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Divider
          sx={{ mt: 1, display: filterDate === true ? "flex" : "none" }}
        />
        <Box
          display={desktop ? "flex" : "block"}
          justifyContent="space-between"
          mt={2}
          alignItems="center"
        >
          <Box display={desktop ? "flex" : "block"} gap={1}>
            <Button
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
              onClick={handleOpen}
            >
              New Carrier
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
          <Box display={desktop ? "flex" : "block"} gap={1} alignItems="center">
            <Box
              display="flex"
              justifyContent={desktop ? "" : "center"}
              alignItems="center"
            >
              <Typography>Carriers:</Typography>
              <span
                style={{
                  backgroundColor: "#e0dddd",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  color: "green",
                }}
              >
                1
              </span>
            </Box>
            <Button
              variant="contained"
              color="success"
              sx={{ borderRadius: "20px" }}
            >
              Export
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Import from Excel
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              XML Unloading
            </Button>
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
          style={{
            display: "flex",
            height: desktop ? "" : "100%",
            overflow: desktop ? "hidden" : "scroll",
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              fontWeight="700"
              component="h2"
            >
              New Carrier
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
                  <Tab
                    icon={<span className="archive" />}
                    label={
                      <Box className="tabBtn">
                        <span style={{ color: "white" }}>
                          Contact Information
                        </span>
                      </Box>
                    }
                    {...a11yProps(1)}
                  />
                  <Tab
                    icon={<span className="archive" />}
                    label={
                      <Box className="tabBtn">
                        <span style={{ color: "white" }}>Payment rules</span>
                      </Box>
                    }
                    {...a11yProps(2)}
                  />
                  {/* <Tab
                    icon={<span className="archive" />}
                    label={
                      <Box className="tabBtn">
                        <span style={{ color: "white" }}>Banks</span>
                      </Box>
                    }
                    {...a11yProps(3)}
                  /> */}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Basic />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Contact />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Payment />
              </TabPanel>
              {/* <TabPanel value={value} index={3}>
                <Banks />
              </TabPanel> */}
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
