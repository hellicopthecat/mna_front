"use client";
import useUser from "@/hooks/useUser";

export default function Home() {
  const {data} = useUser();

  return <div>page of home</div>;
}
