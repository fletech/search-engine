export const getFilterModel = (filters, filter_type, filter_model) => {
  let filter_content = {};
  filters[filter_type].map((filter) => {
    filter_content = {
      ...filter_content,
      [filter]: filter_model[filter],
    };
  });

  filter_content = { ...filter_content, next: filter_model.next };
  return filter_content;
};

export const normalizeString = (string) => {
  let newString = string.replace("_", " ");
  return newString;
};

export const pluralToSingular = (string) => {
  let newString;

  if (string[string.length - 1] == "s") {
    newString = string.slice(0, -1);
  } else {
    newString = string;
  }
  return newString;
};

export const renderComponent = (string, object) => {
  const COMPONENT = object[string];
  return <COMPONENT />;
};
