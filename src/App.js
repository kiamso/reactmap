import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import Styles from "./styles.module.css";

export default function App() {
  return (
    <div className={Styles.App}>
      <SVGMap
        map={World}
        className={Styles.SvgMap}
        onLocationFocus={(value) => console.log(value)}
      />
    </div>
  );
}
