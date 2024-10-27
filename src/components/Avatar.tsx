import { getImageUrl } from "@/utils";

interface Props {
  person: { name: string; imageId: number };
  size?: number;
}

function Avatar({ person, size = 100 }: Props) {
  return (
    <img
      className="rounded-full"
      src={getImageUrl(person.imageId, size)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;
