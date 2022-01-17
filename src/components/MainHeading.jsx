import mainheading from "../styles/components/mainheading.module.css";

export default function MainHeading({ text = "None" }) {
  return <h1 className={mainheading.heading}>{text}</h1>;
}
