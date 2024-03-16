import Image from "next/image";
import { Navbar } from "./components/NavBar";
import { Section } from "./components/Section";
import { CsvSection } from "./components/CsvSection";
import { FilterSection } from "./components/FilterSection";
import ChartSection from "./components/ChartSection";

export default function Home() {
  return (
    <main>
      <Section>
        <div className="grid grid-cols-12 gap-3 grid-flow-row">
          <div className="col-span-12  md:col-span-8  order-3 md:order-1">
            <CsvSection />
          </div>
          <div className=" col-span-12  md:col-span-4 order-2">
            <FilterSection />
          </div>
          <div className="col-span-12 order-1 md:order-3">
          <ChartSection />
          </div>
        </div>
        
      </Section>

    </main>
  );
}
