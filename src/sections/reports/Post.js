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
export default function Post() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [orderValue, setOrderValue] = React.useState([null, null]);
  const [statusValue, setStatusValue] = React.useState([null, null]);
  const [loadingValue, setLoadingValue] = React.useState([null, null]);
  const [unloadingValue, setUnloadingValue] = React.useState([null, null]);
  const [filterID, setFilterID] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(true);
  const [filterClients, setFilterClients] = React.useState(true);
  const [filterDirections, setFilterDirections] = React.useState(true);
  const [filterUsers, setFilterUsers] = React.useState(true);
  const [filterOrder, setFilterOrder] = React.useState(true);
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
        setFilterUsers(false);
        break;
      case 6:
        setFilterOrder(false);
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
        setFilterUsers(true);
        break;
      case 6:
        setFilterOrder(true);
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
              variant={filterDirections === false ? "outlined" : "contained"}
              onClick={() => Display(4)}
            >
              Directions
            </Button>
            <Button
              variant={filterUsers === false ? "outlined" : "contained"}
              onClick={() => Display(5)}
            >
              Users
            </Button>
            <Button
              variant={filterOrder === false ? "outlined" : "contained"}
              onClick={() => Display(6)}
            >
              Order Status
            </Button>
          </Box>
          <Box className="filterBox" gap={3} mt="30px">
            <Typography sx={{ position: "absolute" }}>To group: </Typography>
            <FormControl
              sx={{
                m: 1,
                minWidth: 320,
                ml: desktop ? "180px" : "0px",
                mt: desktop ? "0px" : 5,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Report About
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
          <Divider sx={{ mt: 1 }} />
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
                width: desktop ? "200" : 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />
            <FormControl
              sx={{
                minWidth: 320,
                mt: desktop ? "0px" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Outgoing invoices are paid
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
            <FormControl
              sx={{
                minWidth: 320,
                mt: desktop ? "0px" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Received invoices are paid
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
                      Order Status setting date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={statusValue}
                      onChange={(newValue) => {
                        setStatusValue(newValue);
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
                      Loading date From:
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
              </Box>
              <Box
                display={desktop ? "flex" : "block"}
                gap={3}
                ml={desktop ? "60px" : "0px"}
              >
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

            <TextField
              id="outlined-basic"
              label="Client"
              variant="outlined"
              sx={{
                width: desktop ? "200" : 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />
            <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Client Type
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
                Exclude clients type
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
            sx={{ mt: 1, display: filterClients === true ? "flex" : "none" }}
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
              onClick={() => Delete(4)}
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
              <InputLabel id="demo-simple-select-helper-label">User</InputLabel>
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
            sx={{ mt: 1, display: filterUsers === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterOrder == true
                  ? "flex"
                  : "none"
                : filterOrder == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Order: </Typography>
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
                Other Status
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
            sx={{ mt: 1, display: filterOrder === true ? "flex" : "none" }}
          />
        </Box>
        <Box
          display={desktop ? "flex" : "block"}
          justifyContent="space-between"
          mt={2}
        >
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
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
      </div>
    </>
  );
}
