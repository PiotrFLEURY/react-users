import './User.css';
import React from 'react';

function User(props) {
    let user = props.user;
    let onUserClick = props.onClick;
    return (
        <>
            <img 
                src={user.picture.large} 
                className="large-avatar" 
                onClick={(e) => onUserClick()} 
                alt="user avatar"
                />
            <UserProperty 
                label="Name" 
                value={user.name.title + " " + user.name.first + " " + user.name.last} 
                />
            <UserProperty
                label="Email"
                value={user.email}
                />
            <UserProperty
                label="Phone"
                value={user.phone}
                />
            <UserProperty
                label="Address"
                value={user.location.street.number + " " + user.location.street.name + ", " + user.location.city + ", " + user.location.state + ", " + user.location.country + ", " + user.location.postcode}
                />
            <UserProperty
                label="Birthday"
                value={user.dob.date}
                />
            <UserProperty
                label="Registered"
                value={user.registered.date}
                />
            <UserProperty
                label="National"
                value={user.nat}
                />
        </>
    );
}

function UserProperty(props) {
    let label = props.label;
    let value = props.value;
    return (
        <div className="user-property">
            <div className="property-label">{label}</div>
            &nbsp;
            <div className="property-value">{value}</div>
        </div>
    );
}

export default User;