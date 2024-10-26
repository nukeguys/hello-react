function Profile() {
  return (
    <img
      className="rounded-full"
      src="https://i.pravatar.cc/100?img=4"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
