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
import Switch from "@mui/material/Switch";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
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

export default function Expenses() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [payValue, setPayValue] = React.useState([null, null]);
  const [issuedValue, setIssuedValue] = React.useState([null, null]);
  const [actValue, setActValue] = React.useState([null, null]);
  const [orderStatusValue, setOrderStatusValue] = React.useState([null, null]);
  const [filterDate, setFilterDate] = React.useState(true);
  const [filterContragents, setFilterContragents] = React.useState(true);
  const [filterReceived, setFilterReceived] = React.useState(true);
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterDate(false);
        break;
      case 2:
        setFilterContragents(false);
        break;
      case 3:
        setFilterReceived(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterDate(true);
        break;
      case 2:
        setFilterContragents(true);
        break;
      case 3:
        setFilterReceived(true);
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
              variant={filterDate === false ? "outlined" : "contained"}
              onClick={() => Display(1)}
              sx={{ ml: "180px" }}
            >
              Date
            </Button>
            <Button
              variant={filterContragents === false ? "outlined" : "contained"}
              onClick={() => Display(2)}
            >
              Contragents
            </Button>
            <Button
              variant={filterReceived === false ? "outlined" : "contained"}
              onClick={() => Display(3)}
            >
              Received Invoices
            </Button>
          </Box>
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
                      Pay until From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={payValue}
                      onChange={(newValue) => {
                        setPayValue(newValue);
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
                <FormControl sx={{ minWidth: 320, mt: desktop ? "50px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Payment Type
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
                <FormControl sx={{ minWidth: 320, mt: desktop ? "50px" : 2 }}>
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
            <TextField
              id="outlined-basic"
              label="Contragent"
              variant="outlined"
              sx={{
                width: desktop ? "200" : 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />
          </Box>
          <Divider
            sx={{
              mt: 1,
              display: filterContragents === true ? "flex" : "none",
            }}
          />
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterReceived == true
                  ? "flex"
                  : "none"
                : filterReceived == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>
              Received <br />
              Invoices:{" "}
            </Typography>
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
                m: 1,
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "0px" : 2,
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Additional Expenses
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
            <FormControl sx={{ m: 1, minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
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
            <FormControl sx={{ m: 1, minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                SubCategory
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
              display: filterReceived === true ? "flex" : "none",
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
