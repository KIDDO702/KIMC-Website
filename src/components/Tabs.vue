<template>
    <div class="w-full">
        <div class="w-full flex items-center justify-between overflow-hidden">
            <span class="cursor-pointer px-2 py-3"
            v-for="(tab, index) in tabs" :key="index" 
            @click="selectedTabs = tab" :class="{ activeTab: selectedTabs === tab }">
                {{ tab }}
            </span>
        </div>
        <div class="p-8 bg-white text-sm transition-all h-[500px]">
            <div class="" v-show="selectedTabs === 'MPC'">
                <p>
                    This is a commercial arm of the institute that offers services to external clients in order to generate revenue to support training activities. The services offered by the centre include:
                </p>
                <ul class="list-disc ml-5 mt-3 space-y-1.5">
                    <li class="">
                        <p>Film/ video production services which include: location filming; editing; dubbing.</p>
                    </li>
                    <li class="">
                        <p>Film/ video production services which include: location filming; editing; dubbing.</p>
                    </li>
                    <li class="">
                        <p>Film/ video production services which include: location filming; editing; dubbing.</p>
                    </li>
                </ul>
            </div>
            <div v-show="selectedTabs === 'Adverts/Tenders'">
                <p>Click on the respective advertisement to download</p>
                <ul class="list-disc ml-3 mt-3">
                    <li>
                        <a href="https://1drv.ms/f/s!AsE7oKhI_klTgRyYlUmyJk0IDZ1s?e=IPA2QY" target="_blank" class="hover:text-blue-dark">Click to download tender payments </a>
                    </li>
                </ul>
            </div>
            <div v-show="selectedTabs === 'Vacancies'">
                <p>Click on the link below to view the advert</p>
                <ul class="list-disc ml-3 mt-3">
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/Adverts/CEO_LONG_LIST_AND_SHORT_LIST_FOR_PUBLICATION.pdf" target="_blank" class="hover:text-blue-dark">Click to download the shortlisted Directors </a>
                    </li>
                </ul>
            </div>
            <div v-show="selectedTabs === 'Student E-Reources' ">
                <p>Click on the relevant Item to access it</p>
                <ul class="list-disc ml-3 mt-3 space-y-1.5">
                    <li>
                        <a href="https://1drv.ms/u/s!AsE7oKhI_klTZ4OY4MzJPGi0KK8?e=o9poKv" target="_blank" class="hover:text-blue-dark">KIMC joining Forms </a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/Adverts/May_2023_Intake.pdf" target="_blank" class="hover:text-blue-dark">2023 May Intake Advert</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/E-Resource/PGD.pdf" target="_blank" class="hover:text-blue-dark">KIMC Postgraduate Fee Structure</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/E-Resource/Diploma.pdf" target="_blank" class="hover:text-blue-dark">KIMC Diploma Fee Structure</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/E-Resource/Certificate.pdf" target="_blank" class="hover:text-blue-dark">KIMC Certificate Fee Structure</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/E-Resource/Application1_1.pdf" target="_blank" class="hover:text-blue-dark">KIMC Application Form</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/E-Resource/KIMC_FUND_ADVERT_JAN_19.pdf" target="_blank" class="hover:text-blue-dark">KIMC student fund advert</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images//sampledata/as002046/E-Resource/STUDENTS_COVID-19_GUIDELINES_FOR_2021.pdf" target="_blank" class="hover:text-blue-dark">Student Covid 19 Guidelines</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images//sampledata/as002046/E-Resource/Student_Laptop_specifications.pdf" target="_blank" class="hover:text-blue-dark">Stuent Laptop Specifications</a>
                    </li>
                </ul>
            </div>
            <div v-show="selectedTabs === 'Downloads'">
                <p>Click on the respective document item to download it.</p>
                <ul class="list-disc ml-3 mt-3 space-y-1.5">
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/KIMC-ANTI-CORRUPTION-POLICY-2020-APPROVED.pdf" target="_blank" class="hover:text-blue-dark">KIMC Anti-Corruption Policy </a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/Adverts/KIMC-Strategic-Plan-2018-2022--Submitted-to-Stakeholders-for-Validation-June-28-2019-3.pdf" target="_blank" class="hover:text-blue-dark">KIMC STRATEGIC PLAN FROM 2018 - 2022</a>
                    </li>
                    <li>
                        <a href="https://kimc.ac.ke/images/sampledata/as002046/E-Resource/KIMC_SERVICE_CHARTER_UPDATED.pdf" target="_blank" class="hover:text-blue-dark">KIMC Service Data Revised</a>
                    </li>
                    <li>
                        <a href="https://1drv.ms/u/s!AsE7oKhI_klTejQ2jmzQaaHE6_Y?e=agRw13" target="_blank" class="hover:text-blue-dark">Departmental Service Chapters</a>
                    </li>
                    <li>
                        <a href="https://1drv.ms/u/s!AsE7oKhI_klTfGqaw4BsXl47Zq0?e=2b1Oqu" target="_blank" class="hover:text-blue-dark">Departmental Procedures</a>
                    </li>
                </ul>
            </div>
            <div v-show="selectedTabs === 'Report Corruption'">
                <p class="text-3xl font-bold">Report Corruption</p>
                <small>Engaging in corruption denies opportunities to other people </small>
                <form class="mt-5">
                    <div>
                        <div>
                            <input type="text" id="subject" placeholder="Subject" class="border border-gray-600 p-2 w-full focus:outline focus:outline-blue-secondary">
                        </div>
                        <div class="mt-5">
                            <input type="text" id="subject" placeholder="Description" class="border border-gray-600 p-2 w-full focus:outline focus:outline-blue-secondary">
                        </div>
                        <div class="mt-5">
                            <select name="category" id="category" class="w-full px-4 py-2.5 overflow-scroll">
                                <option>Academic Malpractice</option>
                                <option>Description</option>
                                <option>Procurement</option>
                                <option>Sexual Harrasment</option>
                                <option>Financial Manipulation</option>
                                <option>Policy Violation</option>
                                <option>Conflict Of Interest</option>
                                <option>Assets Missapropriation</option>
                            </select>
                        </div>
                        <div class="mt-5">
                            <label for="file" class="text-xs">Submit an attachment</label>
                            <input type="file" class="block w-full text-sm mt-3 text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-dark hover:file:bg-blue-100"/>
                        </div>
                        <div class="mt-10">
                            <button class="bg-blue-secondary py-2.5 px-4 text-white flex items-center justify-center space-x-2">
                                <span>Submit</span>
                                <span class="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabs',

        data() {
            return {
                tabs: [
                    'MPC',
                    'Adverts/Tenders',
                    'Vacancies',
                    'Student E-Reources',
                    'Downloads',
                    'Report Corruption'
                ],
                selectedTabs: 'MPC'
            }
        }
    }
</script>

<style scoped>
    .activeTab {
        background-color: #31bef4;
        color: #e2e5e6;
    }
</style>