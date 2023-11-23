import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { departments } from "../store/employeeStore";
import { employeeType } from "../types";
import { ChangeEvent, useState } from "react";



export default function AddEmployeeComponent ({onEmployeChange}:{onEmployeChange:(data:employeeType)=>void}) {

  const [info, setInfo] =  useState<employeeType>({
    employeeName: "",
    employeeDepartment: "",
    employeeSalary: "",
    _id: ""
  })


  const handleTextChange = (event: ChangeEvent<HTMLInputElement> ) => {
    setInfo({ ...info, [event.target.name]: event.target.value });

  };

  const handleChange = (event: SelectChangeEvent<string> ) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    onEmployeChange(info);
    
    setInfo({
      employeeName: "",
      employeeDepartment: "",
      employeeSalary: "",
      _id: ""
    });
  };

    return(
        <>
        <Box> 
        <Grid container spacing={1}>
          <Grid xs={3} spacing={4}>
             <TextField id="outlined-basic" label="Name" name="employeeName" value={info.employeeName} onChange={handleTextChange} variant="outlined" />
          </Grid>
          <Grid xs={3} spacing={4}>
        
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.employeeDepartment}
                label="Department"
                onChange={handleChange}
                fullWidth
                name="employeeDepartment"
                variant="outlined"
            >
            {
                departments.map((list) => (
                    <MenuItem value={list} key={list}>{list}</MenuItem>
                ))
            }

            </Select>
          </Grid>
          <Grid xs={3} spacing={4}>
              <TextField id="outlined-basic" label="Salary" name="employeeSalary" variant="outlined" value={info.employeeSalary} onChange={handleTextChange} />
          </Grid>
          <Grid xs={3}>
            <Button onClick={handleSubmit}>
              <IconButton aria-label="add">
                <AddCircleRoundedIcon />
              </IconButton>
              </Button>
          </Grid>
        </Grid>
      </Box>
        </>
    )
}