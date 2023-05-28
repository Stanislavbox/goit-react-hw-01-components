import React from 'react';
import Profile from './Profile/Profile';
import  Statistics  from './Statistics/Statistics';
import  FriendList  from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'

// import {
//   Profile,
//   Statistics,
// } from 'components';

import user from '../data/user.json'
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',

        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',

        padding: '20px',

        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e1e1e1',
        boxSizing: 'border-box'

      }}
    >

                {/* PROFILE */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

                {/* STATISTICS */}
      <Statistics title="Upload stats" stats={data} />

                {/* FRIEND LIST */}
      <FriendList friends={friends} />

                {/* TRANSACTION HISTORY */}
      <TransactionHistory items={transactions} />

    </div>
  );
};
