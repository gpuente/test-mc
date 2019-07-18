import React from 'react';
import PropTypes from 'prop-types';
import DetailCard from 'UI/DetailCard';


const Detail = (props) => {
  const {
    i18n,
    title,
    label,
    price,
    error,
    loading,
    imageUrl,
    imageAlt,
    onSubmit,
    description,
  } = props;

  if (loading) return 'Loading...';
  if (error) return 'Error...';

  return (
    <div>
      <DetailCard
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        title={title}
        label={label}
        price={price}
        description={description}
        onSubmit={onSubmit}
        i18n={i18n}
      />
    </div>
  );
};

export default Detail;
