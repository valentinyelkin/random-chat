import * as React from 'react';
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { authMe } from "../src/api/user_requests/user-requests";
import { UserDTO } from "../src/api/user_requests/userDTO";
import Box from "@mui/material/Box";
import { useAuth } from "../src/context/auth-context";

const Account = () => {
    const [user, setUser] = useState<UserDTO>();
    const { setData } = useAuth();

    useEffect(() => {
        authMe().then((res) => {
            setUser(res.data);
            setData(res.data)
        })
    }, []);

    return (
          <Box sx={{ display: "flex", flexDirection: "column",  alignItems: "center" }}>
            <Avatar />
            <Typography gutterBottom variant='h5' component='div' sx={{marginTop: '20px'}}>
                {user?.email}
            </Typography>
          </Box>
     );
};


export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    };
}
export default Account;
