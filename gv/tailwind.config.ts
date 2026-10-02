import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { forest: "#2f4a3a", sage: "#9db09f", "sage-d": "#6f8a74", bone: "#f6f5f0", ink: "#1a241e", muted: "#5d6b63", line: "#dfe3da" },
    fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
