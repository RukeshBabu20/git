import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { employeeType } from "../types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListEmployeeComponent ({employee, onEmployeeDelete}:{employee:employeeType[]; onEmployeeDelete: (employee: string) => void}) {

    // const  employees= employee;
    const [employees, setEmployees] = useState<employeeType[]>([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/employee/list")
        .then(response => {
            setEmployees(response.data);
        })
        .catch(error =>{
            console.error(error);
        })
    }, []);

    // console.log(employees);

    return(
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                {employees.map((employee) => {
                    return (
                        <TableRow>
                        <TableCell>{employee.employeeName}</TableCell>
                        <TableCell>{employee.employeeDepartment}</TableCell>
                        <TableCell>{employee.employeeSalary}</TableCell>
                        <TableCell>
                             <DeleteRoundedIcon onClick={() => onEmployeeDelete(employee._id)} />
                        </TableCell>
                        </TableRow>
                     );
                })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}