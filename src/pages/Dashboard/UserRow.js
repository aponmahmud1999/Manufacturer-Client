import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeadmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${email} is now an admin`)
                    refetch()
                }
            })
    }
    const removeUser = () => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to delete")
                }
                return res.json()
            })
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${email} is deleted`)
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeadmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button onClick={removeUser} className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;