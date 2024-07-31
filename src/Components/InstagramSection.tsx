import SectionHeading from "./sectionHeading";
import insta1 from "../assets/Products/insta1.png";
import insta2 from "../assets/Products/insta2.png";
import insta3 from "../assets/Products/insta3.png";
import insta4 from "../assets/Products/insta4.png";
import InstagramPost from "./InstagramPost";
import instaStyles from "../styles/componentStyles/instaStyles.module.css";
import { FaInstagram } from "react-icons/fa";

export type Post = {
  id: number;
  image: string;
  description: string;
  date: string;
};

const InstagramPostData: Post[] = [
  {
    id: 1,
    image: insta1,
    description:
      "The vegetables dishes need to have certain vitamin for those people",
    date: "September 19",
  },
  {
    id: 2,
    image: insta2,
    description:
      "Sweet food can bring someon into happiness as long as they don’t eat to much",
    date: "September 19",
  },
  {
    id: 3,
    image: insta3,
    description:
      "What are you doing before start cooking? prepare the  tools or ingredients?",
    date: "September 19",
  },
  {
    id: 4,
    image: insta4,
    description:
      "Steak never be wrong, it’s suitable for you who want romantic dinner",
    date: "September 19",
  },
];
export default function InstagramSection() {
  const heading = "Check out @foodieland on Instagram";
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim";
  return (
    <div className={instaStyles["instagram-section"]}>
      <SectionHeading head={heading} paragraph={paragraph} />

      <div className={instaStyles.container}>
        {InstagramPostData.map((item) => (
          <InstagramPost key={item.id} post={item} />
        ))}
      </div>

      <button className={instaStyles.visitBtn}>
        <p> Visit Our Instagram </p>
        <FaInstagram size={22} />
      </button>
    </div>
  );
}
