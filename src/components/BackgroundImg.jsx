import { bgImgStyle } from "../constants";

export default function BackgroundImage({ url, styles, children }) {
  return (
    <div
      className={`${bgImgStyle} ${styles}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      {children}
    </div>
  );
}
