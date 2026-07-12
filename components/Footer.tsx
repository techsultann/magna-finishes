import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-primer py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/logo.jpg"
              alt="Magna Finishes Global Limited logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-sm tracking-tight text-charcoal">MAGNA FINISHES GLOBAL LIMITED</p>
              <p className="mt-1 max-w-xs text-xs text-charcoal/50">
                Architectural &amp; industrial paint, manufactured in Lagos since 2010.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:flex sm:gap-16">
            <div>
              <p className="eyebrow text-charcoal/40">Explore</p>
              <ul className="mt-3 space-y-2 text-charcoal/70">
                <li><a href="#services" className="hover:text-signal-red">Services</a></li>
                <li><a href="#results" className="hover:text-signal-red">Results</a></li>
                <li><a href="#reviews" className="hover:text-signal-red">Reviews</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-charcoal/40">Contact</p>
              <ul className="mt-3 space-y-2 text-charcoal/70">
                <li>55, Fagbeyiro Abayomi Street</li>
                <li>Alakuko, Lagos</li>
                <li>
                  <a href="mailto:magnafinishesglobal@gmail.com" className="hover:text-signal-red">
                    magnafinishesglobal@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-charcoal/10 pt-6 text-xs text-charcoal/40">
          © {year} Magna Finishes Global Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}