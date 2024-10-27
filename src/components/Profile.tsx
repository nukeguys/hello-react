import Avatar from "./Avatar";
import Card from "./Card";

function Profile() {
  return (
    <>
      <Card>
        <Avatar
          person={{
            name: "Aklilu Lemma",
            imageId: 4,
          }}
        />
      </Card>
      <Card>
        <Avatar
          size={150}
          person={{
            name: "Lin Lanying",
            imageId: 10,
          }}
        />
      </Card>
    </>
  );
}

export default Profile;
