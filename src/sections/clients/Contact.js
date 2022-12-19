import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, useMediaQuery, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Active() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div>
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={desktop ? 6 : 12}>
              <Typography fontWeight="700" mt={2}>
                Legal Address
              </Typography>
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
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Fax"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Website"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight="700" mt={2}>
                Postal Address
              </Typography>
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
                  label="City"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Fax"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Website"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
