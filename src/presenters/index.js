export const basePresenter = (res = null, error = null) => ({
  error,
  loading: !res && !error,
  data: error ? null : res.data,
});

export const resultsPresenter = (res, error) => ({
  results: basePresenter(res, error)
});

export const detailPresenter = ([
  detail = null,
  description = null
] = [], error) => {
  const detailPresented = basePresenter(detail, error);
  const descriptionPresented = basePresenter(description, error);

  return {
    detail: {
      error: detailPresented.error || descriptionPresented.error,
      loading: detailPresented.loading || descriptionPresented.loading,
      data: {
        detail: detailPresented.data,
        description: descriptionPresented.data,
      },
    },
  };
};
