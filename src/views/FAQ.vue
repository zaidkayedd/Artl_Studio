<template>
  <div class="flex items-center justify-center flex-col gap-[5rem]">
    <div
      class="gridContainer w-full h-full max-w-[1500px] flex items-center justify-center flex-col gap-[20rem] translate-y-[-7rem] sm:translate-y-0"
    >
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center flex-col gap-10">
          <div class="flex items-center justify-center flex-col">
            <span
              class="text-[20px] sm:text-[30px] lg:text-[50px] text-white font-[700] font-Onset flex items-center justify-center gap-2 sm:gap-4"
            >
              Artl Studio
              <div
                class="flex items-center justify-center w-[90px] sm:w-[135px] lg:w-[228px] h-[35px] sm:h-[45px] lg:h-[69px] bg-[#686EDA80] font-[700]"
              >
                Answers
              </div>
              FAQ about
            </span>
            <span
              class="text-[20px] sm:text-[30px] xl:text-[50px] text-white font-[700] font-Onset"
            >
              IT Service delivery
            </span>
          </div>
          <div class="hidden sm:flex items-center justify-center flex-col">
            <span
              class="text-[7px] sm:text-[12px] lg:text-[16px] xl:text-[20px] text-white font-[500] font-Onset"
              >Welcome to our FAQ page. If you are curious about Artl Studio’s background,
              processes, services, or approaches,</span
            >
            <span
              class="text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[20px] text-white font-[500] font-Onset"
              >you are in the right place</span
            >
          </div>
          <div class="flex sm:hidden items-center justify-center flex-col">
            <span
              class="text-[10px] lg:text-[16px] xl:text-[20px] text-white font-[500] font-Onset"
              >Welcome to our FAQ page. If you are curious about Artl Studio’s background,
              </span
            >
            <span
              class="text-[10px] lg:text-[16px] xl:text-[20px] text-white font-[500] font-Onset"
              >processes, services, or approaches, you are in the right place</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center flex-col gap-8 mt-4 md:mt-20 sm:mt-32">
      <span class="text-[20px] sm:text-[30px] lg:text-[50px] text-white font-[700] font-Onset"
        >Our Frequently Asked Questions List</span
      >
      <div class="faq-container w-full max-w-[1419px]">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item w-full"
          @click="toggleAnswer(index)"
        >
          <div
            class="faq-question flex items-center justify-between w-[350px] sm:w-[600px] lg:w-[1000px] 2xl:w-[1419px] border-b-[0.25px] border-b-[ #FFFFFF80] p-4"
          >
            <div class="cursor-pointer text-[12px] sm:text-[20px] font-Onset font-[700] text-white">
              {{ faq.question }}
            </div>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.05348 7.99807C7.22693 7.98421 7.39123 7.90578 7.52013 7.7753L13.7422 1.51613C13.8181 1.43979 13.8799 1.34747 13.924 1.24444C13.968 1.1414 13.9935 1.02968 13.9989 0.915652C14.0043 0.801621 13.9896 0.687512 13.9556 0.579842C13.9215 0.472172 13.8689 0.373049 13.8006 0.288135C13.7322 0.203221 13.6496 0.134178 13.5575 0.084949C13.4653 0.0357199 13.3653 0.00726875 13.2633 0.00122048C13.1613 -0.00482778 13.0592 0.0116452 12.9629 0.0496988C12.8665 0.0877523 12.7779 0.146641 12.7019 0.223002L6.99999 5.96057L1.2981 0.223002C1.22214 0.146641 1.13347 0.0877518 1.03715 0.0496982C0.940822 0.0116447 0.838736 -0.00482832 0.736715 0.00121994C0.634695 0.00726819 0.534734 0.0357193 0.442552 0.0849484C0.350369 0.134178 0.267755 0.203221 0.199447 0.288135C0.131138 0.373049 0.0784616 0.472171 0.0444278 0.579841C0.0103931 0.687511 -0.0043259 0.80162 0.00109669 0.915652C0.00651927 1.02968 0.031989 1.1414 0.0760421 1.24443C0.120096 1.34747 0.181877 1.43979 0.257853 1.51613L6.47988 7.7753C6.55724 7.85353 6.64789 7.91356 6.74643 7.95184C6.84497 7.99011 6.94939 8.00583 7.05348 7.99807Z"
                fill="white"
              />
            </svg>
          </div>

          <div
            v-if="faq.showAnswer"
            class="faq-answer w-[350px] sm:w-[600px] lg:w-full h-[140px] py-2 px-4 lg:p-6 text-[12px] sm:text-[16px] lg:text-[22px] font-Onset font-[500] text-white"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'How long have you been in business?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'What types of customers do you serve?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'How can I book a meeting with a specialist?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'How do you sign NDAs? Can you use my preferred NDA template?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'Can you join our project at any stage?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'Can you take over the project from a different IT vendor?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'Do you sign an SLA?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: "What happens if there's a breach or a security incident?",
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'What services do you provide?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'Where are you located? Do you offer on-site services?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
        },
        {
          question: 'What is your contingency plan for unexpected challenges or delays?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
        {
          question: 'How does the project onboarding usually look like?',
          answer:
            'We start with understanding your requirements and creating a comprehensive project plan, assigning a dedicated project manager (if needed), integrating with your development processes and tools, and establishing a communication plan with regular updates and shared dashboards for transparency and alignment.',
          showAnswer: false,
        },
      ],
    }
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer
    },
  },
}
</script>

<style scoped>
.faq-question:active {
  background-color: #686eda;
}

.faq-answer {
  position: relative;
}
.faq-answer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(21, 243, 175, 0.14) 0%, rgba(104, 110, 218, 0.4) 100%);

  opacity: 40%;

  border-radius: 4px;
}
</style>
