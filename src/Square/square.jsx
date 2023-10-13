import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

export default function Square({handleClick , value }){


    const CusButton = styled(Button)(({ theme }) => ({
        height: '135px',
        width: '135px',
        background:'white',
        border:'solid 1px black',
        fontWeight: '900',
        fontSize: '2.875rem'
      }));
    return(
        <>
            <CusButton onClick={handleClick}>{value}</CusButton>
        </>
    )
}
