import headStyles from "../styles/componentStyles/heading.module.css";

type HeadingProps = {
  head: string;
  paragraph: string;
};
export default function SectionHeading({ head, paragraph }: HeadingProps) {
  return (
    <div className={headStyles["products-heading"]}>
      <h2>{head}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
