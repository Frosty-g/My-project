import Slider from "react-slick";

const featuresData = [
    { title: "Easy Booking", image: "/src/assets/feature1.jpg", desc: "Book trips in seconds" },
    { title: "24/7 Support", image: "/src/assets/feature2.jpg", desc: "We are always here" },
    { title: "Custom Trips", image: "/src/assets/feature3.jpg", desc: "Tailored experiences" },
    { title: "Best Prices", image: "/src/assets/feature4.jpg", desc: "Affordable adventures" },
];

const Features = () => {
    const settings = {
        dots: true,
        infinite: true, 
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 2, 
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        responsive: [
        {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
        },
        {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
        },
        {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
        },
    ],
    };

    return (
    <section className="w-full py-9 bg-gray-700" id="features">
        <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 mt-1 ml-4">
            Our Features
        </h2>
        <p className="text-white flex flex-col text-center md:text-center md:w-1/3 py-(-1)">Our features include easy booking, 24/7 support, custom trips, and best prices</p>

        <div className="w-full md:w 2/3 mt-4 md:mt-0 max-w-2xl mx-auto md:ml-95">
        <Slider {...settings}>
            {featuresData.map ((feature, index) => (
            <div key={index} className="px-1 md:px-2">
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center max-w-md mx-auto">
                
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-56 md:h-60 object-cover"/>

                <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md p-4">
                    <h3 className="text-xl font-bold text-orange-500 mb-1">{feature.title}</h3>
                    <p className="text-orange-500 text-sm">{feature.desc}</p>
                </div>
                </div>
            </div>
            ))}
        </Slider>
        </div>
        </div>
    </section>
    );
};

export default Features;
