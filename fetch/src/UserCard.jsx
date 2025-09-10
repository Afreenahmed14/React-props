import React from 'react';
const UserCard = ({ users }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 text-center">
      <img
        src={users.picture.large}
        alt={`${users.name.first} ${users.name.last}`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg font-semibold">
        {users.name.first} {users.name.last}
      </h2>
      <h3 className="text-sm text-gray-600 mt-1">{users.email}</h3>
      <h3 className="text-sm text-gray-500">
        {users.location.city}, {users.location.country}
      </h3>
    </div>
  );
};

export default UserCard;
