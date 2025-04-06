import SwipeImage from "./components/SwipeImage";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <div className="mt-5">
        <div className="flex flex-row justify-between w-full">
          <SwipeImage />
        </div>
        
      </div>
    </div>
  );
}
