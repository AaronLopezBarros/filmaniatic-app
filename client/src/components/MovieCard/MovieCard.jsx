import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function MovieCard(props) {

    const {movie} = props

  return (
    <Card sx={{ minWidth: 245, minHeight: 175}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="125"
          image={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize: 16}} variant="h7" component="div">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

