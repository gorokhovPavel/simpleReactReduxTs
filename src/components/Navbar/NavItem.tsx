import * as React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

interface LinkProps {
    to: string;
    label: string;
}

const navItem: React.FC<LinkProps> = ({ to, label }) => (
    <Link style={{paddingLeft: 8, paddingRight: 8}} to={to}>
      <Button variant='outlined' color='primary'>
        <span>{label}</span>
      </Button>
    </Link>
);

export default navItem;