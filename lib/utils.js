export const getFilterModel = (filters, filter_type, filter_model) => {
  let filter_content = {};
  filters[filter_type].map((filter) => {
    filter_content = {
      ...filter_content,
      [filter]: filter_model[filter],
    };
  });
  return filter_content;
};
