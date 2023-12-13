import { useRouter } from "next/router";
import Navbar from "../components/Layouts/Navbar";
import MobileNavbar from "../components/Layouts/MobileNavbar";
import MobileFooter from "../components/Layouts/MobileFooter";

export default function defaultLayout({ children, user }) {
  const router = useRouter();
  const { pathname } = router;
  if (pathname.indexOf("/m") > -1) {
    return (
      <>
        <MobileNavbar user={user} />
        {children}
        <MobileFooter />
      </>
    );
  } else {
    return (
      <>
        <Navbar user={user} />
        {children}
      </>
    );
  }
}
