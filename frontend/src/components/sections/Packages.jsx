const Packages = () => {
    const packages = [
    { src: "/images/p1.jpg", title: "Maasai Mara Safari", price: "Ksh 30,000" },
    { src: "/images/p2.jpg", title: "Dubai Experience", price: "Ksh 45,000" },
    { src: "/images/p3.jpg", title: "Coastal Getaway", price: "ksh 25,000" },
    { src: "/images/p4.jpg", title: "Diani Luxury Trip", price: "ksh 50,000"},
    { src: "/images/p5.jpg", title: "Tsavo Adventure", price: "ksh 28,000" },
    { src: "/images/p6.jpg", title:"Kilimanjaro Hike", price: "Ksh 40,000" },
    { src: "/images/p7.jpg", title: "Nairobi City Tour", price: "ksh 10,000" },
    { src: "/images/p8.jpg", title: "Mombasa SGR Trip", price: "ksh 15,000" },
    ];

    return (
    <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-10">
            Our Travel Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {packages.map((item, index) => (
            <div 
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
            >

                <img 
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover transition duration-300 group-hover:scale-110"
                />

                <button
                className="absolute bottom-3 right-3 bg-orange-500 text-white w-10 h-10 
                            rounded-full flex items-center justify-center text-2xl 
                            font-bold shadow-md hover:bg-gray-700 transition"
                >
                +
                </button>
                <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                </h3>
                <p className="text-gray-900 font-bold mt-1">
                    {item.price}
                </p>
                </div>
            </div>
            ))}
        </div>

        </div>
    </section>
    );
};

export default Packages;
