import Box from "../box"
import Heading from "../heading"
import ListItem from "../list-item"
import "./index.css"


export default function Additional({ ...rest }) {
    return (
        <Box>
            <Heading border>Деталі властивості:</Heading>

            <List { ...rest }/>
        </Box>
    )
}

function List({ house_rules, cancellation_policy, local_transportation, host_languages, special_offers }) {
    return (
      <ul className="price__list">
        <ListItem>
          <div className="list_cont">
            <h3>Правила дому</h3>
            <span>{house_rules}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="list_cont">
            <h3>Політика скасування</h3>
            <span>{cancellation_policy}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="list_cont">
            <h3>Місцевий транспорт</h3>
            <span>{local_transportation}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="list_cont">
            <h3>Мови хоста</h3>
            <span>{ host_languages }</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="list_cont">
            <h3>Спеціальні пропозиції:</h3>
            <span>{special_offers}</span>
          </div>
        </ListItem>
      </ul>
    );
  }