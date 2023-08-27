<template>
    <Navigation />

    <Splide :tag="section" :options="herOption" :has-track="false">
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
                    <div class="bg-blue-tertiary text-white rounded-l-md md:w-[50%] mt-80 py-5 px-6 bg-opacity-70">
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

    <section class="py-20">
        <div class="container px-4 lg:px-3 lg:flex lg:space-x-10">
            <div class="w-full lg:w-[50%]">
                <h3 class="font-semibold uppercase text-sm">Brief History About</h3>
                <p class="text-blue-dark text-3xl uppercase font-bold">Kenya Institute Of Mass Communication (KIMC)</p>
                <p class="my-4 leading-6 text-sm lg:leading-loose">
                    The Kenya Institute of Mass Communication (KIMC) was established in 1961 and was named as the then Voice of Kenya Training School.

                    Its main purpose was to train electronic engineering and technicians for the then, Kenya Broadcasting Service (KBS), that was later rebranded in 1962 as the Kenya Broadcasting Corporation (KBC). KBC was then nationalized in 1964, and changed its brand to Voice of Kenya (VOK).
                    Nationalization occasioned the departure of expatriates who worked at the broadcaster, creating an urgent need for qualified manpower to fill the vacant positions. In 1965, the new Voice of Kenya acquired a grant to start what became to be known as the Voice of Kenya Training School.
                </p>

                <div>
                    <RouterLink to="/about/history" class="text-blue-secondary flex items-center space-x-3 hover:text-blue-primary">
                        <span>Read More</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </RouterLink>
                </div>
            </div>
            <div class="group w-full mt-5 relative lg:mt-0 lg:w-[50%] overflow-hidden">
                <img src="about-2.JPG" alt="about-image" class="rounded drop-shadow-md transition-all group-hover:scale-110">
                <div class="absolute inset-0 bg-black rounded bg-opacity-40"></div>
            </div>
        </div>
    </section>

    <section class="bg-white py-20">
        <div class="container px-3">
            <div class="text-center w-full flex items-center justify-center">
                <div class="md:w-[70%]">
                    <h2 class="text-3xl uppercase font-bold">Popular <span class="text-blue-secondary">Courses</span></h2>
                    <p class="mt-3 text-sm text-gray-500">
                        We offer a range of courses that cover topics such as journalism, broadcasting, digital media, photography, and more. Whether you are a beginner or an experienced professional, you will find a course that suits your needs and goals.
                    </p>
                </div>
            </div>

            <Splide :tag="div" :options="courseOption" class="flex items-center my-10 md:my-16">
                <SplideSlide class="group bg-gray-light drop-shadow-md rounded transition overflow-hidden hover:shadow-lg animate__delay-3s animate__fadeInUp animate__delay-3s">
                    <div>
                        <div class="relative overflow-hidden">
                            <img src="course/film.JPG" alt="film-1" class="rounded-t transition-all group-hover:scale-125">
                            <div class="absolute inset-0 bg-black bg-opacity-40 rounded-t"></div>
                        </div>
                        <div class="p-5">
                            <h4 class="uppercase text-xl font-bold tracking-[1px]">Diploma in Journalism</h4>

                            <div class="my-3 space-y-1.5">
                                <p class="text-sm">
                                    <span class="font-semibold">Training Department: </span>
                                    <span>Information Training Department</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Examiner: </span>
                                    <span>Kenya Institute Of Mass Communication</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Period: </span>
                                    <span>Three Years</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Level: </span>
                                    <span>Diploma</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Intakes: </span>
                                    <span>January</span>
                                </p>
                            </div>

                            <hr class="my-1 border-gray-300">
                            <div class="mt-5">
                                <a href="#" class="bg-blue-secondary py-2 text-sm px-3 text-gray-light font-semibold group-hover:bg-blue-tertiary">Apply</a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide class="group bg-gray-light drop-shadow-md rounded transition-all overflow-hidden hover:shadow-lg animate__delay-3s animate__fadeInUp animate__delay-3s">
                    <div>
                        <div class="relative overflow-hidden">
                            <img src="course/TV-Radio.JPG" alt="film-1" class="rounded-t transition-all group-hover:scale-125">
                            <div class="absolute inset-0 bg-black bg-opacity-40 rounded-t"></div>
                        </div>
                        <div class="p-5">
                            <h4 class="uppercase text-xl font-bold tracking-[1px]">Diploma in TV Programmes Production</h4>

                            <div class="my-3 space-y-1.5">
                                <p class="text-sm">
                                    <span class="font-semibold">Training Department: </span>
                                    <span>TV/Radio Programme Production</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Examiner: </span>
                                    <span>Kenya Institute Of Mass Communication</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Period: </span>
                                    <span>Three Years</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Level: </span>
                                    <span>Diploma</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Intakes: </span>
                                    <span>January</span>
                                </p>
                            </div>

                            <hr class="my-1 border-gray-300">
                            <div class="mt-5">
                                <a href="#" class="bg-blue-secondary py-2 text-sm px-3 text-gray-light font-semibold group-hover:bg-blue-tertiary">Apply</a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide class="group bg-gray-light drop-shadow-md rounded transition-all overflow-hidden hover:shadow-lg animate__delay-3s animate__fadeInUp animate__delay-3s">
                    <div>
                        <div class="relative overflow-hidden">
                            <img src="course/video.jpg" alt="film-1" class="rounded-t transition-all group-hover:scale-125">
                            <div class="absolute inset-0 bg-black bg-opacity-40 rounded-t"></div>
                        </div>
                        <div class="p-5">
                            <h4 class="uppercase text-xl font-bold tracking-[1px]">Diploma in Film/ Video Program Production</h4>

                            <div class="my-3 space-y-1.5">
                                <p class="text-sm">
                                    <span class="font-semibold">Training Department: </span>
                                    <span>Information</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Examiner: </span>
                                    <span>Kenya Institute Of Mass Communication</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Period: </span>
                                    <span>Three Years</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Level: </span>
                                    <span>Diploma</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Intakes: </span>
                                    <span>January</span>
                                </p>
                            </div>

                            <hr class="my-1 border-gray-300">
                            <div class="mt-5">
                                <a href="#" class="bg-blue-secondary py-2 text-sm px-3 text-gray-light font-semibold group-hover:bg-blue-tertiary">Apply</a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide class="group bg-gray-light drop-shadow-md rounded transition-all overflow-hidden hover:shadow-lg animate__delay-3s animate__fadeInUp animate__delay-3s">
                    <div>
                        <div class="relative overflow-hidden">
                            <img src="course/media-tech.JPG" alt="film-1" class="rounded-t transition-all group-hover:scale-125">
                            <div class="absolute inset-0 bg-black bg-opacity-40 rounded-t"></div>
                        </div>
                        <div class="p-5">
                            <h4 class="uppercase text-xl font-bold tracking-[1px]">Diploma in Media Technology</h4>

                            <div class="my-3 space-y-1.5">
                                <p class="text-sm">
                                    <span class="font-semibold">Training Department: </span>
                                    <span>Engineering Training Department</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Examiner: </span>
                                    <span>Kenya Institute Of Mass Communication</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Period: </span>
                                    <span>Three Years</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Level: </span>
                                    <span>Diploma</span>
                                </p>

                                <p class="text-sm">
                                    <span class="font-semibold">Intakes: </span>
                                    <span>January</span>
                                </p>
                            </div>

                            <hr class="my-1 border-gray-300">
                            <div class="mt-5">
                                <a href="#" class="bg-blue-secondary py-2 text-sm px-3 text-gray-light font-semibold group-hover:bg-blue-tertiary">Apply</a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
            <div class="text-center">
                <a href="#" class="bg-blue-secondary text-gray-light px-4 py-2.5 hover:bg-blue-tertiary">View More</a>
            </div>
        </div>
    </section>

    <section class="bg-fixed" style="background-image: url('funfact.webp'); background-size: cover; background-position: center center;">
        <div class="w-full bg-blue-secondary py-10 bg-opacity-50">
            <div class="container py-5">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="w-full flex items-center justify-center">
                        <div class="text-center text-gray-light">
                            <span class=" text-3xl">
                                <i class="fa-solid fa-chalkboard-user"></i>
                            </span>
                            <p class="font-semibold text-2xl">Lecturers</p>
                            <p class="font-bold">0100+</p>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-center">
                        <div class="text-center text-gray-light">
                            <span class=" text-3xl">
                                <i class="fa-solid fa-users"></i>
                            </span>
                            <p class="font-semibold text-2xl">Students</p>
                            <p class="font-bold">1000+</p>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-center">
                        <div class="text-center text-gray-light">
                            <span class="material-symbols-outlined text-3xl">
                                library_books
                            </span>
                            <p class="font-semibold text-2xl">Courses</p>
                            <p class="font-bold">060+</p>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-center">
                        <div class="text-center text-gray-light">
                            <span class=" text-3xl">
                                <i class="fa-solid fa-school"></i>
                            </span>
                            <p class="font-semibold text-2xl">Departments</p>
                            <p class="font-bold">006+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="container px-5">
            <div class="flex justify-center w-full">
                <div class="text-center w-[70%]">
                    <h3 class="uppercase font-bold text-3xl"><span class="text-blue-secondary">Student</span> Life</h3>
                    <p class="mt-3 text-sm text-gray-500">
                        We believe that education goes beyond classrooms and textbooks. Our "Student Life" section is a testament to our commitment to providing a holistic and enriching experience for every student. Here, you'll discover a world of opportunities, activities, and connections that will shape not just your academic journey, but your personal growth as well.
                    </p>
                </div>
            </div>

            <div class="mt-16 bg-blue-dark rounded">
                <Splide :tag="div" :options="studentOption" :has-track="false">
                    <SplideTrack>
                        <SplideSlide class="md:flex">
                            <div class="md:w-[50%] relative">
                                <img src="student-life/student.jpg" alt="student" class="rounded-l min-h-full">
                                <div class="absolute inset-0 bg-black bg-opacity-20 rounded-l"></div>
                            </div>
                            <div class="md:w-[50%] p-10">
                                <div class="bg-gray-light p-5 bg-opacity-80 rounded">
                                    <h3 class="text-2xl font-semibold text-blue-dark">Campus Life</h3>
                                    <p class="mt-2 leading-6 text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim consectetur. Possimus exercitationem, asperiores voluptatibus, aperiam, suscipit assumenda nostrum beatae fuga quibusdam libero nam quos. Perferendis accusamus minus aliquam. Molestiae facere cum saepe, iusto consequatur magni consequuntur unde modi, maxime suscipit magnam culpa voluptatum amet dolore ab corporis eos corrupti.
                                    </p>
                                </div>

                                <div class="mt-10 ">
                                    <RouterLink to="/" class="bg-blue-secondary px-4 py-2.5 text-white rounded hover:bg-blue-primary">Read More</RouterLink>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide class="flex flex-col-reverse md:flex-row">
                            <div class="md:w-[50%] p-10">
                                <div class="bg-gray-light p-5 bg-opacity-80 rounded">
                                    <h3 class="text-2xl font-semibold text-blue-dark">Student Club and Societies</h3>
                                    <p class="mt-2 leading-6 text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates accusamus vel facere debitisea illo nobis similique adipisci soluta quos et dolor nam eligendi, quaerat sequi at totam repellat fugiat. Non praesentium enim veritatis,obcaecati cupiditate corporis, magni possimus quas vel excepturi sit ut. Labore obcaecati odio cupiditate incidunt.</p>
                                </div>

                                <div class="mt-10">
                                    <RouterLink to="/" class="bg-blue-secondary px-4 py-2.5 text-white hover:bg-blue-primary">Read More</RouterLink>
                                </div>
                            </div>
                            <div class="md:w-[50%] relative">
                                <img src="student-life/student-1.jpg" alt="student" class="rounded-r min-h-full">
                                <div class="absolute inset-0 bg-black bg-opacity-30 rounded-r"></div>
                            </div>
                        </SplideSlide>
                        <SplideSlide class="md:flex">
                            <div class="md:w-[50%] relative">
                                <img src="student-life/student-2.jpg" alt="student" class="rounded-l min-h-full">
                                <div class="absolute inset-0 bg-black bg-opacity-20 rounded-l"></div>
                            </div>
                            <div class="md:w-[50%] p-10">
                                <div class="bg-gray-light p-5 bg-opacity-80 rounded">
                                    <h3 class="text-2xl font-semibold text-blue-dark">Student Acomodation</h3>
                                    <p class="mt-2 leading-6 text-sm font-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim consectetur. Possimus exercitationem, asperiores voluptatibus, aperiam, suscipit assumenda nostrum beatae fuga quibusdam libero nam quos. Perferendis accusamus minus aliquam. Molestiae facere cum saepe, iusto consequatur magni consequuntur unde modi, maxime suscipit magnam culpa voluptatum amet dolore ab corporis eos corrupti.
                                    </p>
                                </div>

                                <div class="mt-10 ">
                                    <RouterLink to="/" class="bg-blue-secondary px-4 py-2.5 text-white rounded hover:bg-blue-primary">Read More</RouterLink>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide class="flex flex-col-reverse md:flex-row">
                            <div class="md:w-[50%] p-10">
                                <div class="bg-gray-light p-5 bg-opacity-80 rounded">
                                    <h3 class="text-2xl font-semibold text-blue-dark">Student Club and Societies</h3>
                                    <p class="mt-2 leading-6 text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates accusamus vel facere debitisea illo nobis similique adipisci soluta quos et dolor nam eligendi, quaerat sequi at totam repellat fugiat. Non praesentium enim veritatis,obcaecati cupiditate corporis, magni possimus quas vel excepturi sit ut. Labore obcaecati odio cupiditate incidunt.</p>
                                </div>

                                <div class="mt-10">
                                    <RouterLink to="/" class="bg-blue-secondary px-4 py-2.5 text-white hover:bg-blue-primary">Read More</RouterLink>
                                </div>
                            </div>
                            <div class="md:w-[50%] relative">
                                <img src="student-life/student-3.jpg" alt="student" class="rounded-r min-h-full">
                                <div class="absolute inset-0 bg-black bg-opacity-30 rounded-r"></div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>

                    <!-- <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev">Prev</button>
                        <button class="splide__arrow splide__arrow--next">Next</button>
                    </div> -->
                </Splide>
            </div>
        </div>
    </section>

    <section class="bg-white py-16">
        <div class="container px-5">
            <div class="flex justify-between items-center">
                <h3 class="uppercase font-bold text-2xl md:text-3xl"><span class="text-blue-secondary">Events</span> @ KIMC</h3>
                <div>
                    <a href="#" class="border border-blue-secondary px-2 py-1.5 md:px-4 md:py-2.5 text-blue-secondary hover:bg-blue-secondary hover:text-white">All Events</a>
                </div>
            </div>


            <div class="mt-16 flex flex-col md:flex-row items-center justify-center md:space-x-10">
                <div class="md:w-[50%]">
                    <div class="group relative block bg-black rounded">
                        <img
                            alt="event"
                            src="events/event-1.jpg"
                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity rounded group-hover:opacity-50"
                        />

                        <div class="relative p-4 h-full sm:p-6 lg:p-8">
                            <p class="text-sm font-medium uppercase tracking-widest text-blue-secondary">
                                KIMC, Graduation square
                            </p>

                            <p class="text-xl font-bold text-white uppercase sm:text-2xl">Cultural Week</p>

                            <div class="mt-32 sm:mt-48 lg:mt-64">
                                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p class="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                        reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5 md:w-[50%] space-y-10 md:mt-0">
                    <div class="w-full md:flex md:space-x-5">
                        <div class="md:w-[35%] relative rounded">
                            <img src="events/event-2.jpg" alt="event-2" class="rounded min-h-full">
                            <div class="absolute inset-0 bg-black bg-opacity-30 rounded"></div>
                        </div>
                        <div class="md:w-[60%]">
                            <h6 class="text-blue-secondary text-xs uppercase font-semibold">Graduation Square</h6>
                            <a href="#" class="text-xl font-semibold uppercase my-1.5">Kenya Mass Power House Show</a>
                            <p class="font-light text-sm text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae? </p>
                        </div>
                    </div>
                    <div class="w-full md:flex md:space-x-5">
                        <div class="md:w-[35%] relative rounded">
                            <img src="events/event-3.jpg" alt="event-3" class="rounded min-h-full">
                            <div class="absolute inset-0 bg-black bg-opacity-30 rounded"></div>
                        </div>
                        <div class="md:w-[60%]">
                                <h6 class="text-blue-secondary text-xs uppercase font-semibold">Graduation Square</h6>
                            <a href="#" class="text-xl font-semibold uppercase my-1.5">Another Event Taking Place</a>
                            <p class="font-light text-sm text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae? </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="container px-3">
            <div class="text-center">
                <h3 class="text-3xl uppercase font-bold">KIMC <span class="text-blue-secondary">News</span></h3>
                <p class="mt-3 text-sm text-gray-500">Stay up-to-date on the latest news and events at the Kenya Institute Of Mass communication</p>
            </div>


            <div class="w-full my-16">
                <Splide :tag="div" :options="newsOption">
                    <SplideSlide class="bg-white drop-shadow-lg">
                        <div class="relative">
                            <img src="news/news-1.jpg" alt="news-1">
                            <div class="absolute inset-0 bg-blue-dark bg-opacity-30"></div>
                        </div>
                        <div class="p-5">
                            <a href="#" class="uppercase text-xl font-semibold hover:text-blue-secondary">The Kenya Mass Cultural Week Comes to an end</a>
                            <p class="mt-3 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quo!</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide class="bg-white drop-shadow-lg">
                        <div class="relative">
                            <img src="news/news-2.jpg" alt="news-1">
                            <div class="absolute inset-0 bg-blue-dark bg-opacity-30"></div>
                        </div>
                        <div class="p-5">
                            <a href="#" class="uppercase text-xl font-semibold hover:text-blue-secondary">Kenya Mass, Such Football Giants with this as their 'Facilities'</a>
                            <p class="mt-3 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quo!</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide class="bg-white drop-shadow-lg">
                        <div class="relative">
                            <img src="news/news-3.jpg" alt="news-1">
                            <div class="absolute inset-0 bg-blue-dark bg-opacity-30"></div>
                        </div>
                        <div class="p-5">
                            <a href="#" class="uppercase text-xl font-semibold hover:text-blue-secondary">What a beautiful Girl, I had a crush for her ass</a>
                            <p class="mt-3 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quo!</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide class="bg-white drop-shadow-lg">
                        <div class="relative">
                            <img src="news/news-4.jpg" alt="news-1">
                            <div class="absolute inset-0 bg-blue-dark bg-opacity-30"></div>
                        </div>
                        <div class="p-5">
                            <a href="#" class="uppercase text-xl font-semibold hover:text-blue-secondary">The Kenya Mass Small Mess Erra comes to an end, Now they have a big mess on their hands</a>
                            <p class="mt-3 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quo!</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide class="bg-white drop-shadow-lg">
                        <div class="relative">
                            <img src="news/news-5.jpg" alt="news-1">
                            <div class="absolute inset-0 bg-blue-dark bg-opacity-30"></div>
                        </div>
                        <div class="p-5">
                            <a href="#" class="uppercase text-xl font-semibold hover:text-blue-secondary">The Kenya Mass POWER house demolishes other acting houses</a>
                            <p class="mt-3 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quo!</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide class="bg-white drop-shadow-lg">
                        <div class="relative">
                            <img src="news/news-6.jpg" alt="news-1">
                            <div class="absolute inset-0 bg-blue-dark bg-opacity-30"></div>
                        </div>
                        <div class="p-5">
                            <a href="#" class="uppercase text-xl font-semibold hover:text-blue-secondary">The Kenya Mass Students learning how to use a camera</a>
                            <p class="mt-3 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quo!</p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>

            <div class="text-center mt-5">
                <a href="#" class="bg-blue-secondary px-4 py-2.5 text-white border border-blue-secondary hover:bg-transparent hover:text-blue-secondary">
                    More News
                </a>
            </div>
        </div>
    </section>

    <section class="bg-fixed" style="background-image: url('background.jpg'); background-size: cover;">
        <div class="py-16 bg-blue-dark bg-opacity-80">
            <div class="text-center">
                <h3 class="font-bold uppercase text-white text-3xl">KIMC <span class="text-blue-secondary">Expirience</span></h3>
            </div>
            <div class="container px-3 lg:px-0 mt-10 mb-5">
                <div class="lg:flex lg:items-center lg:space-x-10">
                    <div class="lg:w-[50%] bg-gray-light drop-shadow-md">
                        <Tabs />
                    </div>
                    <div class="mt-5 lg:w-[50%] lg:mt-0">
                        <iframe class="w-full h-[550px]" width="560" height="315" src="https://www.youtube-nocookie.com/embed/0s-DPsfACdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-white">
        <div class="container">
            <div class="text-center">
                <h3 class="text-center text-3xl font-bold uppercase text-blue-secondary">Collaborations</h3>
            </div>

            <div class="flex justify-center mt-16 px-5">
                <ul class="flex items-center justify-center md:space-x-10">
                    <li class="md:w-[85%]">
                        <a href="#">
                            <img src="collaboration/UON-LOGO.png" class="w-[30%]">
                        </a>
                    </li>
                    <li class="w-[65%]">
                        <a href="#">
                            <img src="collaboration/22-catholic-university-of-eastern-africa.png" class="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <Footer />
</template>


<script>
    import Navigation from '../components/Navigation.vue';
    import Footer from '../components/Footer.vue';
    import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    import Tabs from '../components/Tabs.vue';
    export default {
        components: {
            Navigation,
            Splide,
            SplideSlide,
            SplideTrack,
            Footer,
            Tabs
        },

        setup() {
            const herOption = {
                rewind: true,
                rewindSpeed: 1000,
                autoplay: true,
                interval: 10000,
                pauseOnHover: false,
                pauseOnFocus: false
            };

            const courseOption = {
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: 25,
                speed: 400,
                autoplay: true,
                interval: 15000,
                pauseOnHover: false,
                pauseOnFocus: false,
                breakpoints: {
                    640: {
                        perPage: 1
                    },
                    1024: {
                        perPage: 2
                    }
                }
            };

            const studentOption = {
                rewind:true,
                autoplay: true,
                interval: 20000, 
                pauseOnFocus: false,
                pauseOnHover: false,
                arrows: false
            };

            const newsOption = {
                rewind: true,
                perPage: 4,
                perMove: 2,
                gap: 20,
                autoplay: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                interval: 5000,
                pagination: false,
                breakpoints: {
                640: {
                    perPage: 1
                },
                1024: {
                    perPage: 2
                }
            }
            };

            return {
                herOption, courseOption, studentOption, newsOption
            }
        }
    }
</script>
