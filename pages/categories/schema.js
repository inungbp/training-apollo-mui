import { gql } from "@apollo/client";

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getCategoryProducts($categoryId: Int!) {
    category(id: $categoryId){
      id
      name
      url_key
      products{
        items{
          id
          name
          sku
        }
        total_count
      }
    }
  }
`;

export const GET_PRODUCTS_BY_SKU = gql`
  query getProducts($sku: String!) {
    products(filter:{sku:{eq:$sku}}){
      items {
        name
        description {
          html
        }
        image {
          url
        }
        price_range {
          minimum_price{
            final_price{
              value
            }
          }
        }
      }
    }
  }
`;

export const POST_SUBSCRIBE = gql`
  mutation subscribeEmail($email: String!) {
    subscribe(
      input: { email: $email }
    ){
      status {
        code
        message
        response
      }
    }
  }
`;