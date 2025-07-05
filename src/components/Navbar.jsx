import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { ThemeToggle } from "./ThemeToggle";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       )}
//     >
//       <div className="container flex items-center justify-between relative">
//         {/* Logo */}
//         <a
//           className="text-xl font-bold text-primary flex items-center"
//           href="#hero"
//         >
//           <span className="relative z-10">Portfolio</span>
//         </a>

//         {/* Desktop nav */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Theme toggle & menu for small screen */}
//         <div className="flex items-center space-x-4 md:hidden z-50">
//           <ThemeToggle />
//           <button
//             onClick={() => setIsMenuOpen((prev) => !prev)}
//             className="p-2 text-foreground"
//             aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Theme Toggle on large screen */}
//         <div className="hidden md:flex absolute right-10 top-4 z-50">
//           <ThemeToggle />
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
