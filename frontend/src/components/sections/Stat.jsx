import CountUp from "react-countup";

const Stats = () => {
    return (
    <div className="hidden md:flex absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg py-6 px-4 justify-around items-center text-center text-white z-20">
        <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
            <CountUp start={0} end={1200} duration={2} />+
        </h3>
        <p className="text-sm md:text-base">People Served</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30" />

        <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
        <CountUp start={0} end={35} duration={2} />+
        </h3>
        <p className="text-sm md:text-base">Destinations</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30" />

        <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
            <CountUp start={0} end={540} duration={2} />+
        </h3>
        <p className="text-sm md:text-base">Trips Organized</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30" />

        <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
        <CountUp start={0} end={7} duration={2} /> Years
        </h3>
        <p className="text-sm md:text-base">Experience</p>
        </div>
    </div>
    );
};

export default Stats;
