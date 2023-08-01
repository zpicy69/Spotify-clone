import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;


const Liked = async () => {
    const songs = await getLikedSongs();
    return (
        <div className="h-full w-full rounded-lg overflow-hidden overflow-y-auto bg-neutral-950">
            <Header>
                <div className="mt-20">
                    <div className="flex flex-col md:flex-row items-center gap-x-5">
                        <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                            <Image src="/images/liked.png" alt="Playlist" className="object-cover" fill/>
                        </div>
                        <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                            <p className="hidden md:block font-semibold text-sm">Playlist</p>
                            <h1 className="text-white text-4xl font-bold lg:text-7xl sm:text-5xl">Liked Songs</h1>
                        </div>
                    </div>
                </div>
            </Header>
            <LikedContent songs={songs} />
        </div>
    );
}
 
export default Liked;