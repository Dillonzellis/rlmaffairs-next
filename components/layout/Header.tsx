import Image from "next/image";

// TODO: make logo quality

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-center gap-8">
          <li>Venue</li>
          <li>Catering</li>
          <li>
            <Image
              src="/rlmaff-logo-green.png"
              alt="RLM Logo"
              height={123}
              width={124}
            />
          </li>
          <li>Florals</li>
          <li>Our Story</li>
        </ul>
      </nav>
    </header>
  );
};
