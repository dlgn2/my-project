import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  let responseMessage = "Click a button below to vote:";
  if (ctx.pressedButton) {
    responseMessage = `Thank you for voting ${ctx.searchParams.value}!`;
    // backend api call to store vote
  }

  return {
    image: <span>{responseMessage}</span>,
    buttons: [
      <Button
        key="yes"
        action="post"
        target={{ query: { value: "Yes" } }}
        aria-label="Vote Yes"
      >
        Yes
      </Button>,
      <Button
        key="no"
        action="post"
        target={{ query: { value: "No" } }}
        aria-label="Vote No"
      >
        No
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
