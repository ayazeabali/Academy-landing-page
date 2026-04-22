interface Props {
  title: string;
  description: string;
}

export const Card = ({ title, description }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};