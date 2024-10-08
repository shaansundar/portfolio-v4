import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { Cross1Icon, EyeOpenIcon } from "@radix-ui/react-icons";

const ToastComponent = () => {
  const [open, setOpen] = React.useState(true);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="flex flex-col gap-4 items-start relative rounded-xl bg-themeBlue-2 text-themeBlue-11 p-4 shadow-xl [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="flex items-center justify-between w-full [grid-area:_title]">
          <div className="flex text-themeBlue-6 items-center gap-2">
            <EyeOpenIcon className="size-6 font-bold" />
            <h2 className="font-bold text-lg">Optical Illusion</h2>{" "}
          </div>
          <Toast.Close>
            <Cross1Icon className="size-4 text-themeBlue-6" />
          </Toast.Close>
        </Toast.Title>
        <Toast.Description asChild>
          <p className="text-themeBlue-11 text-sm">
            Focus on the crosshair and click "Pause" You may notice the text
            appears to continue moving slowly
          </p>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="fixed top-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
};

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date?: any) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export default ToastComponent;
