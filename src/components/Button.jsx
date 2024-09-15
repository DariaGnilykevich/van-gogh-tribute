import { buttonStyle } from "../constants";

export default function Button({ name, onClick, styles }) {
  return (
    <button className={`${buttonStyle} ${styles}`} onClick={onClick}>
      {`${name} >>`}
    </button>
  );
}
