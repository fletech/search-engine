export const DATA_CONTENT = {
  navigation: {
    back: {
      content: "back",
    },
    clear: {
      content: "reset",
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
        next: { deviceSearch: true },
        filter_type: "select_phone",
      },
      help_me_choose: {
        content: "Help me choose phone",
        next: { devicePicker: true },
        filter_type: "help_select_phone",
      },
    },
    step3_other_hardware: {
      heading: "Router o tablet?",
      options: ["router", "tablet"],
      back_to: "step2_hardware",
      tablet: {
        content: "Tablet",
        next: { devicePicker: true },
        filter_type: "help_select_tablet",
      },
      router: {
        content: "Router",
        next: { notAvailable: true },
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
    help_heading: "Pick your device",
    select_heading: "Pick your device",
    cta: "Search",
    model: {
      search: {
        label: "Search",
        placeholder: "Enter keywords",
      },

      phone_sizes: {
        h2: "Step 1: Size",
        label: "Size",
        options: ["small", "medium", "large"],
        default: "All",
        next: "costs",
        prev: false,
      },
      tablet_sizes: {
        h2: "Step 1: Size",
        label: "Size",
        options: ["small", "large"],
        default: "All",
        next: "costs",
        prev: false,
      },
      costs: {
        h2: "Step 2: Price range",
        label: "Cost",
        options: ["cheap", "mid-range", "high-end"],
        default: "All",
        next: "payment_types",
        prev: "phone_sizes",
        //TODO: corregir esto ultimo de arriba, tal vez dentro de sizes:{...options_tablet y options_phone}...VER --- ver en caso de router
      },
      payment_types: {
        h2: "Step 3: Payment type",
        label: "Payment type",
        options: ["cash", "installments"],
        default: "All",
        next: false,
        prev: "costs",
      },
      phone_brands: {
        label: "Brand",
        options: ["Apple", "Samsung", "Motorola", "Xiaomi"],
        default: "All",
      },
      tablet_brands: {
        label: "Brand",
        options: ["Apple", "Samsung"],
        default: "All",
      },
      next: {
        select_phone: {
          cta: "Search devices",
          filter: false,
          step: "searchResults",
        },
        select_tablet: {
          cta: "See tablets",
          filter: false,
          step: "searchResults",
        },
        help_select_tablet: {
          cta: "See tablets",
          filter: false,
          step: "deviceSearch",
        },
        help_select_phone: {
          cta: "See phones",
          filter: false,
          step: "deviceSearch",
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
  router: ["Not available"],

  help_select_phone: [
    "search",
    "phone_sizes",
    "costs",
    "phone_brands",
    "payment_types",
  ],
  help_select_tablet: [
    "search",
    "tablet_sizes",
    "costs",
    "tablet_brands",
    "payment_types",
  ],
  select_phone: [
    "search",
    "phone_sizes",
    "costs",
    "phone_brands",
    "payment_types",
  ],
  select_tablet: [
    "search",
    "tablet_sizes",
    "costs",
    "tablet_brands",
    "payment_types",
  ],
};

export const LABELS_DK = {
  ["carriers"]: "carriers",
  ["costs"]: "cost",
  ["data_amount"]: "data amount",
  ["network_5G"]: "network 5G",
  ["payment_types"]: "payment method",
  ["phone_sizes"]: "size",
  ["phone_brands"]: "brand",
  ["placeholder_search"]: "Sök",
  ["roaming"]: "roaming",
  ["search"]: "search",
  ["services"]: "services",
  ["tablet_brands"]: "brand",
  ["tablet_sizes"]: "size",
  ["talk_minutes"]: "talk minutes",
};
