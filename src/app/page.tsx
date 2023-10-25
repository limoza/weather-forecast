import { test } from "./styles/test.css";
import { Ex } from "./Components/Ex";

export default function Home() {
  return (
    <main>
      <div className={test}>something</div>
      <Ex />
    </main>
  );
}
