import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS_BY_CATEGORY } from './schema'

function CategoryById() {
    const router = useRouter();
    const { unique } = router.query;

    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            categoryId: unique,
        }
    });

    if (loading || error) return <></>;

    console.log(1);

    return data.category.products.items.map((product) => {
        return (
            <>
                <Link href={`product/${product.sku}`}>
                    <a>
                        <p key={product.id}>{product.name}</p>
                    </a>
                </Link>
            </>
        )
    })
}

export default CategoryById