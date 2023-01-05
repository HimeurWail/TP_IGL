import AnnounceCard from "../Components/AnnounceCard";
const ListAnnonces = () => {
    const Ais = [
        {
          title: "something",
          aiCategory: "location",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghi",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 1,
        },
        {
          title: "something",
          aiCategory: "locationhhhhhhhhh",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghi",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 2,
        },
        {
          title: "something",
          aiCategory: "location",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghikdjrgfkhsbgfksjgg",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 3,
        },
        {
          title: "something",
          aiCategory: "location",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghikdjrgfkhsbgfksjgg",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 4,
        },
      ];
    return (
        <div className=" w-full flex flex-wrap justify-evenely mt-[30px] m-[10px] p-[10px]">

            {Ais.map((Ai, id) => (
              <div className="  flex flex-row w-1/3 mx-auto mb-[30px] " key={Ai.id}>
                <AnnounceCard Ai={Ai}></AnnounceCard>
              </div>
            ))}

        </div>
      );
}

export default ListAnnonces;