import React, {Component} from 'react';

const UserList =  props => {
    return (
        <ul>
            {props.users.map((user, i) => 
            
            <li key={i}>
                firstName: {user.firstName} ......
                lastName:  {user.lastName}
                userName: {user.userName} 
                email: {user.eMail}
                 
            </li>                
            )};
        </ul>
    );

}

export default UserList;