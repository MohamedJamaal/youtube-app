import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import { getPopularVideos } from '../../redux/actions/videoActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const videos = useSelector((state) => state.homeVideos.videos);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {/* {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video video={video.video} key={video.id} />
          </Col>
        ))} */}

        {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video video={video} key={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
