import React from "react";
import CountUp from "react-countup";

const Stats = () => {
    return (
    <section className="w-full py-16 flex justify-center bg-white">
        <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="border-2 border-orange-500 rounded-[20px] p-6 shadow-sm">
        <h3 className="text-4xl font-bold text-orange-500">
            <CountUp start={0} end={1200} duration={2} />+
            </h3>
            <p className="text-gray-700">People Served</p>
        </div>

        <div className="border-2 border-orange-500 rounded-[20px] p-6 shadow-sm">
            <h3 className="text-4xl font-bold text-orange-500">
            <CountUp start={0} end={35} duration={2} />+
            </h3>
            <p className="text-gray-700">Destinations</p>
        </div>

        <div className="border-2 border-orange-500 rounded-[20px] p-6 shadow-sm">
            <h3 className="text-4xl font-bold text-orange-500">
            <CountUp start={0} end={540} duration={2} />+
            </h3>
            <p className="text-gray-700">Trips Organized</p>
        </div>

        <div className="border-2 border-orange-500 rounded-[20px] p-6 shadow-sm">
            <h3 className="text-4xl font-bold text-orange-500">
            <CountUp start={0} end={7} duration={2} /> Years
            </h3>
            <p className="text-gray-700">Experience</p>
        </div>

        </div>
    </section>
    );
};

export default Stats;
