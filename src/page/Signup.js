import * as React from "react";
import {
  FormControl,
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export default function Signup() {
  return (
    <>
      <Container
        fullWidth
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box p={2}>
          <Typography fontSize="30px" fontWeight="700">
            Sign up
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="outlined-basic"
              label="UserName"
              variant="outlined"
              sx={{ mt: 3 }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              sx={{ mt: 3 }}
            />{" "}
            <TextField
              id="outlined-basic"
              label="Confrim Password"
              type="password"
              variant="outlined"
              sx={{ mt: 3 }}
            />
            <Button variant="contained" sx={{ mt: 3 }}>
              Signup
            </Button>
          </FormControl>

          <Typography>
            If you have account already, please{" "}
            <a href="/login" style={{ textDecoration: "none", color: "blue" }}>
              Login
            </a>
            .
          </Typography>
        </Box>
      </Container>
    </>
  );
}
