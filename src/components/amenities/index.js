import Box from "../box"
import Heading from "../heading"
import ListItem from "../list-item"
import "./index.css"
import pool from "./pool.svg";
import airport from "./airport.svg";
import breakfest from "./breakfest.svg";
import child from "./child.svg";
import gym from "./gym.svg";
import meeting from "./meeting.svg";
import park_loc from "./park_loc.svg";
import pet from "./pet.svg";
import security from "./security.svg";
import wifi from "./wifi.svg";


export default function Amenities({ ...rest }) {
    return (
        <Box>
            <Heading>Зручності</Heading>

            <List { ...rest }/>
        </Box>
    )
}

function List({ ...rest }) {
    return (
      <ul className="price__list">
        <ListItem>
          <img src={pool} alt="people" height={24} width={24} />
          <span>Басейн</span>
        </ListItem>
        <ListItem>
        <img src={gym} alt="bedroom" height={24} width={24} />
          <span>Спортивний зал</span>
        </ListItem>
        <ListItem>
        <img src={breakfest} alt="travel" height={24} width={24} />
          <span>Безкоштовний сніданок</span>
        </ListItem>
        <ListItem>
        <img src={wifi} alt="bathroom" height={24} width={24} />
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
        <ListItem>
        <img src={park_loc} alt="bathroom" height={24} width={24} />
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
        <ListItem>
        <img src={pet} alt="bathroom" height={24} width={24} />
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
        <ListItem>
        <img src={airport} alt="bathroom" height={24} width={24} />
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
        <ListItem>
        <img src={security} alt="bathroom" height={24} width={24} />
          <span>Консьєрж-сервіс</span>
        </ListItem>
        <ListItem>
        <img src={meeting} alt="bathroom" height={24} width={24} />
          <span>Обслуговування номерів</span>
        </ListItem>
        <ListItem>
        <img src={child} alt="bathroom" height={24} width={24} />
          <span>Підходить для дітей</span>
        </ListItem>
      </ul>
    );
  }