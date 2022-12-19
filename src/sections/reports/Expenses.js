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
export default function Expenses() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [orderValue, setOrderValue] = React.useState([null, null]);
  const [issuedValue, setIssuedValue] = React.useState([null, null]);
  const [expensesValue, setExpensesValue] = React.useState([null, null]);
  const [orderStatusValue, setOrderStatusValue] = React.useState([null, null]);
  const [filterID, setFilterID] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(true);
  const [filterContragents, setFilterContragents] = React.useState(true);
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterID(false);
        break;
      case 2:
        setFilterDate(false);
        break;
      case 3:
        setFilterContragents(false);
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
        setFilterContragents(true);
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
              variant={filterContragents === false ? "outlined" : "contained"}
              onClick={() => Display(3)}
            >
              Contragents
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
            <Box>
              <Box display={desktop ? "flex" : "block"} gap={1}>
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
                <TextField
                  id="outlined-basic"
                  label="Number Invoices"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Expenses
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
                    Show if
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
              <Box display={desktop ? "flex" : "block"} gap={1} mt={1}>
                <FormControl
                  sx={{
                    minWidth: 320,
                    ml: desktop ? "60px" : "0px",
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Order Status
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
                    Invoicing company
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
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="Group by contragents"
                />
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="Debt"
                />
              </Box>
            </Box>
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
              onClick={() => Delete(1)}
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
                      Issued From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={issuedValue}
                      onChange={(newValue) => {
                        setIssuedValue(newValue);
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
                      Expenses date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={expensesValue}
                      onChange={(newValue) => {
                        setExpensesValue(newValue);
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
                ? filterContragents == true
                  ? "flex"
                  : "none"
                : filterContragents == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Contragents: </Typography>
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
                Contragent
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
                Customer
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
            sx={{
              mt: 1,
              display: filterContragents === true ? "flex" : "none",
            }}
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
