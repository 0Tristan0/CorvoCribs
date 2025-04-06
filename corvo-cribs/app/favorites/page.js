import Image from "next/image";
import ApartmentCard from "../components/ApartmentCard";

export default function Favorites() {
  return (
    <div className="my-10">
        <h1 className="text-3xl font-semibold mx-2">Favorites</h1>
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
    </div>
  );
}
