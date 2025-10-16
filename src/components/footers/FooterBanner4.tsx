function FooterBanner4() {
  return (
    <footer className="bg-black p-6">
      <div className=" container  text-white mx-[10%]">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Download the Official F1 App
          </h2>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="https://apps.apple.com/gb/app/official-f1-app/id835022598"
              target="_blank"
              rel="noreferrer"
              aria-label="Download on the Apple App Store"
              className="inline-block"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/496/240/non_2x/app-store-logo-icon-software-apple-phone-symbol-white-design-mobile-illustration-with-black-background-free-vector.jpg"
                alt="Apple App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB"
              target="_blank"
              rel="noreferrer"
              aria-label="Get it on Google Play"
              className="inline-block"
            >
              <img
                src="https://i.pinimg.com/1200x/fd/50/d0/fd50d0bd555ebc3a22338de310d226d0.jpg"
                alt="Google Play Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center sm:justify-start gap-4 mb-8 text-gray-700">
          {[
            { href: "/en/racing/2025", label: "Schedule" },
            { href: "/en/drivers", label: "Drivers" },
            { href: "/en/latest", label: "News" },
            { href: "/en/teams", label: "Teams" },
            { href: "/en/page/gaming", label: "Fantasy & Gaming" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="hover:text-red-700 transition"
            >
              {label}
            </a>
          ))}
          <button className="hover:text-red-700 transition">
            Cookie Preferences
          </button>
          <button className="flex items-center hover:text-red-700 transition">
            More{" "}
            <svg
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              className="ml-1"
            >
              <path
                fill="currentColor"
                d="m18 9.4-6 6-6-6L7.4 8l4.6 4.6L16.6 8z"
              />
            </svg>
          </button>
        </nav>

        {/* Separator with F1 logo */}
        <div
          role="separator"
          className="border-t border-gray-400 mb-8 flex items-center justify-center space-x-3"
        >
          <svg
            xmlns="https://avatars.mds.yandex.net/i?id=7696355a8939b3171459a5df287ebdb32b977769-10376972-images-thumbs&n=13"
            viewBox="0 0 64 64"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-700"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M2 30h8l4 8h22l6-10h10v4H42l-4 6H20l-4-6H10l-4-8z" />
            <circle cx="14" cy="42" r="4" />
            <circle cx="38" cy="42" r="4" />
          </svg>
          <span className="text-lg font-bold text-gray-800">Formula 1</span>
        </div>

        {/* Social media links */}
        <div className="flex justify-center sm:justify-start space-x-6 text-gray-600 mb-4">
          <a
            href="https://www.facebook.com/Formula1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/f1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/f1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Formula 1. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterBanner4;
