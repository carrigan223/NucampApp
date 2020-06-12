import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';

function RenderCampsite({campsite}) {
    return(
        <div className="col-md-5 m-1">
            <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    )
} // renderCampsite method is showing the selected campsite info
function RenderComments({comments}) {
    if (comments) {
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {COMMENTS.map(comment => <div key={comment.id}><p>{comment.text}<br />-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></div>)}
            </div>
        )
    } else {
        return <div />
    };
}
// renderComments method is showing the selected campgrounds comments
function CampsiteInfo(props) {
    if (props.campsite) {
    return <div className="container">
                <div>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
    } else {
    return <div></div>
        }
    };
// this render function containing renderCampsites and renderComments causes the campsite component to render upon click

export default CampsiteInfo;