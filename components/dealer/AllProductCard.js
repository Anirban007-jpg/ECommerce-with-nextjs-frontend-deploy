import React from 'react'
import { API } from '../../config';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import {isAuth} from "../../actions/auth";

const AllProductCard = ({product}) => {
    
    const description = product.product_description.slice(0,12) + '.........';
    
    return (
       <Card style={{maxWidth : '345', marginLeft: '18rem', }}>
      <CardActionArea>
        <CardMedia
          height="200"
          width="290"
          image={`${API}/product/${product._id}/Capture9.PNG`}
          title={product.product_name}
          component="img"
        /><hr/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.product_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link href={`dealer/product/${product.slug}`}>
                 <span className="btn btn-raised" style={{backgroundColor: '#3814ff'}}>
                       Read More
                 </span>
          </Link>

        {isAuth() && isAuth().role === 'Dealer'  && (
          <>
                 <Link href={`dealer/product/${product.slug}`}>
                 <span className="btn btn-raised" style={{backgroundColor: 'light-blue'}}>
                       Edit
                 </span>
               </Link>
               <Link href={`dealer/product/${product.slug}`}>
                 <span className="btn btn-raised" style={{backgroundColor: 'red'}}>
                       Delete
                 </span>
               </Link>
          </>
        )}

        {isAuth()  && isAuth().role === 'Admin'  && (
          <>
                 <Link href={`dealer/product/${product.slug}`}>
                 <span className="btn btn-raised" style={{backgroundColor: 'light-blue'}}>
                       Edit
                 </span>
               </Link>
               <Link href={`dealer/product/${product.slug}`}>
                 <span className="btn btn-raised" style={{backgroundColor: 'red'}}>
                       Delete
                 </span>
               </Link>
          </>
        )}
   
      </CardActions>
    </Card>
    )
}

export default AllProductCard
