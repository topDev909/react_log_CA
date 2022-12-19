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
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";

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

export default function Payments() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [paymentValue, setPaymentValue] = React.useState([null, null]);
  const [filterID, setFilterID] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(false);
  const [filterClients, setFilterClients] = React.useState(false);
  const [filterUsers, setFilterUsers] = React.useState(false);
  const [filterPayments, setFilterPayments] = React.useState(false);
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
        setFilterUsers(false);
        break;
      case 5:
        setFilterPayments(false);
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
        setFilterUsers(true);
        break;
      case 5:
        setFilterPayments(true);
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
              variant={filterUsers === false ? "outlined" : "contained"}
              onClick={() => Display(4)}
            >
              Users
            </Button>
            <Button
              variant={filterPayments === false ? "outlined" : "contained"}
              onClick={() => Display(5)}
            >
              Payments
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
              label="Invoices Number"
              variant="outlined"
              sx={{ width: desktop ? "200" : 320, mt: desktop ? "0px" : 2 }}
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
              <Box ml={desktop ? "60px" : "0px"}>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Payment date From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={paymentValue}
                  onChange={(newValue) => {
                    setPaymentValue(newValue);
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
            sx={{
              mt: 1,
              display: filterDate === true ? "flex" : "none",
            }}
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
                width: desktop ? "200" : 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />
          </Box>

          <Divider
            sx={{ mt: 1, display: filterClients === true ? "flex" : "none" }}
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
              onClick={() => Delete(4)}
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
                Seller
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
            sx={{ mt: 1, display: filterUsers === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={
              desktop
                ? filterPayments == true
                  ? "flex"
                  : "none"
                : filterPayments == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Payments: </Typography>
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
                m: 1,
                minWidth: 320,
                ml: desktop ? "60px" : "0px",
                mt: desktop ? "0px" : 2,
              }}
            >
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
          <Divider
            sx={{ mt: 1, display: filterPayments === true ? "flex" : "none" }}
          />
        </Box>
        <Box
          display={desktop ? "flex" : "block"}
          justifyContent="space-between"
          mt={2}
          alignItems="center"
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
          <Box
            display="flex"
            gap={1}
            justifyContent={desktop ? "" : "center"}
            alignItems="center"
          >
            <Typography>Payments sum:</Typography>
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
            <Typography>USD</Typography>
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
