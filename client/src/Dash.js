import React, { Component } from "react";
import {
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Dimmer,
  Loader,
  Divider
} from "semantic-ui-react";

class Dash extends Component {
  state = {};

  componentDidMount() {
    this.getDrinks();
  }
  gets = url => {
    return window
      .fetch(url)
      .then(res => res.json())
      .catch(err => err);
  };

  getDrinks = () => {
    this.gets("/api/drinks").then(drinks => {
      if (drinks.length) {
        this.setState({ drinks: drinks });
        this.getDrink(drinks[0].id);
      } else {
        this.setState({ drinks: [] });
      }
    });
  };
  getDrink = id => {
    this.gets(`/api/drinks/${id}`).then(drink =>
      this.setState({ drink: drink })
    );
  };

  render() {
    let { drinks, drink } = this.state;
    return drinks ? (
      <Container text>
        <Header as="h2" icon textAlign="center" color="teal">
          <Icon name="unordered list" circular />
          <Header.Content>List of Ingredients</Header.Content>
        </Header>
        <Divider hidden section />
        {drinks && drinks.length ? (
          <Button.Group color="teal" fluid widths={drinks.length}>
            {Object.keys(drinks).map(key => {
              return (
                <Button
                  active={drink && drink.id === drinks[key].id}
                  fluid
                  key={key}
                  onClick={() => this.getDrink(drinks[key].id)}
                >
                  {drinks[key].title}
                </Button>
              );
            })}
          </Button.Group>
        ) : (
          <Container textAlign="center"> No drinks found</Container>
        )}
        <Divider section />
        {drink && (
          <Container>
            <Header as="h2">{drink.title}</Header>
            {drink.description && <p>{drink.description}</p>}
            {drink.ingredients && (
              <Segment.Group>
                {drink.ingredients.map((ingredient, i) => (
                  <Segment key={i}>{ingredient.description}</Segment>
                ))}
              </Segment.Group>
            )}
            {drink.steps && <p>{drink.steps}</p>}
            {drink.source && (
              <Button basic size="tiny" color="teal" href={drink.source}>
                Source
              </Button>
            )}
          </Container>
        )}
      </Container>
    ) : (
      <Container text>
        <Dimmer active inverted>
          <Loader content="Loading" />
        </Dimmer>
      </Container>
    );
  }
};

export default Dash;
