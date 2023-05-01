import React from 'react';
import LvBlack from '../LvBlack';
import LvPlatinum from "../LvPlatinum";
import LvGreen from "../LvGreen";
import LvPurple from '../LvPurple';
import LvRed from '../LvRed';
import LvBlue from '../LvGreen';

const Membership = ({ user }) => {
    return (
        <>
            { user.membership === 'black' && <LvBlack/> }
            { user.membership === 'platinum' && <LvPlatinum/> }
            { user.membership === 'blue' && <LvBlue/> }
            { user.membership === 'green' && <LvGreen/> }
            { user.membership === 'purple' && <LvPurple/> }
            { user.membership === 'red' && <LvRed/> }
        </>
    );
};

export default Membership;