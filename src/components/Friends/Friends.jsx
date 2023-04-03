import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    // const data = useLoaderData();
    // console.log(data)
    const friends = useLoaderData();
    // console.log(friends)
    return (
        <div>
            <h2>These are my friend {friends.length}</h2>
            <div className='friends'>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;