import Link from "next/link";

const navProperties = [
  { href: "/", text: "Sign up or log in" },
  { href: "/", text: "Account" },
];

export default function HomepageNav() {
  return (
    <ul className="flex items-center">
      {navProperties.map(({ href, text }) => (
        <li className="bg-white border rounded px-8 py-2 ml-2" key={text}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  );
}
