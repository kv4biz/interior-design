import Link from "next/link";

const Logo = () => {
  return (
    <div className="text-3xl md:text-4xl tracking-tighter font-bold font-[family-name:var(--font-russoOne)]">
      <Link href="/" className="text-primary dark:text-primary-foreground">
        INT <span className="text-black dark:text-primary font-normal">D'</span>
        COR
      </Link>
    </div>
  );
};

export default Logo;
