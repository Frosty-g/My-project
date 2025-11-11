import CountUp from "react-countup";

const Stats = () => {
    return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 md:-bottom-20 w-[90%] md:w-[70%] bg-gray/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg py-6 px-4 flex flex-col md:flex-row justify-around items-center text-center text-white z-30">
    <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
        <CountUp start={0} end={1200} duration={2} />+
        </h3>
        <p className="text-sm md:text-base text-orange-500">People Served</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30" />

        <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
        <CountUp start={0} end={35} duration={2} />+
        </h3>
        <p className="text-sm md:text-base text-orange-500">Destinations</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30" />

        <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
            <CountUp start={0} end={540} duration={2} />+
        </h3>
        <p className="text-sm md:text-base text-orange-500">Trips Organized</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30" />

        <div className="flex-1 px-4">
        <h3 className="text-3xl font-bold text-orange-400">
        <CountUp start={0} end={7} duration={2} /> Years
        </h3>
        <p className="text-sm md:text-base text-orange-500">Experience</p>
        </div>
    </div>
    );
};

export default Stats;
