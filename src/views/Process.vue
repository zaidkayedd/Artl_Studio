<template>
  <div class="flex items-center justify-center flex-col gap-[5rem]">
    <div
      class="gridContainer w-full h-full max-w-[1500px] flex items-center justify-center flex-col gap-[20rem]"
    >
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center flex-col gap-10">
          <div class="flex items-center justify-center flex-col">
            <span
              class="text-[60px] text-white font-[700] font-Onset flex items-center justify-center gap-4"
            >
              Our
              <div
                class="flex items-center justify-center w-[230px] h-[69px] bg-[#686EDA80] font-[700]"
              >
                process
              </div>
              is designed to ensure clarity
            </span>
            <span class="text-[60px] text-white font-[700] font-Onset">
              and efficiency to you at every step.
            </span>
          </div>
          <div class="flex items-center justify-center flex-col">
            <span class="text-[20px] text-white font-[500] font-Onset"
              >At Artl Studio, our process is thoughtfully crafted to ensure clarity and efficiency
              at every step. By focusing on seamless communication
            </span>
            <span class="text-[20px] text-white font-[500] font-Onset"
              >and streamlined workflows, we deliver a hassle-free experience that aligns with your
              goals and guarantees exceptional results.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center flex-col gap-8 mt-96">
      <span class="text-[50px] text-white font-[700] font-Onset"
        >Our Simple and Fast Workflow for Customer Onboarding</span
      >

      <div class="grid grid-cols-1 gap-4">
        <div class="box w-[1419px] h-[200px] flex items-start justify-center flex-col p-20 gap-4">
          <div class="flex items-center justify-center gap-2">
            <img src="../assets/imgs/Process/First.png" />
            <span class="font-[600] font-Onset text-white text-[25px]">Send Us a request</span>
          </div>
          <span class="text-white font-[500] font-Onset text-[20px]"
            >Our email or any contact button on our website. Our average response time may vary from
            1­–2 hours to 1 business day, depending on the queue.</span
          >
        </div>
        <div class="box w-[1419px] h-[200px] flex items-start justify-center flex-col p-20 gap-4">
          <div class="flex items-center justify-center gap-2">
            <img src="../assets/imgs/Process/Second.png" />
            <span class="font-[600] font-Onset text-white text-[25px]"
              >Schedule an Introductory Call</span
            >
          </div>
          <span class="text-white font-[500] font-Onset text-[20px]"
            >We need the call to dive into your situation, and we do care to make the most of this
            first conversation. We don't listen passively but ask questions to elicit nonobvious
            pains and detect more value creation opportunities you can leverage.</span
          >
        </div>
        <div class="box w-[1419px] h-[200px] flex items-start justify-center flex-col p-20 gap-4">
          <div class="flex items-center justify-center gap-2">
            <img src="../assets/imgs/Process/Third.png" />
            <span class="font-[600] font-Onset text-white text-[25px]">Sign an NDA</span>
          </div>
          <span class="text-white font-[500] font-Onset text-[20px]"
            >We create trustful relationships by legally protecting your confidential business
            information. Depending on your legal requirements, we can sign an NDA before the
            introductory call or only in case we sign a service contract.</span
          >
        </div>
        <div class="box w-[1419px] h-[200px] flex items-start justify-center flex-col p-20 gap-4">
          <div class="flex items-center justify-center gap-2">
            <img src="../assets/imgs/Process/Fourth.png" />
            <span class="font-[600] font-Onset text-white text-[25px]">Get a Proposal</span>
          </div>
          <span class="text-white font-[500] font-Onset text-[20px]"
            >A proposal is free of charge, and it will give you full understanding of the service
            scope or the solution we offer.
          </span>
        </div>
        <div class="box w-[1419px] h-[200px] flex items-start justify-center flex-col p-20 gap-4">
          <div class="flex items-center justify-center gap-2">
            <img src="../assets/imgs/Process/Fifth.png" />
            <span class="font-[600] font-Onset text-white text-[25px]"
              >Sign a Service Contract and Start</span
            >
          </div>
          <span class="text-white font-[500] font-Onset text-[20px]"
            >We legally fix our mutual obligations and rights. For continuous services, we also sign
            a service level agreement (SLA) that defines the scope of provided service and the
            metrics to assess its efficiency.</span
          >
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center flex-col gap-4 mt-28">
      <span class="text-[50px] font-Onset font-[700] text-white"
        >Take your First Step to your Success</span
      >
      <span class="text-[22px] font-Onset font-[500] text-white"
        >Once you've completed the form, our manager will send you an email with the information
        within the next few hours.</span
      >
      <div
        class="letsTalkBox w-full max-w-[1150px] 2xl:max-w-[1418px] h-[642px] flex items-center justify-center px-[3rem] gap-[5rem] 2xl:gap-[7rem]"
      >
        <div class="flex flex-col items-start justify-center w-[1500px] z-50">
          <span class="font-Onset font-[800] text-white text-[64px]">Let’s Talk</span>
          <span class="font-Onset font-[500] text-white text-[20px]"
            >Have some big idea or brand to develop and need help?<br />
            Then reach out we'd love to hear about your project<br />
            and provide help</span
          >
        </div>
        <div class="flex flex-col items-start justify-center gap-10 w-full z-50">
          <div class="flex flex-col items-start justify-center w-full">
            <span class="font-Onset font-[500] text-[14px] text-white">Name</span>
            <input
              v-model="name"
              class="input font-Onset font-[500] text-[14px] text-white w-full max-w-[563px] h-[46px] border-[0.5px] rounded-[4px] border-[#FFFFFF80] bg-transparent px-[1rem] outline-none"
              placeholder="Type your name..."
            />
            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
          </div>
          <div class="flex flex-col items-start justify-center w-full">
            <span class="font-Onset font-[500] text-[14px] text-white">Email</span>
            <input
              v-model="email"
              class="input font-Onset font-[500] text-[14px] text-white w-full max-w-[563px] h-[46px] border-[0.5px] rounded-[4px] border-[#FFFFFF80] bg-transparent px-[1rem] outline-none"
              placeholder="Type your email..."
            />
            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
          </div>
          <div class="flex flex-col w-full">
            <span class="font-Onset font-[500] text-[14px] text-white">Message</span>
            <textarea
              v-model="message"
              class="input font-Onset font-[500] text-[14px] text-white bg-transparent border-[0.5px] rounded-[4px] border-[#FFFFFF80] w-full max-w-[563px] h-[165px] px-[1rem] py-[1rem] outline-none"
              placeholder="Type your Request / Message..."
            ></textarea>
            <span v-if="errors.message" class="text-red-500">{{ errors.message }}</span>
          </div>
          <button
            @click="handleSubmit"
            class="flex items-center justify-center w-full max-w-[563px] h-[46px] rounded-[4px] bg-[#7177EC] font-Onset font-[600] text-white text-[20px]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

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
.smallBox {
  position: relative;
}
.smallBox::before {
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

.letsTalkBox {
  position: relative;
  background-image: url(../assets/imgs/Home/Vector.svg);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
}
.letsTalkBox::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border: 1px solid #fff;
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    rgba(21, 243, 175, 0.2) 0%,
    rgba(104, 110, 218, 0.4) 44.5%,
    rgba(104, 110, 218, 0.4) 100%
  );
  opacity: 40%;
}
</style>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: '',
      },
    }
  },

  methods: {
    handleSubmit() {
      // Reset errors
      this.errors.name = ''
      this.errors.email = ''
      this.errors.message = ''

      // Validate inputs
      let isValid = true

      if (!this.name) {
        this.errors.name = 'This input is required'
        isValid = false
      }

      if (!this.email) {
        this.errors.email = 'This input is required'
        isValid = false
      }

      if (!this.message) {
        this.errors.message = 'This input is required'
        isValid = false
      }

      if (isValid) {
        // Handle successful submission (e.g., send data to server)
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          message: this.message,
        })
      }
    },
  },
}
</script>
