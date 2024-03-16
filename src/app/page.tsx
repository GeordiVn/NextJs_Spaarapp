import Image from "next/image";
import { Navbar } from "./components/NavBar";
import { Section } from "./components/Section";
import { CsvSection } from "./components/CsvSection";
import { FilterSection } from "./components/FilterSection";

export default function Home() {
  return (
    <main>
      <Section>
        <div className="grid grid-cols-12 gap-3 grid-flow-row">
          <div className="col-span-8">
            <CsvSection />
          </div>
          <div className="col-span-4">
            <FilterSection />
          </div>
        </div>

      </Section>

    </main>
  );
}
