import { NavBar } from "@/components/ui/tubelight-navbar";

export function Header() {
  const navItems = [
    { name: "Home", url: "#about", icon: "home" },
    { name: "About", url: "#", icon: "user" },
    { name: "Projects", url: "#", icon: "briefcase" },
    { name: "Resume", url: "#", icon: "file-text" },
  ];

  return <NavBar items={navItems} />;
}
