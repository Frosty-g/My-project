const Newsletter = () => {
    return (
    <section className="py-20 bg-gray-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-4xl font-bold mb-4">
            Join Our Newsletter
        </h2>
        <p className="mb-8 text-lg">
            Subscribe now and get the latest travel deals and packages directly to your inbox!
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white"
            />
            <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
            Subscribe
            </button>
        </form>

        <p className="mt-4 text-sm opacity-80">
            We respect your privacy. Unsubscribe at any time.
        </p>
        </div>
    </section>
    );
};

export default Newsletter;