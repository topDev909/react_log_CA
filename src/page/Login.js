import * as React from "react";
import {
  FormControl,
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export default function Login() {
  return (
    <>
      <Container
        fullWidth
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box p={2}>
          <Typography fontSize="30px" fontWeight="700">
            Login
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
            />
            <Button variant="contained" sx={{ mt: 3 }}>
              Login
            </Button>
          </FormControl>
          <Typography>
            If you have not account, please{" "}
            <a href="/signup" style={{ textDecoration: "none", color: "blue" }}>
              Sign up
            </a>
            .
          </Typography>
        </Box>
      </Container>
    </>
  );
}
