<template>
    <nav class="sticky top-0 drop-shadow-md z-20">
        <div class="bg-blue-secondary py-1.5 flex items-center justify-center">
            <RouterLink to="/" class="w-[350px] md:w-[27%]">
                <img src="logo.png" alt="logo">
            </RouterLink>
        </div>

        <div class="bg-gray-light py-2.5">
            <ul class="text-lg hidden uppercase lg:flex lg:items-center lg:justify-center lg:space-x-32">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Academics</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Students</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Ecn Radio</RouterLink>
                </li>
                <li>
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
                menubar: false
            }
        },


        methods: {
            toogleMenubar() {
                this.menubar = !this.menubar;
            }
        }
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