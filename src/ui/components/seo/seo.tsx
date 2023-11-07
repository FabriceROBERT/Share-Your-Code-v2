interface Props {
  title: string;
  description: string;
}

export const Seo = ({ title, description }: Props) => {
  return (
    <div>
      <title>{title}</title>
    </div>
  );
};
