import { AppBar, Box } from "@mui/material";

export default function Header () {
    return(
        <Box sx={{ fontSize: 34, fontWeight: 'bold', alignItems: 'center'  }}>
            <AppBar>
                Employee Details
            </AppBar>
        </Box>
    )
}   