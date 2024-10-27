interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return (
    <div className="p-5 m-2 overflow-hidden border w-fit rounded-2xl">
      {children}
    </div>
  );
}

export default Card;
