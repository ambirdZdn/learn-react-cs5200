import {GalleryProps} from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";

function ListItem(props: ListItemProps) {
  return (
    <li>
      <b>{props.label}: </b>
      {props.content}
    </li>
  );
}

function Gallery(props: GalleryProps) {
  const {scientist, size=100} = props;
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + scientist.imageId + 's.jpg'}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <ListItem label="Profession" content={scientist.profession} />
        <ListItem label="Awards" content={scientist.awards} />
        <ListItem label="Discovery" content={scientist.discovery} />
      </ul>
    </section>
  );
}

export default function Profile() {
  return (
    <div>
      <Gallery
        scientist={{
          name: 'Maria Skłodowska-Curie',
          imageId: 'szV5sdG',
          profession: 'physicist and chemist',
          awards: '4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
          discovery: 'polonium (element)',
        }}
      />
      <Gallery
        scientist={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
          profession: 'geochemist',
          awards: '2 (Miyake Prize for geochemistry, Tanaka Prize)',
          discovery: 'a method for measuring carbon dioxide in seawater',
        }}
      />
      <Gallery
        scientist={{
          name: 'Katherine Johnson',
          imageId: '1bX5QH6',
          profession: 'Mathematician',
          awards: 'Presidential Medal of Freedom',
          discovery: 'Trajectory analysis for space travel',
        }}
      />
    </div>
  );
}
