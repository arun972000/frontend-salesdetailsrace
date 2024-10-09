/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import logo from "../public/black logo with text.png";

const FormComponent = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isdCode: "",
    mobileNumber: "",
    category: "",
    organization: "",
    designation: "",
  });

  const isdCodes = [
    "+91",
    "+1",
    "+44",
    "+81",
    "+61",
    "+49",
    "+33",
    "+39",
    "+86",
    "+55",
    "+7",
    "+82",
    "+34",
    "+64",
    "+27",
    "+46",
    "+31",
    "+41",
    "+90",
    "+52",
    "+1242",
    "+1246",
    "+1441",
    "+1345",
    "+1876",
    "+20",
    "+234",
    "+212",
    "+216",
    "+218",
    "+60",
    "+65",
    "+66",
    "+63",
    "+62",
    "+95",
    "+251",
    "+254",
    "+256",
    "+255",
    "+58",
    "+54",
  ];

  const categories = [
    "Vehicles",
    "Technology",
    "Auto Component",
    "Business",
    "Agriculture",
    "Construction and Mining",
    "Others",
  ];
  const designations = ["Executive", "Senior Executive", "Management"];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = async () => {
    try {
      await axios.post("https://backend-salesdetailsrace.onrender.com/upload", formData);
      setOpen(true);
    } catch (err) {
      console.log(err);
      setOpen(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formSubmit();
    setOpen(true)
    setFormData({
      name: "",
    email: "",
    isdCode: "",
    mobileNumber: "",
    category: "",
    organization: "",
    designation: "",
    })
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        mt: 5,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="logo" width={70} />
      </div>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        type="email"
        fullWidth
        required
      />

      <Box sx={{ display: "flex", gap: 1 }}>
        <FormControl fullWidth>
          <InputLabel>ISD Code</InputLabel>
          <Select
            name="isdCode"
            value={formData.isdCode}
            onChange={handleChange}
            label="ISD Code"
            required
          >
            {isdCodes.map((code) => (
              <MenuItem key={code} value={code}>
                {code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Mobile Number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
      </Box>

      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
          label="Category"
          required
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Organization"
        name="organization"
        value={formData.organization}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />

      <FormControl fullWidth>
        <InputLabel>Designation</InputLabel>
        <Select
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          label="Designation"
          required
        >
          {designations.map((des) => (
            <MenuItem key={des} value={des}>
              {des}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" fullWidth >
        Submit
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
        <Alert
          onClose={()=>setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your details submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormComponent;
