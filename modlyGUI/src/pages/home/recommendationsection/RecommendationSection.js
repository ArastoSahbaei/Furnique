import React from 'react'
import './RecommendationSection.css'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import user1 from "../../../shared/images/arrow.png"


export default function RecommendationSection() {
    return (
        <div className="recommendationSectionWrapper">

            <p className="recommendationTitle">Word!</p>


            <Card className="card1">
                <CardHeader avatar={ <Avatar aria-label="Recipe">  <img className="image1"  src={user1} alt="Eng" /> </Avatar> }
                title="Jenny Hill"/>
                <CardContent>
                <Typography component="p"> "Finally a dining table that fits my long, but narrow kitchen. i love the scandinavian design!" </Typography>
                </CardContent>
            </Card>
            <Card className="card2">
                <CardHeader avatar={ <Avatar aria-label="Recipe">  <img className="image1"  src={user1} alt="Eng" /> </Avatar> }
                title="Arasto Sahbaei"/>
                <CardContent>
                <Typography component="p"> "Finally a dining table that fits my long, but narrow kitchen. i love the scandinavian design!" </Typography>
                </CardContent>
            </Card>
            <Card className="card3">
                <CardHeader avatar={ <Avatar aria-label="Recipe">  <img className="image1"  src={user1} alt="Eng" /> </Avatar> }
                title="Mario Jose"/>
                <CardContent>
                <Typography component="p"> "Finally a dining table that fits my long, but narrow kitchen. i love the scandinavian design!" </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
