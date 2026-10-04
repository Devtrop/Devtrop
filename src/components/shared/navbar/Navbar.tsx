import { NavbarClient } from "./NavbarClient";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Navbar() {
  const bookACallHref = whatsappUrl(WHATSAPP_MESSAGES.bookACall);

  return (
    <header className="sticky top-0 z-50 w-full">
      <NavbarClient bookACallHref={bookACallHref} />
    </header>
  );
}

export default Navbar;
