import Slider from "react-slick";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
    const clients = [
    {
        name: "John Mwangi",
        role: "Nairobi, Kenya",
        img: "/src/assets/p3.jpg",
        message:
        "The trip was perfectly organized. Amazing customer service and smooth booking process.",
    },
    {
        name: "Sarah Kimani",
        role: "Mombasa, Kenya",
        img: "/src/assets/p8.jpg",
        message:
        "Best travel experience ever! Affordable packages and great destinations.",
    },
    {
        name: "Mark Otieno",
        role: "Kisumu, Kenya",
        img: "/src/assets/p5.jpg",
        message:
        "I loved how professional and friendly the team was. I’ll definitely book again!",
    },
    ];

    const NextArrow = ({ onClick }) => (
    <button
        className="absolute -right-6 top-1/2 transform -translate-y-1/2 
        bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
        onClick={onClick}
    >
        <FaArrowRight />
    </button>
    );

    const PrevArrow = ({ onClick }) => (
    <button
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 
        bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
        onClick={onClick}
    >
        <FaArrowLeft />
    </button>
    );

    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    };

    return (
    <section className="py-20 bg-gray-50 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
            <Slider {...settings}>
            {clients.map((person, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-lg relative">
                
                <FaQuoteLeft className="text-orange-600 text-3xl mb-4" />

                <p className="text-gray-700 mb-6">{person.message}</p>

                <div className="flex items-center gap-4">
                    <img
                    src={person.img}
                    alt={person.name}
                    className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                    <h3 className="font-semibold text-gray-900">{person.name}</h3>
                    <p className="text-blue-600 text-sm">{person.role}</p>
                    </div>
                </div>
                </div>
            ))}
            </Slider>
        </div>

        <div className="flex justify-center md:justify-end">
            <img
            src="/src/assets/p1.jpg"
            alt="Happy clients"
            className="rounded-2xl w-full max-w-md shadow-lg"
            />
        </div>

        </div>
    </section>
    );
};

export default Testimonials;
