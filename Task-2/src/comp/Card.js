import React from 'react';
import Button from '@material-ui/core/Button';
import ReactRoundedImage from "react-rounded-image";
import {
  Card, CardBody,CardText,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = ({ name, email, id, lname}) => {
    return (
      <div className='tc grow bg-light-green br2 pa3 ma5 dib bw2 shadow-20'>
      <Card>
      <ReactRoundedImage image= {`https://reqres.in/img/faces/${id}-image.jpg`}roundedSize="10" style={{display: 'flex'}} imageWidth="150"
  imageHeight="150" hoverColor="#000"
roundedColor="white"  />
        <CardBody>
        <br/>
          <CardTitle tag="h2">{name} {lname}</CardTitle>
          <br/>
          <CardSubtitle tag="h3" className="mb-2 text-muted">{email}</CardSubtitle>
          <br/>
          <CardText>Associate analysts </CardText>
          <br/>   
      <Button  variant="contained" outline color="success">Know More</Button>
        </CardBody>
      </Card>

    </div>
    );
  }
export default Cards;
