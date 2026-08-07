

export default function ArticleSkeleton() {
    return (
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300 animate-pulse"></div>

            <div className="p-5">
                <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

                <div className="h-4 w-full bg-gray-300 rounded mt-4"></div>

                <div className="h-4 w-5/6 bg-gray-300 rounded mt-2"></div>

                <div className="h-4 w-1/3 bg-gray-300 rounded mt-4"></div>

                <div className="flex justify-between mt-6">
                    <div className="h-4 w-1/4 bg-gray-300 rounded"></div>

                    <div className="h-4 w-1/5 bg-gray-300 rounded"></div>
                </div>
            </div>
        </article>
    )
}
