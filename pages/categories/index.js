import Link from 'next/link'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../../styles/Home.module.css'
import Skeleton from '@mui/material/Skeleton';

import { useStyles } from './styles';

import { useQuery, gql } from '@apollo/client'
// import { GET_CATEGORIES } from './schema'

const GET_CATEGORIES = gql`
  {
    categories(filters:{}) {
      items {
        name
        id
      }
    }
  }
`;

const Categories = () => {
  const classes = useStyles();
  const response = useQuery(GET_CATEGORIES);

  const { loading, data, error } = response;

  if (loading) {
      return (
        <div className={styles.container}>
          <div className={classes.skeleton}>
            <Skeleton variant="text" width={40} height={40} />
            <Skeleton variant="text" width={40} height={40} />
            <Skeleton variant="text" width={40} height={40} />
            <Skeleton variant="text" width={40} height={40} />
            <Skeleton variant="text" width={40} height={40} />
          </div>
        </div>
      );
  }

  if (error) {
    return <p>{error}</p>;
}

  return (
    <div className={styles.container}>
        <div className={classes.root}>
            {data.categories.items.map((item, index) => {
                return (
                  <Link href={`categories/${item.id}`} key={index}>
                    <a href="https://nextjs.org/docs">
                        <Button className={classes.button} variant="contained">
                          <Typography className="typo" component="p" textTransform= 'lowercase'>{item.name}</Typography>
                        </Button>
                    </a>
                  </Link>
                );
            })}
        </div>
    </div>
  )
}

export default Categories;