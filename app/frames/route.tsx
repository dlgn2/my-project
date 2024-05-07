import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `You clicked ${ctx.searchParams.value}`
          : "Click a button below"}
      </span>
    ),
    buttons: [
      <Button key="yes" action="post" target={{ query: { value: "Yes" } }}>
        Yes
      </Button>,
      <Button key="no" action="post" target={{ query: { value: "No" } }}>
        No
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
