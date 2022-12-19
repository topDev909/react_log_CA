import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
export default function Index() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleHide = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Box sx={{ width: "100%", textAlign: "left", padding: "50px" }}>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ borderRadius: "3px" }}
          onClick={handleOpen}
        >
          Add
        </Button>
        <Box display="flex" gap={2} alignItems="center" mt={2}>
          <Typography>Filter</Typography>
          <Button
            variant="outlined"
            startIcon={
              show === true ? <VisibilityIcon /> : <VisibilityOffIcon />
            }
            sx={{ borderRadius: "3px" }}
            onClick={show === true ? () => handleHide() : () => handleShow()}
          >
            {show === true ? "Show" : "Hide"}
          </Button>
          <Button variant="contained" sx={{ borderRadius: "3px" }}>
            To Filter
          </Button>
        </Box>
        {show === false ? (
          <Box>
            <Box display={desktop ? "flex" : "block"} gap={2}>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Author:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
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
                  Assigned to:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
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
                  Contragent:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
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
                  Deadline:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
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
            <Box display={desktop ? "flex" : "block"} gap={2}>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Status:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
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
                  Label:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
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
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClose}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
}
