"use client";

const WHATSAPP_NUMBER = "2348082316488";
const DEFAULT_MESSAGE = "Hello Magna Finishes, I'd like to ask about your paints.";

export default function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Magna Finishes on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" aria-hidden="true" />
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.23.6 4.32 1.65 6.12L3 29l8.06-2.6a11.9 11.9 0 0 0 4.96 1.08h.01c6.62 0 12-5.38 12-12S22.64 3 16.02 3Zm0 21.7h-.01a9.7 9.7 0 0 1-4.94-1.36l-.35-.21-4.78 1.54 1.56-4.66-.23-.36a9.63 9.63 0 0 1-1.49-5.15c0-5.36 4.37-9.72 9.75-9.72 2.6 0 5.05 1.02 6.89 2.85a9.63 9.63 0 0 1 2.85 6.87c0 5.36-4.37 9.72-9.75 9.72Zm5.34-7.28c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" />
      </svg>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
