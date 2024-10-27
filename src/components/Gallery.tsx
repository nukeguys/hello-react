import { Person } from "@/types";
import Profile from "./Profile";

const scientists: Person[] = [
  {
    name: "Aklilu Lemma",
    imageId: 4,
    gender: "male",
  },
  {
    name: "Lin Lanying",
    imageId: 10,
    gender: "female",
  },
  {
    name: "Ada Lovelace",
    imageId: 69,
    gender: "male",
  },
];

export default function Gallery() {
  if (scientists.length === 0) {
    return <p>Empty</p>;
  }

  return (
    <section className="p-5">
      <h1>Amazing scientists</h1>
      <div className="flex">
        <Profile person={scientists[0]} />
        <Profile person={scientists[1]} />
        <Profile person={scientists[2]} />
      </div>
    </section>
  );
}
