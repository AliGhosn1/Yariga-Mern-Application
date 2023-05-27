import { useGetIdentity, useOne } from "@pankod/refine-core";

import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: user?.userid,
  })

  const myProfile = data?.data ?? {};

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Something went wrong</div>

  console.log(myProfile.name)

  return ( 
    <Profile 
      type='My'
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
      number={myProfile.number}
      address={myProfile.address}
    />
  )
}

export default MyProfile