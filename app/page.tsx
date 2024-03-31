"use client";

import { myAction } from "./_action";

export default function Page() {
  return (
    <form action={myAction}>
      <input type="submit" />
    </form>
  );
}
