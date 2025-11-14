const AboutUs = () => {
    return (
    <section className="w-full py-12 bg-black flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 p-12">

        <div className="md:w-1/2">
            <img
            src="/images/about.jpg" 
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-64 md:h-80 lg:h-96 object-cover"/>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            About Us
            </h2>
            <ul className="text-white list-disc list-inside space-y-2">
                <p>We are a travel company dedicated to making unforgettable memories for you and your loved ones.</p>
            <li>Create amazing trips and experiences for you and your loved ones around the world</li>
            <li>7+ years helping travelers make unforgettable memories</li>
            <li>Explore the world with ease and make unforgettable memories</li>
            </ul>
        </div>
        </div>
    </section>
    );
};

export default AboutUs;
