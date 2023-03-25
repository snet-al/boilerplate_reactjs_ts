import useAuth from '../hooks/useAuth';

import createAvatar from '../utils/createAvatar';

import Avatar from './Avatar';

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();

  return (
    <Avatar
      src={user?.fullAvatarUrl}
      alt={user?.username}
      color={user?.fullAvatarUrl ? 'default' : createAvatar(user?.username).color}
      {...other}
    >
      {createAvatar(user?.username).name}
    </Avatar>
  );
}
