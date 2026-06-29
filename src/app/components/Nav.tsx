import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex h-16 ">
      <ul className="flex items-center">
        <li className="flex-1">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/module1">Module 1</Link>
        </li>
        <li>
          <Link href="/module2">Module 2</Link>
        </li>
        <li>
          <Link href="/module3">Module 3</Link>
        </li>
        <li>
          <Link href="/module4">Module 4</Link>
        </li>
      </ul>
    </div>
  );
}
