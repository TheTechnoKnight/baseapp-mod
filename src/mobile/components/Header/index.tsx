import * as React from 'react';
// import { Button } from 'react-bootstrap';
// import { useIntl } from 'react-intl';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { ProfileIcon } from '../../../assets/images/sidebar/ProfileIcon';
// import { selectUserLoggedIn } from '../../../modules';

const HeaderComponent: React.FC = () => {
    return (
        <div className="pg-mobile-header">
            <Link to="/" className="pg-mobile-header__logo">
                <img src="/logo.png" alt="App Logo" />
            </Link>
        </div>
    );
};

export const Header = React.memo(HeaderComponent);
