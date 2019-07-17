import React from 'react';
import { get } from 'Config';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import DetailCard from 'UI/DetailCard';

const API_ENDPOINT = get('apiEndpoint');

const Results = (props) => {
  const { t, match } = props;
  const { id } = match.params;

  const itemEndpoint = `${API_ENDPOINT}/items/${id}`;
  const descriptionEndpoint = `${API_ENDPOINT}/items/${id}/description`;

  const [{
    data: itemData,
    error: itemError,
    loading: itemLoading,
  }] = useAxios(encodeURI(itemEndpoint));

  const [{
    data: descriptionData,
    error: descriptionError,
    loading: descriptionLoading,
  }] = useAxios(encodeURI(descriptionEndpoint));

  if (itemLoading || descriptionLoading) return 'Loading...';
  if (itemError || descriptionError) return 'Error...';

  const condition = t(`modules:detail:${itemData.condition}`);

  return (
    <div>
      <DetailCard
        imageUrl={itemData.thumbnail}
        imageAlt={itemData.id}
        title={itemData.title}
        label={`${condition} - ${itemData.sold_quantity} ${t('modules:detail:sold')}`}
        price={itemData.price}
        description={descriptionData.plain_text}
        onSubmit={() => console.log('submit')}
        i18n={{
          description: t('modules:detail:description'),
          cta: t('modules:detail:cta'),
        }}
      />
    </div>
  );
};

export default Results;
