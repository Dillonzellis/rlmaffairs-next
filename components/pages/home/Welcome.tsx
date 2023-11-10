import Image from "next/image";

export const Welcome = () => {
  return (
    <section className="grid grid-cols-2 max-w-[1200px] mx-auto">
      <div>
        <h1>
          Welcome to <span className="text-brandingGold-400">RLM Affairs</span>
        </h1>
        <div className="italic">
          Where love and celebration come together beautifully.
        </div>
        <hr />
        <p>
          Step into the world of RLM Affairs, from intimate celebrations to
          lavish receptions, our dedicated team crafts bespoke experiences,
          ensuring each moment is as unique as the celebration. Offering a
          curated suite of services from gourmet catering, exquisite florals,
          meticulous event planning, to creating magical receptions.
        </p>
      </div>
      <div>
        <Image src="/logo-gold.png" alt="" height={384} width={384} />
      </div>
    </section>
  );
};
