<template>
    <Navigation />

    <Splide :tag="section" :options="options" :has-track="false">
        <div class="splide__progress">
            <div class="splide__progress__bar" />
        </div>

        <SplideTrack>
            <SplideSlide class="relative">
                <img src="hero/slide1.jpg" alt="hero-1" class="min-h-[550px]">
                <div class="absolute inset-0 bg-blue-dark bg-opacity-20 flex items-center justify-center">
                    <div class="lg:w-[70%] text-white rounded text-center md:px-0 px-3">
                        <p class="text-4xl md:text-6xl text-lightGray mt-3">
                            <span class="font-bold uppercase tracking-[1px] md:tracking-[2px] leading-5">
                                Kenya Institute Of Mass Communication
                            </span>
                        </p>
                        <p class="uppercase mt-5 text-lg text-lightGray bg-blue-dark bg-opacity-70 py-1 rounded-md">
                            We train tommorow's media practitioners
                        </p>

                        <div class="mt-10 flex items-center justify-center space-x-5">
                            <a href="#" class="bg-blue-secondary text-white px-2 md:px-4 py-2 md:py-3 bg-opacity-70 flex items-center justify-center">
                                <span>Read About</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-5 ml-2">
                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" class="bg-blue-dark text-white px-2 md:px-4 py-2 md:py-3 bg-opacity-80 flex items-center justify-center">
                                <span>View Courses</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide class="relative">
                <img src="hero/slide2.JPG" alt="hero-2" class="min-h-[550px]">
                <div class="absolute inset-0 bg-blue-dark bg-opacity-20 flex items-center">
                    <div class="w-fit text-center text-gray-light mt-80 lg:text-start lg:w-[40%] bg-blue-dark px-6 py-5 bg-opacity-70 rounded-r-md">
                        <p class="uppercase font-semibold text-2xl md:text-3xl tracking-[2px]">
                            2023 September Intake Ongoing
                        </p>
                        <p class="mt-2 text-sm md:text-base text-lightGray font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptas eos dolorem assumenda, corrupti aspernatur.
                        </p>

                        <div class="mt-5 flex items-center space-x-5 justify-center lg:justify-start">
                            <a href="#" class="border-2 border-lightGray px-4 py-2 text-lightGray flex items-center justify-center hover:bg-primary">
                                <span class="font-semibold">Apply</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4 ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                            <a href="#" class="text-lightGray flex items-center justify-center hover:text-primary">
                                <span>View Courses</span>
                                <span class="material-symbols-outlined ml-2">
                                    plagiarism
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide class="relative">
                <img src="hero/slide4.jpg" alt="hero-1" class="min-h-[550px]">
                <div class="absolute inset-0 bg-blue-dark bg-opacity-20 flex items-center justify-end">
                    <div class="bg-blue-secondary text-white rounded-l-md md:w-[50%] mt-80 py-5 px-6 bg-opacity-70">
                        <h2 class="text-2xl md:text-3xl font-semibold uppercase">Senior Management</h2>
                        <p class="mt-2 font-light text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloribus aspernatur dignissimos quaerat eius, nam provident sequi odio tenetur magnam beatae!   Perspiciatis porro cupiditate soluta culpa commodi iusto! In, minima.
                        </p>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide class="relative">
                <img src="hero/slide6.jpg" alt="hero-1" class="min-h-[550px]">
                <div class="absolute inset-0 bg-blue-dark bg-opacity-20"></div>
            </SplideSlide>
        </SplideTrack>
    </Splide>

    <Footer></Footer>
</template>


<script>
    import Navigation from '../components/Navigation.vue';
    import Footer from '../components/Footer.vue';
    import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    export default {
        components: {
            Navigation,
            Splide,
            SplideSlide,
            SplideTrack,
            Footer
        },

        setup() {
            const options = {
                rewind: true,
                rewindSpeed: 1000,
                autoplay: true,
                interval: 10000,
                pauseOnHover: false,
                pauseOnFocus: false
            };
            return {
                options
            }
        }
    }
</script>
