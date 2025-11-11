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
        speed: 30,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 3, 
        slidesToScroll: 1,
        arrows: false,
        responsive: [
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
    <section className="w-full py-9 bg-gray-700" id="about">
        <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 mt-1 ml-4">
            Our Features
        </h2>

        <div className="md:w-2/3 ml-100 mt-10">
        <Slider {...settings}>
            {featuresData.map((feature, index) => (
            <div key={index} className="px-4">
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center">
                
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover"/>

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
