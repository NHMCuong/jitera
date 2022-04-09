import { lazy, Suspense, useEffect, useState } from "react";
import { getAvatar, getListUser } from "../../apis/user";
import { Loading } from "../../components/Loading";
import { User } from "../../helpers/constants/user";

const UserCard = lazy(() =>
  import("../../components/UserCard").then(({ UserCard }) => ({
    default: UserCard,
  }))
);

export const ListUser = () => {
  const [user, setUser] = useState<User[]>([]);
  const [avatar, setAvatar] = useState([]);

  const props = { user, avatar };

  const handleGetUserInfo = async () => {
    const userData = await getListUser().then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    });

    const avatar = await userData.map((user: User) => {
      getAvatar(user.name).then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      });
    });

    setUser(userData);
    setAvatar(avatar);
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <UserCard {...props} />
    </Suspense>
  );
};
