<template>
  <div class="flex items-center justify-center flex-col gap-[5rem]">
    <div
      class="gridContainer w-full h-full max-w-[1500px] flex items-center justify-center flex-col gap-[20rem]"
    >
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center flex-col gap-10">
          <div class="flex items-center justify-center flex-col">
            <span
              class="text-[12px] sm:text-[20px] lg:text-[30px] 2xl:text-[50px] xl:text-[40px] text-white font-[700] font-Onset flex items-center justify-center  gap-1  lg:gap-4"
            >
              Our
              <div
                class="flex items-center justify-center w-[80px] sm:w-[135px] lg:w-[220px] 2xl:w-[330px] xl:w-[270px] h-[20px] sm:h-[30px] lg:h-[49px] 2xl:h-[69px] xl:h-[59px] bg-[#686EDA80] font-[700]"
              >
                pricing model
              </div>
              is designed to be transparent and flexible,
            </span>
            <span
              class="text-[12px] sm:text-[20px] lg:text-[30px] 2xl:text-[50px] xl:text-[40px] text-white font-[700] font-Onset"
            >
              ensuring you get the best value for your investment at every
            </span>
            <span
              class="text-[12px] sm:text-[20px] lg:text-[30px] 2xl:text-[50px] xl:text-[40px] text-white font-[700] font-Onset"
            >
              stage of your project
            </span>
          </div>
          <div class="hidden sm:flex items-center justify-center flex-col">
            <span
              class="text-[6px] sm:text-[9px] lg:text-[13px] 2xl:text-[20px] xl:text-[16px] text-white font-[500] font-Onset"
            >
              At Artl Studio, our pricing model is thoughtfully designed to be transparent and
              flexible. By offering tailored solutions
            </span>
            <span
              class="text-[6px] sm:text-[9px] lg:text-[13px] 2xl:text-[20px] xl:text-[16px] text-white font-[500] font-Onset"
            >
              and clear cost structures, we ensure you receive maximum value, aligning perfectly
              with your project needs and budget.
            </span>
          </div>
          <div class="flex sm:hidden items-center justify-center flex-col">
            <span
              class="text-[9px] lg:text-[13px] 2xl:text-[20px] xl:text-[16px] text-white font-[500] font-Onset"
            >
              At Artl Studio, our pricing model is thoughtfully designed to be transparent and flexible.
          
            </span>
            <span    class="text-[9px] lg:text-[13px] 2xl:text-[20px] xl:text-[16px] text-white font-[500] font-Onset">     By offering tailored solutions and clear cost structures, we ensure you receive</span>
            <span
              class="text-[9px] lg:text-[13px] 2xl:text-[20px] xl:text-[16px] text-white font-[500] font-Onset"
            >
             maximum value,
            aligning perfectly
              with your project needs and budget.
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center flex-col gap-8 mt-60 sm:mt-96">
      <span class="text-[14px] sm:text-[30px] lg:text-[50px] text-white font-[700] font-Onset"
        >What services do you need?</span
      >
      <span class="text-[14px] sm:text-[17px] lg:text-[22px] text-white font-[500] font-Onset"
        >Select what you need from our services.</span
      >
      <div class="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-4">
        <button
          v-for="service in services"
          :key="service.id"
          :class="[
            'box w-[300px] sm:w-[450px] h-[100px] flex items-center justify-center flex-col gap-4',
            { 'bg-selected': selectedServices.includes(service.name) },
          ]"
          @click="toggleService(service.name)"
        >
          <span class="text-white font-[800] font-Onset text-[20px] sm:text-[26px]">{{
            service.name
          }}</span>
        </button>
      </div>
    </div>

    <div class="flex items-center justify-center flex-col gap-8 mt-20">
      <div class="flex items-center justify-center">
        <span class="text-[14px] sm:text-[30px] lg:text-[50px] text-white font-[700] font-Onset"
          >Do you have a certain budget?</span
        >
        <span
          class="text-[7px] sm:text-[10px] lg:text-[14px] font-Onset font-[500] text-white opacity-50"
          >(Optional)</span
        >
      </div>
      <span class="text-[12px] sm:text-[15px] lg:text-[22px] text-white font-[500] font-Onset"
        >Select what suits your budget more from our pricing options</span
      >
      <div class="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-4">
        <button
          v-for="budget in budgets"
          :key="budget.id"
          :class="[
            'box w-[300px] sm:w-[450px] h-[100px] flex items-center justify-center flex-col gap-4',
            { 'bg-selected': selectedBudget === budget.range },
          ]"
          @click="selectBudget(budget.range)"
        >
          <span class="text-white font-[800] font-Onset text-[20px] sm:text-[26px]">{{
            budget.range
          }}</span>
        </button>
      </div>
    </div>

    <div class="flex items-center justify-center flex-col gap-16 mt-16">
      <div class="flex items-center justify-center flex-col lg:flex-row gap-12">
        <div class="flex items-center justify-center flex-col gap-16">
          <div class="flex items-start justify-center flex-col gap-2">
            <span class="text-[26px] font-Onset font-[700] text-white">Name:</span>
            <div
              class="input w-[300px] sm:w-[400px] 2xl:w-[673px] h-[70px] flex items-center justify-center px-2 2xl:px-0"
            >
              <input
                type="text"
                v-model="name"
                class="input w-[280px] sm:w-[640px] h-[60px] bg-transparent outline-none font-Onset text-[26px] font-[500]"
                placeholder="Your Name"
              />
            </div>
            <span v-if="!name && submitted" class="text-red-500">This input is required</span>
          </div>
          <div class="flex items-start justify-center flex-col gap-2">
            <span class="text-[26px] font-Onset font-[700] text-white">Phone Number:</span>
            <div
              class="input w-[300px] sm:w-[400px] 2xl:w-[673px] h-[70px] flex items-center justify-center px-2 2xl:px-0"
            >
              <input
                type="text"
                v-model="phone"
                @input="formatPhoneNumber"
                class="input w-[280px] sm:w-[640px] h-[60px] bg-transparent outline-none font-Onset text-[26px] font-[500]"
                placeholder="Your Phone Number"
              />
            </div>
            <span v-if="!phone && submitted" class="text-red-500">This input is required</span>
          </div>
          <div class="flex items-start justify-center flex-col gap-2">
            <span class="text-[26px] font-Onset font-[700] text-white">Email:</span>
            <div
              class="input w-[300px] sm:w-[400px] 2xl:w-[673px] h-[70px] flex items-center justify-center px-2 2xl:px-0"
            >
              <input
                type="email"
                v-model="email"
                class="input w-[280px] sm:w-[640px] h-[60px] bg-transparent outline-none font-Onset text-[26px] font-[500]"
                placeholder="Your Email"
              />
            </div>
            <span v-if="!email && submitted" class="text-red-500">This input is required</span>
          </div>
        </div>
        <div class="flex items-start justify-center flex-col gap-2">
          <div class="flex items-center justify-center gap-2">
            <span class="text-[20px] sm:text-[26px] font-[700] font-Onset text-white"
              >Message:</span
            >
            <span class="text-[10px] sm:text-[14px] font-[500] font-Onset text-white opacity-50"
              >(Optional)</span
            >
          </div>
          <div
            class="textArea flex items-center justify-center h-[285px] w-[300px] sm:w-[400px] 2xl:w-[673px] px-2 2xl:px-0"
          >
            <textarea
              class="w-[280px] sm:w-[640px] h-[255px] bg-transparent z-10 outline-none text-[20px] sm:text-[26px] font-Onset font-[500]"
              placeholder="Your request/message..."
            ></textarea>
          </div>
          <button
            @click="submitForm"
            class="w-[300px] sm:w-[400px] 2xl:w-[673px] h-[70px] rounded-[4px] border-[1px] border-[#ffffff] bg-[#7177EC] flex items-center justify-center text-[26px] font-Onset font-[700] text-white mt-[4.2rem]"
          >
            Submit
          </button>
        </div>
      </div>
      <span
        class="text-[7px] sm:text-[10px] md:text-[15px] 2xl:text-[22px] lg:text-[18px] font-Onset font-[500] text-white"
      >
        You can expect a response from us within 1-2 hours or by the close of the next business day.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      submitted: false,
      selectedServices: [],
      selectedBudget: null,
      services: [
        { id: 1, name: 'Website Development' },
        { id: 2, name: 'E-Commerce' },
        { id: 3, name: 'App Development' },
        { id: 4, name: 'UI/UX Design' },
        { id: 5, name: 'CMS' },
        { id: 6, name: 'Logo Design & Branding' },
        { id: 7, name: 'SEO' },
        { id: 8, name: 'Consultation' },
        { id: 9, name: 'Full Service' },
      ],
      budgets: [
        { id: 1, range: 'Less than $2,000' },
        { id: 2, range: '$2,000 - $5,000' },
        { id: 3, range: '$5,000 - $10,000' },
        { id: 4, range: '$10,000 - $30,000' },
        { id: 5, range: 'More than $30,000' },
      ],
    }
  },
  methods: {
    toggleService(serviceName) {
      const index = this.selectedServices.indexOf(serviceName)
      if (index > -1) {
        this.selectedServices.splice(index, 1) // Remove if already selected
      } else {
        this.selectedServices.push(serviceName) // Add if not selected
      }
    },
    selectBudget(budgetRange) {
      this.selectedBudget = budgetRange // Set selected budget
    },
    formatPhoneNumber(event) {
      const input = event.target.value
      this.phone = input.replace(/[^0-9+]/g, '')
    },
    submitForm() {
      this.submitted = true // Set submitted to true to show error messages
      if (this.name && this.phone && this.email) {
        console.log('Form submitted:', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          services: this.selectedServices,
          budget: this.selectedBudget,
        })
        // Reset form
        this.name = ''
        this.phone = ''
        this.email = ''
        this.selectedServices = []
        this.selectedBudget = null
        this.submitted = false // Reset submitted state
      }
    },
  },
}
</script>

<style scoped>
.box {
  position: relative;
}
.box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(21, 243, 175, 0.14) 0%, rgba(104, 110, 218, 0.4) 100%);
  opacity: 40%;
  border: 1px solid #fff;
  border-radius: 4px;
}
.box:active {
  background: #7177ec;
  opacity: 100%;
  border: 1px solid #fff;
  border-radius: 4px;
}
.bg-selected {
  background: #7177ec; /* Change background for selected items */
}
.text-red-500 {
  color: red;
}

.letsTalkBox {
  position: relative;
  background-image: url(../assets/imgs/Home/Vector.svg);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
}
.input {
  position: relative;
}
.input::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #fff;
  border-radius: 4px;
  background: linear-gradient(180deg, rgba(21, 243, 175, 0.14) 0%, rgba(104, 110, 218, 0.4) 100%);
  opacity: 40%;
}
.textArea {
  position: relative;
}
.textArea::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #fff;
  border-radius: 4px;
  background: linear-gradient(180deg, rgba(21, 243, 175, 0.14) 0%, rgba(104, 110, 218, 0.4) 100%);
  opacity: 40%;
}
</style>
