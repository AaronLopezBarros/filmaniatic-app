import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "@mui/material";
import PopularBanner from "../../components/PopularBanner/PopularBanner";
import "./IndexPage.css";


const IndexPage = () => {
  let API_URL = `${process.env.REACT_APP_SERVER_URL}/popular/movies`;
  const [data, setData] = useState();
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    const axiosCall = async () => {
      const dataFromAxios = await axios.get(API_URL);
      setData(dataFromAxios.data.popularMovies);
      setLoadData(true);
    };
    axiosCall();
  }, []);

  return (
    loadData && (
      <Container sx={{ mt: 12 }}>
      <PopularBanner />
        {data.map((movie) => {
          return (
            <div key={movie.id} className="containerMovieCards">
              <MovieCard sx={{ flex: "wrap" }} movie={movie} />
            </div>
          );
        })}
      </Container>
    )
  );
};

export default IndexPage;
