import { Box } from "@mui/material";
import ProfilePath from "src/assets/profile.jpg";
import React from "react";

export const Logo: React.FC = () => (
    <>
        <Box  display="flex" justifyContent="center">
            <img
                style={{
                    maxWidth: "25%",
                }}
                src={ProfilePath}
                alt="GVC Logo"
            />
        </Box>
    </>
);
