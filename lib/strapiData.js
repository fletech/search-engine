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
        nextStep: "filter",
      },
      tablet: {
        content: "Tablet",
        nextStep: "filter",
      },
    },
  },
  filters: {
    heading: "filters",
    action: "call_api",
  },
  results: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ],
};
