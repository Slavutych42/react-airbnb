import { Fragment } from "react"
import Box from "../box"
import Heading from "../heading"
import ListItem from "../list-item"
import "./index.css"


export default function NearbyAttractions({ nearbyAttractions }) {
    return (
        <Box>
            <Heading>Памятки поблизу</Heading>

            
            {nearbyAttractions.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <List { ...rest }/>
                    </Fragment>
                ))}
        </Box>
    )
}

function List({ link, name }) {
    return (
      <ul className="price__list">
        <ListItem>
          <a href={link}>{name}</a>
        </ListItem>
        
      </ul>
    );
  }