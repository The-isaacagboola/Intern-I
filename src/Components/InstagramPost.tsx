import instaLogo from "../assets/instaLogo.png";
// import verified from "../assets/verified.png";
import dots from "../assets/More Icon.png";
import { MdVerified, MdOutlineFavoriteBorder } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import likedby from "../assets/Oval.png";
import { Post } from "./InstagramSection";
import postStyles from "../styles/componentStyles/instaStyles.module.css";

type InstagramPostProps = {
  post: Post;
};

export default function InstagramPost({ post }: InstagramPostProps) {
  return (
    <div className={postStyles.post}>
      <div className={postStyles.top}>
        <div className={postStyles.box}>
          <img src={instaLogo} alt="instagram logo" />
          <div className={postStyles.titleContainer}>
            <div className={postStyles.titleBar}>
              <h4>Foodieland.</h4>
              <MdVerified size={8} />
            </div>
            <p>Tokyo, Japan</p>
          </div>
        </div>
        <img src={dots} alt="dots" />
      </div>

      <div className={postStyles.mid}>
        <img src={post.image} alt="instagram image" />
        <span>1/3</span>
      </div>

      <div className={postStyles.bottom}>
        <div className={postStyles.first}>
          <div>
            <MdOutlineFavoriteBorder size={17} />
            <FiMessageCircle className={postStyles.rotate} size={17} />
            <BsSend size={17} />
          </div>

          <p>
            <span></span>
            <span></span>
            <span></span>
          </p>

          <CiBookmark size={17} />
        </div>

        <div className={postStyles.second}>
          <img src={likedby} alt="like user dp" />
          <p>
            Liked by <span className={postStyles.bold}>craig_love</span> and{" "}
            <span className={postStyles.bold}>44,686</span> others
          </p>
        </div>

        <div className={postStyles.label}>
          <p>
            <span className={postStyles.bold}>FoodLand. </span>{" "}
            {post.description}
          </p>
        </div>

        <p className={postStyles.date}>{post.date}</p>
      </div>
    </div>
  );
}
