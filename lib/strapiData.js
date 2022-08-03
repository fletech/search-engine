export const DATA_CONTENT = {
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
        next: { step: "step2_hardware", filter: false },
      },
      subscription: {
        content: "Subscription",
        next: { step: "step2_subscription", filter: false },
      },
    },
    step2_hardware: {
      heading: "Which hardware?",
      options: ["telephone", "other_hardware"],
      back_to: "step1",
      telephone: {
        content: "Telephone",
        next: { step: "step3_telephone", filter: false },
      },
      other_hardware: {
        content: "Other hardware",
        next: { step: "step3_other_hardware", filter: false },
      },
    },
    step2_subscription: {
      heading: "Which subscription?",
      options: ["mobile_broadband_plan", "mobile_plan"],
      back_to: "step1",
      mobile_broadband_plan: {
        content: "Mobile Broadband Plan",
        next: { filter: true },
        filter_type: "mobile_broadband_subscription",
      },
      mobile_plan: {
        content: "Mobile Plan",
        next: { filter: true },
        filter_type: "mobile_subscription",
      },
    },
    step3_telephone: {
      heading: "Do you know your next telephone?",
      options: ["select_phone", "help_me_choose"],
      back_to: "step2_hardware",
      select_phone: {
        content: "Select phone",
        next: { filter: true },
        filter_type: "select_phone",
      },
      help_me_choose: {
        content: "Help me choose phone / tablet",
        next: { filter: true },
        filter_type: "select_phone_assisted",
      },
    },
    step3_other_hardware: {
      heading: "Router o tablet?",
      options: ["router", "tablet"],
      back_to: "step2_hardware",
      router: {
        content: "Router",
        next: { filter: true },
        filter_type: "router",
      },
      tablet: {
        content: "Tablet",
        next: { filter: true },
        filter_type: "select_tablet_assisted",
      },
    },
  },
  filter: {
    heading: "Choose the best option to you",
    cta: "Search",
    model: {
      data_amount: {
        label: "Data",
        reference_unit: "GB",
        options: ["10", "20", "40", "60", "80", "100", "200"],
        default: "80",
      },
      talk_minutes: {
        label: "Talk Minutes",
        reference_unit: "MIN",
        options: ["100", "200", "300", "400", "600", "800", "Unlimited"],
        default: "Unlimited",
      },
      carriers: {
        label: "Carrier",
        options: ["Any", "Telia", "Telmore", "3DK", "YouSee"],
        default: "Telia",
      },
      services: {
        label: "Service",
        options: [
          "Any",
          "Netflix",
          "Disney",
          "Amazon Prime",
          "HBO",
          "Netflix",
          "Disney",
          "Amazon Prime",
          "HBO",
        ],
        default: "Any",
      },
      network_5G: {
        label: "5G",
        default: false,
      },
      roaming: {
        label: "EU / World",
        default: true,
      },
    },
  },
  // results: [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "quis ut nam facilis et officia qui",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "fugiat veniam minus",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: "et porro tempora",
  //     completed: true,
  //   },
  //   {
  //     userId: 1,
  //     id: 5,
  //     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //     completed: false,
  //   },
  // ],
};

export const FILTERS = {
  mobile_broadband_subscription: [
    "data_amount",
    "services",
    "carriers",
    "network_5G",
  ],
  mobile_subscription: [
    "data_amount",
    "services",
    "talk_minutes",
    "network_5G",
    "roaming",
  ],
  select_phone: [
    "data_amount",
    "services",
    "carriers",
    "network_5G",
    "roaming",
  ],
  select_phone_assisted: ["data_amount", "services", "carriers", "network_5G"],
  select_tablet_assisted: ["data_amount", "services", "carriers", "network_5G"],
  router: ["data_amount", "services", "carriers", "network_5G"],
};
