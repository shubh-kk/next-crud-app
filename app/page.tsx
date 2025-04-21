import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex justify-center items-center">
      Todo App
      <Link href={"/signin"} className="text-md border p-2 m-2"> Signin to Todo App </Link>
      <Link href={"/signup"} className="text-md border p-2 m-2">Signup to Todo App </Link>
    </div>
  );
}