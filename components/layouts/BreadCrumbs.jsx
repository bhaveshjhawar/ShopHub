import {
    Box , 
    Link,
    // Typography,
    Breadcrumbs
}from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MuiBreadCrumps=({breadCrumbs})=>{
    return (

        <Box my={2} mx={9}>
            <Breadcrumbs
            aria-label='breadcrumbs-label'
            separator={<NavigateNextIcon/>}
            >
            {
                breadCrumbs.map((breadCrumbs,index)=>(
                    <Link href={breadCrumbs.url} underline='hover' sx={{color:'black'}} >{breadCrumbs.name}</Link>

            ))
        }

            </Breadcrumbs>

        </Box>
    )
}
export default MuiBreadCrumps 