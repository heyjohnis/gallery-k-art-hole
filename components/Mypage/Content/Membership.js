import React from 'react';
import LvBlack from '../LvBlack';
import LvPlatinum from "../LvPlatinum";
import LvGreen from "../LvGreen";

const Membership = ({ user }) => {
    return (
        <>
        { user.membership === 'black' && <LvBlack/> }
        { user.membership === 'platinum' && <LvPlatinum/> }
        { user.membership === 'green' && <LvGreen/> }
        </>
    );
};

export default Membership;