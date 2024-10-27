export function getImageUrl(imageId: number, size?: number) {
  return `https://i.pravatar.cc/${size ?? ""}?img=${imageId}`;
}
