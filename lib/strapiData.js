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
        next: { select_phone: true },
        filter_type: "select_phone",
      },
      help_me_choose: {
        content: "Help me choose phone / tablet",
        next: { help_select_device: true },
        filter_type: "help_select_device",
      },
    },
    step3_other_hardware: {
      heading: "Router o tablet?",
      options: ["router", "tablet"],
      back_to: "step2_hardware",
      tablet: {
        content: "Tablet",
        next: { select_tablet: true },
        filter_type: "select_tablet",
      },
      router: {
        content: "Router",
        next: { filter: true },
        filter_type: "router",
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
  devicePicker: {
    heading: "Pick your device",
    cta: "Search",
    model: {
      search: {
        label: "Search",
        placeholder: "Enter keywords",
      },
      help_sizes: {
        options: ["Small", "Medium", "Large"],
      },
      help_costs: {
        options: ["Cheap", "Mid-range", "High-end"],
      },
      help_payment_types: {
        options: ["Cash", "Payment plan"],
      },
      sizes: {
        label: "Size",
        options: ["All", "Small", "Medium", "Large"],
        default: "All",
      },
      costs: {
        label: "Cost",
        options: ["All", "Cheap", "Mid-range", "High-end"],
        default: "All",
      },
      brands: {
        label: "Brand",
        options: ["All", "Apple", "Samsung", "Motorola", "Xiaomi"],
        default: "All",
      },
      tablet_brands: {
        label: "Brand",
        options: ["All", "Apple", "Samsung", "High-end"],
        default: "All",
      },
      payment_types: {
        label: "Payment type",
        options: ["All", "Cash", "Payment plan"],
        default: "All",
      },
      next: {
        select_phone: {
          content: "Search subscriptions",
          next: { filter: true },
          filter_type: "mobile_subscription",
        },
        select_tablet: {
          content: "Search subscriptions",
          next: { filter: true },
          filter_type: "mobile_subscription",
        },
        help_select_device: {
          //TODO: ver que hacer para que despues de filtrar los posibles dispositivos, para que caiga a la selección de teléfonos o tablet, con los campos ya cargados.
          content: "Search devices",
          next: { filter: true },
          filter_type: "mobile_subscription",
        },
      },
    },
  },
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
  help_select_device: ["help_sizes", "help_costs", "help_payment_types"],
  select_phone: ["search", "sizes", "costs", "brands", "payment_types"],
  select_tablet: ["search", "sizes", "costs", "tablet_brands", "payment_types"],
  router: ["data_amount", "services", "carriers", "network_5G"],
};
