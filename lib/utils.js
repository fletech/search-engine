// export const FORM_CLASSES = {
//   label: "text-black font-light md:text-md text-sm",
//   input_textarea_primary: `primary w-full bg-white text-HL_brown border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
//   input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
// };

export const DATA = {
  navigation: {
    back: {
      content: "<back",
    },
    clear: {
      content: "Clear",
    },
  },
  steps: {
    step1: {
      heading: "What are you looking for?",
      entry: true,
      options: ["hardware", "subscription"],
      prevStep: "step1",
      hardware: {
        content: "Hardware",
        nextStep: "step2_hardware",
      },
      subscription: {
        content: "Subscription",
        nextStep: "step2_subscription",
      },
    },
    step2_hardware: {
      heading: "Which hardware?",
      options: ["telephone", "other_hardware"],
      prevStep: "step1",
      telephone: {
        content: "Telephone",
        nextStep: "step3_telephone",
      },
      other_hardware: {
        content: "Other hardware",
        nextStep: "step3_other_hardware",
      },
    },
    step2_subscription: {
      heading: "Which subscription?",
      options: ["mobile_broadband_plan", "mobile_plan"],
      prevStep: "step1",
      mobile_broadband_plan: {
        content: "Mobile Broadband Plan",
        nextStep: "filter",
      },
      mobile_plan: {
        content: "Mobile Plan",
        nextStep: "filter",
      },
    },
    step3_telephone: {
      heading: "Do you know your next telephone?",
      options: ["select_phone", "help_me_choose"],
      prevStep: "step2_hardware",
      select_phone: {
        content: "Select phone",
        nextStep: "filter",
      },
      help_me_choose: {
        content: "Help me choose phone / tablet",
        nextStep: "filter",
      },
    },
    step3_other_hardware: {
      heading: "Router o tablet?",
      options: ["router", "tablet"],
      prevStep: "step2_hardware",
      router: {
        content: "Router",
        nextStep: "filtering",
      },
      tablet: {
        content: "Tablet",
        nextStep: "filtering",
      },
    },
  },
};
