import { Person } from "@/types";
import Profile from "./Profile";

const scientists: Person[] = [
  {
    id: 1,
    name: "Aklilu Lemma",
    imageId: 4,
    gender: "male",
  },
  {
    id: 2,
    name: "Lin Lanying",
    imageId: 10,
    gender: "female",
  },
  {
    id: 3,
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
        {scientists.map((person) => (
          <Profile key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
