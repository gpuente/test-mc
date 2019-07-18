export default ({ data, error, loading }, t) => {
  if (error || loading) {
    return { error, loading };
  };

  const condition = t(`modules:detail:${data.detail.condition}`);

  return {
    error,
    loading,
    imageUrl: data.detail.thumbnail,
    imageAlt: data.detail.id,
    title: data.detail.title,
    label: `${condition} - ${data.detail.sold_quantity} ${t('modules:detail:sold')}`,
    price: data.detail.price,
    description: data.description.plain_text,
    onSubmit: () => console.log('submit'),
    i18n: {
      description: t('modules:detail:description'),
      cta: t('modules:detail:cta'),
    },
  };
};
