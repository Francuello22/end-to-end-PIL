const UserStatus = ({user}) => (

    <h3> {user ? 'El usuario esta conectado' : 'El usuario esta desconectado' }</h3>
);

export default UserStatus;