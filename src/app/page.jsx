import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />

      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader="Our Story" mainHeader="About Us" />
        <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit
            a magni ab sequi incidunt natus nulla, eos, vitae officiis nemo!
            Esse, eos eaque mollitia provident ex obcaecati iste neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            voluptatum sed, laboriosam sequi repellendus inventore dicta
            suscipit cum ipsa, autem error magni tenetur nulla repellat illum
            harum, molestiae ut quis enim iusto impedit ea voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium recusandae earum reprehenderit quisquam sunt autem
            perferendis accusantium excepturi quis? Modi.
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact Us" />
        <div className="mt-8">
          <a
            href="tel:+46738154623"
            className="text-4xl  underline text-gray-500"
          >
            +46 738 154 623
          </a>
        </div>
      </section>
    </>
  );
}
