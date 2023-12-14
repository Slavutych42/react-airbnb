import Box from "../box"
import Heading from "../heading"
import ListItem from "../list-item"
import "./index.css"
import bathroom from "./bathroom.svg";
import bedroom from "./bedroom.svg";
import travel from "./travel.svg";
import people from "./people.svg";

export default function Details({ ...rest }) {
    return (
        <Box>
            <Heading>Деталі властивості:</Heading>

            <List { ...rest }/>
        </Box>
    )
}

function List({ guests, bedrooms, beds, baths }) {
    return (
      <ul className="price__list">
        <ListItem>
          <img src={people} alt="people" height={24} width={24} />
          <span>{guests}</span>
          <span>гостей</span>
        </ListItem>
        <ListItem>
        <img src={bedroom} alt="bedroom" height={24} width={24} />
          <span>{bedrooms}</span>
          <span>спальня</span>
        </ListItem>
        <ListItem>
        <img src={travel} alt="travel" height={24} width={24} />
          <span>{beds}</span>
          <span>ліжко</span>
        </ListItem>
        <ListItem>
        <img src={bathroom} alt="bathroom" height={24} width={24} />
          <span>{baths}</span>
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    );
  }