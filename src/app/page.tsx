"use client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";


export default function Home() {
  const trpc = useTRPC();

  const { data } = useQuery(trpc.hello.queryOptions({ text: "vinay kumar" }))

  trpc.hello.queryOptions({ text: "Hello!" });
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {JSON.stringify(data?.greeting)}
    </div>
  );
}
