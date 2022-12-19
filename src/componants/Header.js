import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {Box} from "@mui/material";
import faq from "../assets/faq.png";
import billing from "../assets/billing.png";
import logout from "../assets/logout.png";
export default function Header() {
    
    return (
        <>
            <div style={{backgroundColor:"black"}}>
                <Box display="flex" gap={2} justifyContent="end" p={1}>
                    <img src={faq} alt="FAQ"/>
                    <img src={billing} alt="Billing"/>
                    <img src={logout} alt="Logout"/>
                </Box>
            </div>
        </>
    );
}