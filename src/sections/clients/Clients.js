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

export default function Clients() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [contactValue, setContactValue] = React.useState([null, null]);
  const [creationValue, setCreationValue] = React.useState([null, null]);
  const [filterCompany, setFilterCompany] = React.useState(true);
  const [filterDirections, setFilterDirections] = React.useState(true);
  const [filterUsers, setFilterUsers] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(true);
  const [filterOther, setFilterOther] = React.useState(true);
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
        setFilterCompany(false);
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
      case 5:
        setFilterOther(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterCompany(true);
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
      case 5:
        setFilterOther(true);
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
              variant={filterCompany === false ? "outlined" : "contained"}
              sx={{ ml: "180px" }}
              onClick={() => Display(1)}
            >
              Company
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
            <Button
              variant={filterOther === false ? "outlined" : "contained"}
              onClick={() => Display(5)}
            >
              Other
            </Button>
          </Box>

          <Box
            className="filterBox"
            gap={3}
            mt="30px"
            display={
              desktop
                ? filterCompany == true
                  ? "flex"
                  : "none"
                : filterCompany == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Company: </Typography>
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
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Company code(INN, EGRPOU, VAT, BIN, UNN)"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
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
                  label="Email"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Website"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Creation date From:
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
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterCompany === true ? "flex" : "none" }}
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
            <TextField
              id="outlined-basic"
              label="Departure City"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "50px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Destination City"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "50px" : 2 }}
            />
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
              label="Contact number"
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
          <Divider
            sx={{ mt: 1, display: filterDate === true ? "flex" : "none" }}
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
              onClick={() => Delete(5)}
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
                Client Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
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
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
            <Button
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
              onClick={handleOpen}
            >
              New Client
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
            <Typography>Clients:</Typography>
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
              XML Unloading
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Export
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
              New Client
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

            <Box
              display={desktop ? "flex" : "block"}
              justifyContent="end"
              m={2}
            >
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
