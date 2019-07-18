import { Link } from 'react-router-dom';

export default ({ data, loading, error }) => {
  if (error || loading) {
    return { error, loading };
  };

  const { results = [] } = data;
  const items = results.map(result => ({
    id: result.id,
    imageUrl: result.thumbnail,
    price: result.price,
    description: result.title,
    country: result.address.state_name,
    component: Link,
    componentProps: {
      to: `/items/${result.id}`,
    },
  }));

  return { items, loading, error };
};
