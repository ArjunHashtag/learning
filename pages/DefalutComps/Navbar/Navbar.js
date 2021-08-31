import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 py-5 items-center bg-red-500">
      <div>
        <h1 className="text-3xl">OneForAll</h1> {/* company name */}
      </div>
      <div>
        {/* Navbar Links */}
        <Link href="/Link1/Link1">
          <a className="mx-3">link1</a>
        </Link>
        <Link href="/Link2/Link2">
          <a className="mx-3">link2</a>
        </Link>
        <Link href="/Link3/Link3">
          <a className="mx-3" href="">
            link3
          </a>
        </Link>
        <Link href="/Link4/Link4">
          <a className="mx-3" href="">
            link4
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
