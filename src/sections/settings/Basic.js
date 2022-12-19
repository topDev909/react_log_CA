import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, Grid, useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

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
export default function Active() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [loadingValue, setLoadingValue] = React.useState([null, null]);
  const [unloadingValue, setUnloadingValue] = React.useState([null, null]);
  return (
    <>
      <div>
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={desktop ? 6 : 12}>
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <TextField
                  id="outlined-basic"
                  label="User"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Logistician"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Department"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Client
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Contact person
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Extremely Urgent"
              />
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Request is received
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Request purpose
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Divider sx={{ mt: 1 }} />
              <Typography fontWeight="700">Loading place</Typography>
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Address"
                  style={{ width: desktop ? "50%" : "100%" }}
                />
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Contact person and telephone"
                  style={{ width: desktop ? "50%" : "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={desktop ? 6 : 12}>
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ textAlign: "left" }}>
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

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ textAlign: "left" }}>
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
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl
                  sx={{
                    minWidth: desktop ? 220 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Client
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  sx={{
                    minWidth: desktop ? 150 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Contact person
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="Extremely Urgent"
                />
                <FormControl
                  sx={{
                    minWidth: desktop ? 120 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Price(Standard)"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="With VIT"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl
                  sx={{
                    minWidth: desktop ? 120 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    VIT rate
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  sx={{
                    minWidth: desktop ? 120 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Tags
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Divider sx={{ mt: 2 }} />
              <Typography fontWeight="700">Unloading place</Typography>
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Address"
                  style={{ width: desktop ? "50%" : "100%" }}
                />
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Contact person and telephone"
                  style={{ width: desktop ? "50%" : "100%" }}
                />
              </Box>
            </Grid>
          </Grid>

          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Additional Information"
            style={{ width: "100%", marginTop: "20px" }}
          />
        </Box>
      </div>
    </>
  );
}
