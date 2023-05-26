import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const theme = createTheme();


export default function Home() {

    return (

<ThemeProvider theme={theme}>
<Typography variant="h1">Hello, welcome to the project!</Typography>
<Button variant="contained" color="primary">Click Me</Button>
</ThemeProvider>
    )}