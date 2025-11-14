const BestServices = () => {
    return (
    <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Best Services We Offer
            </h2>

            <p className="text-gray-600 mb-6">
            We provide reliable, fast and affordable services designed to make 
            your travel planning smooth and enjoyable.
            </p>

            <ul className="space-y-3">
            <li className="flex items-start gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
                <p className="text-gray-700">Easy & quick booking process</p>
            </li>

            <li className="flex items-start gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
                <p className="text-gray-700">24/7 customer support</p>
            </li>

            <li className="flex items-start gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
                <p className="text-gray-700">Affordable custom travel packages</p>
            </li>

            <li className="flex items-start gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
                <p className="text-gray-700">Best prices guaranteed</p>
            </li>
            </ul>
        </div>

        <div className="flex justify-center">
            <img 
            src="/src/assets/feature1.jpg"
            alt="Best services"
            className="rounded-2xl shadow-lg w-full max-w-md"
        />
        </div>
        </div>
    </section>
    );
};

export default BestServices;
