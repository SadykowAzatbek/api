'use client';
import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axiosApi from '@/axiosApi';
import { Product } from '@/types';

export default function Home() {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const productsResponse = await axiosApi.get<Product[]>('/products');
      return productsResponse.data;
    },
  });

  console.log(query.data);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} href="/products/new">
            Add product
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
