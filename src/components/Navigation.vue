<template>
    <nav class="sticky top-0 drop-shadow-md z-20">
        <div class="bg-blue-secondary py-1.5 flex items-center justify-center">
            <RouterLink to="/" class="w-[350px] md:w-[27%]">
                <img src="https://kimc.ac.ke/images/sampledata/as002046/LOGO/logo.png" alt="logo">
            </RouterLink>
        </div>

        <div class="bg-gray-light py-3">
            <ul class="text-lg hidden uppercase lg:flex lg:items-center lg:justify-center lg:space-x-32">
                <li class="flex items-center justify-center">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="flex items-center justify-center relative">
                    <a class="cursor-pointer flex items-center" @click="toogleDropdown">
                        <span class="mr-1.5">About Us</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-xs">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </a>
                    <Transition name="menubar">
                        <div class="w-[250px] absolute bg-gray-light top-0 mt-10 flex items-center justify-center" v-show="dropDown">
                            <ul class="divide-y divide-gray-300">
                                <li class="block w-full py-1.5 px-1">
                                    <RouterLink to="/about/history" class="w-full hover:text-blue-dark">History</RouterLink>
                                </li>
                                <li class="block w-full py-1.5 px-1">
                                    <a class="cursor-pointer w-full flex items-center hover:text-blue-dark" @click="toogleMenuDropDown">
                                        <span class="mr-1.5">Management</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-xs">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </a>
                                    <Transition name="menubar">
                                        <div class="w-full bg-gray-light flex items-center justify-center" v-show="menuDropDown">
                                            <ul class="divide-y divide-gray-300">
                                                <li class="block py-1 px-3">
                                                    <RouterLink to="/about/management/KIMC-Council" class="w-full hover:text-blue-dark">KIMC Council</RouterLink>
                                                </li>
                                                <li class="block py-1 px-3">
                                                    <RouterLink to="/about/management/senior-management" class="w-full hover:text-blue-dark">Senior Management</RouterLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </Transition>
                                </li>
                                <li class="block w-full py-1.5 px-1">
                                    <RouterLink to="/about/facilities-&-amenities" class="w-full hover:text-blue-dark">Facilities & Amenities</RouterLink>
                                </li>
                                <!-- <li class="block w-full py-1.5 px-1">
                                    <RouterLink to="/" class="w-full hover:text-blue-dark">Collaboration</RouterLink>
                                </li> -->
                            </ul>
                        </div>
                    </Transition>
                </li>
                <li class="flex items-center justify-center">
                    <RouterLink to="/">Academics</RouterLink>
                </li>
                <li class="flex items-center justify-center">
                    <RouterLink to="/">Students</RouterLink>
                </li>
                <li class="flex items-center justify-center">
                    <RouterLink to="/">Ecn Radio</RouterLink>
                </li>
                <li class="flex items-center justify-center">
                    <RouterLink to="/">Contact</RouterLink>
                </li>
            </ul>

            <button class="lg:hidden border border-blue-dark py-1.5 px-2 ml-3 rounded" @click="toogleMenubar">
                <i class="fa-solid fa-bars text-xl text-blue-dark"></i>
            </button>
        </div>

        <Transition name="menubar">
            <div class="bg-gray-light lg:hidden" v-if="menubar">
                <div class="mx-3">
                    <ul class="py-3 space-y-2.5">
                        <li class="group block py-1.5 bg-white text-blue-dark drop-shadow-md pl-3 rounded">
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li class="group block py-1.5 bg-white text-blue-dark drop-shadow-md pl-3 rounded">
                            <RouterLink to="/">About</RouterLink>
                        </li>
                        <li class="group block py-1.5 bg-white text-blue-dark drop-shadow-md pl-3 rounded">
                            <RouterLink to="/">Academics</RouterLink>
                        </li>
                        <li class="group block py-1.5 bg-white text-blue-dark drop-shadow-md pl-3 rounded">
                            <RouterLink to="/">Students</RouterLink>
                        </li>
                        <li class="group block py-1.5 bg-white text-blue-dark drop-shadow-md pl-3 rounded">
                            <RouterLink to="/">Ecn Radio</RouterLink>
                        </li>
                        <li class="group block py-1.5 bg-white text-blue-dark drop-shadow-md pl-3 rounded">
                            <RouterLink to="/">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Transition>
    </nav>
</template>


<script>
    import { RouterLink } from 'vue-router';
    export default {
        name: 'navigation',

        data() {
            return {
                menubar: false,
                dropDown: false,
                logo: 'logo.png',
                menuDropDown: false
            }
        },


        methods: {
            toogleMenubar() {
                this.menubar = !this.menubar;
            },

            toogleDropdown() {
                this.dropDown = !this.dropDown;
            },

            toogleMenuDropDown () {
                this.menuDropDown = !this.menuDropDown
            },

            handleClickOutside(event) {
                if (this.$el && !this.$el.contains(event.target)) {
                    this.dropDown = false;
                }
            }
        },

        mounted() {
            // Close the dropdown when clicked outside
            window.addEventListener("click", this.handleClickOutside);
        },

        beforeDestroy() {
            window.removeEventListener("click", this.handleClickOutside);
        },
    }
</script>


<style scoped>
    .menubar-enter-active, .menubar-leave-active {
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .menubar-enter-from, .menubar-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
</style>