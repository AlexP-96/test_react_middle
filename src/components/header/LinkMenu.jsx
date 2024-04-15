import React from 'react';
import { Link } from 'react-router-dom';

const LinkMenu = ({uri, name, classes}) => {
    return (
        <li>
            <Link
                to={uri}
                className={classes}
            >
                {name}
            </Link>
        </li>
    );
};

export default LinkMenu;