/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_SKU } from '../schema';
import { useStyles } from '../styles';

function CategoryById() {
    const styles = useStyles();
    const router = useRouter();
    const { unique } = router.query;

    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_SKU, {
        variables: {
            sku: unique,
        }
    });

    if (loading || error) return <></>;

    const dataProduct = data.products.items[0];

    return (
        <div className={styles.product}>
            <img src={dataProduct.image.url} alt={dataProduct.name} />
            <p>{dataProduct.name}</p>
            <p>{`Rp. ${dataProduct.price_range.minimum_price.final_price.value}`}</p>
            <div dangerouslySetInnerHTML={{ __html: dataProduct.description.html }} />
        </div>
    )
}

export default CategoryById