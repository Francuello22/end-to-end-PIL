import React from 'react'

import MyButton from '@/components/myButton/MyButton';
import WelcomeMesagge from '@/components/welcomeMesagge/WelcomeMesagge';
import UserStatus from '@/components/statusUserMesagge/StatusUserMensagge';
import ListFriends from '@/components/friendsList/FriendsList';
import StateButton from '@/components/stateButton/StateButton';


export default function about() {


const status = false;

    return (
    <>
    <br />
    

    <WelcomeMesagge/> <br />

    <UserStatus user= {status}/> <br />
    
    <MyButton text= 'Mi boton'/> <br /><br />

    <ListFriends/> <br />

    <StateButton/> <br />
    
    </>
    )
};
