// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

// export const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className={cn(
//         "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//         "focus:outlin-hidden"
//       )}
//     >
//       {isDarkMode ? (
//         <Sun className="h-6 w-6 text-yellow-300" />
//       ) : (
//         <Moon className="h-6 w-6 text-blue-900" />
//       )}
//     </button>
//   );
// };



import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Draggable bounds="body">
      <div
        className="fixed z-[9999] top-[70px] right-[20px] md:right-[40px] md:top-[30px]"
        style={{ cursor: "grab", touchAction: "none" }}
      >
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white dark:bg-black border shadow-md"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
          ) : (
            <Moon className="h-6 w-6 text-blue-900" />
          )}
        </button>
      </div>
    </Draggable>
  );
};
