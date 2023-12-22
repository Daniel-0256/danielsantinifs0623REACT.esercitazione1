import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=520c5a47&s=${this.props.searchFilms}`);

      if (!response.ok) {
        throw new Error('Errore!');
      }

      const data = await response.json();

      if (data && data.Search) {
        this.setState({ films: data.Search });
      }
    } catch (error) {
      console.log('Errore:', error);
    }
  };

  render() {
    const films = this.state.films
    console.log(films)
    return (
        <Row className="bg-dark" id="rowCard">
        {films.map((film, index) => (
          <Col key={index} lg={1} className="pb-1 pt-1">
            <Card id="card">
              <Card.Img variant="top" src={film.Poster} alt={film.Title} />
            </Card>
          </Col>
        ))}
      </Row>
    )
  }
}

export default CardList;