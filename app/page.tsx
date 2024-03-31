"use client";

import { useFormState } from "react-dom";
import { myAction } from "./_action";

export default function Page() {
  const [_, formStateDispatch] = useFormState(myAction, null);
  return (
    <>
      <div>
        <h2>
          <code>form action=myAction</code>
        </h2>
        <form action={myAction}>
          <input type="submit" />
        </form>
      </div>
      <div>
        <h2>
          using <code>useFormState()</code>
        </h2>

        <form action={formStateDispatch}>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
