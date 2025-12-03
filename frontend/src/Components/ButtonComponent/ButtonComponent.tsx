import * as React from "react";
import Button from '@mui/material/Button';

interface  ButtonProps {
    children: string;
    style?: React.CSSProperties;
}

export default function ButtonComponent({ children, style }: ButtonProps) {
    return (
        <Button variant="contained" sx={{ textTransform: 'none', color: '#fff' }} style={style}>
            {children}
        </Button>
    )
}