import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";

import { Profile } from "components";

const AgentProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: id as string
  })

  const myProfile = data?.data ?? {};

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Something went wrong</div>

  console.log(myProfile.name)

  return ( 
    <Profile 
      type='Agent'
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
      number={myProfile.numer}
      address={myProfile.address}
    />
  )
}

export default AgentProfile