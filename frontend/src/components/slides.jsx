import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel"
import { useNavigate } from "react-router-dom"


const Slides = (props) => {
    const {books} = props
    const navigate = useNavigate()
    return (
        <div className="container lg:mx-48 md:mx-20 mx-15">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider
                    className="lg:block hidden"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={books.length - 1}
                    visibleSlides={4}
                    step={1}
                    infinite={true}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                            id="prev"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 1L1 7L7 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div
                                    id="slider"
                                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                                >
                                    {books.map((book, index) => (
                                        <Slide key={index} index={index} className="cursor-pointer" onClick={() => navigate(`/book/${book._id}`)}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img
                                                    src={book.coverImage}
                                                    className="object-cover object-center w-full"
                                                    alt={book.title}
                                                />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                        {book.title}
                                                    </h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                            {book.author}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            id="next"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L7 7L1 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider
                    className="lg:hidden md:block hidden"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={books.length - 1} visibleSlides={2}
                    step={1}
                    infinite={true}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                            id="prev"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 1L1 7L7 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div
                                    id="slider"
                                    className="h-full flex md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                                >
                                    {books.map((book, index) => (
                                        <Slide key={index} index={index} className="cursor-pointer" onClick={() => navigate(`/book/${book._id}`)}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img
                                                    src={book.coverImage}
                                                    className="object-cover object-center w-full"
                                                    alt={book.title}
                                                />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                        {book.title}
                                                    </h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                                            {book.author}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            id="next"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L7 7L1 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile devices */}
                <CarouselProvider
                    className="lg:hidden md:hidden block"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={books.length - 1}
                    visibleSlides={1}
                    step={1}
                    infinite={true}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="absolute z-30 left-0 ml-4 sm:ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                            id="prev"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 1L1 7L7 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div
                                    id="slider"
                                    className="h-full flex sm:gap-4 gap-8 items-center justify-start transition ease-out duration-700"
                                >
                                    {books.map((book, index) => (
                                        <Slide key={index} index={index} className="cursor-pointer" onClick={() => navigate(`/book/${book._id}`)}>
                                            <div className="flex flex-shrink-0 relative w-full">
                                                <img
                                                    src={book.coverImage}
                                                    className="object-cover object-center h-96 rounded-lg shadow-md"
                                                    alt={book.title} />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-4 sm:p-6">
                                                    <h2 className="text-base md:text-xl leading-4 lg:leading-5 text-white font-medium">
                                                        {book.title}
                                                    </h2>
                                                    <div className="flex h-full items-end pb-2">
                                                        <h3 className="text-sm md:text-lg font-normal leading-4 lg:leading-5 text-gray-300">
                                                            {book.author}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="absolute z-30 right-0 mr-4 sm:mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            id="next"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L7 7L1 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Slides