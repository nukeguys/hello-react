import { Person } from "@/types";
import Avatar from "./Avatar";
import Card from "./Card";

interface Props {
  person: Person;
}

function Profile({ person }: Props) {
  return (
    <Card>
      <Avatar person={person} />
      <div>{`${person.gender === "male" ? "🚹" : "🚺"} ${person.name}`}</div>
      {/* 동일한 결과 */}
      {person.gender === "male" && <div>{`🚹 ${person.name}`}</div>}
      {person.gender === "female" && <div>{`🚺 ${person.name}`}</div>}
    </Card>
  );
}

export default Profile;
